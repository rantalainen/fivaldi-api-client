import { InternalAxiosRequestConfig } from 'axios';
import crypto from 'node:crypto';

/**
 * Every request must be signed with a message authentication code (MAC) composed of different values extracted from the request.
 * The different values are combined to a string, separating them by a linefeed (unicode code point U+000A).
 * The resulting string is then hashed with HMAC SHA256, using the partner secret as a key.
 * The resulting hash is Base64 encoded and added to the Authorization header of each request, using "Fivaldi" as the authentication type.
 */
export async function addAuthHeaders(partnerId: string, partnerSecret: string, config: InternalAxiosRequestConfig) {
  const LF = '\n';

  // Set X-Fivaldi-Timestamp and X-Fivaldi-Partner headers
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const authHeaders: Record<string, string> = {
    'X-Fivaldi-Partner': partnerId,
    'X-Fivaldi-Timestamp': timestamp
  };

  // Determine HTTP method
  const method = (config.method || 'GET').toUpperCase();

  // Compute MD5 hash of the request body and set Content-Type header
  let bodyMD5 = '';
  let contentType = '';

  if (config.data instanceof FormData) {
    // In case of FormData, we must use empty MD5 hash and set Content-Type to empty string
    // I have no idea why Fivaldi does this, but it is required for the API to work ¯\_(ツ)_/¯
    bodyMD5 = '';
    contentType = '';
  } else if (typeof config.data === 'string') {
    // If the data is a string, compute MD5 hash of the string
    bodyMD5 = crypto.createHash('md5').update(config.data, 'utf8').digest('hex');
    contentType = 'application/json';
  } else if (config.data && typeof config.data === 'object') {
    // If the data is an object, convert it to a JSON string and compute MD5 hash
    const bodyString = JSON.stringify(config.data);
    bodyMD5 = crypto.createHash('md5').update(bodyString, 'utf8').digest('hex');
    contentType = 'application/json';
  }

  // Parse URL to extract query string
  const url = new URL(config.url || '', config.baseURL);
  // const queryString = url.search ? url.search.slice(1) : '';

  const queryParams = config.params || {};
  const queryString = Object.entries(queryParams)
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return value.map((v) => `${encodeURIComponent(key)}=${encodeURIComponent(v)}`).join('&');
      }
      return `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`;
    })
    .join('&');

  // Extract the path from the base URL
  const apiUrl = config.baseURL?.replace('http://', '').replace('https://', '') || '';
  // Api URL is for example api.fivaldi.net/customer/api and we need to extract the path from it (e.g. /customer/api)
  let path = '';
  if (apiUrl.includes('/')) path = apiUrl.substring(apiUrl.indexOf('/'));

  // Add the end point path to the path so that the end result is like /customer/api/companies for example
  path += url.pathname;

  // Construct the string to sign
  let stringToSign = [
    method,
    bodyMD5,
    contentType || '',
    `x-fivaldi-partner:${authHeaders['X-Fivaldi-Partner']}`,
    `x-fivaldi-timestamp:${authHeaders['X-Fivaldi-Timestamp']}`,
    path
  ].join(LF);
  if (queryString) {
    stringToSign += LF + queryString;
  }

  // Compute HMAC-SHA256 signature and encode in Base64
  const hmac = crypto.createHmac('sha256', partnerSecret);
  hmac.update(stringToSign, 'utf8');
  const signature = hmac.digest('base64');

  // Set Authorization header
  authHeaders['Authorization'] = `Fivaldi ${signature}`;

  return authHeaders;
}
