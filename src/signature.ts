import * as crypto from 'crypto-js';
import { Method } from 'got/dist/source';
/** Every request must be signed with a message authentication code (MAC) composed of different values extracted from the request.
 * The different values are combined to a string, separating them by a linefeed (unicode code point U+000A).
 * The resulting string is then hashed with HMAC SHA256, using the partner secret as a key.
 * The resulting hash is Base64 encoded and added to the Authorization header of each request, using "Fivaldi" as the authentication type. */
export async function getHeaders(partnerId: string, partnerSecret: string, method: Method, url: string, body: any): Promise<{}> {
  const LF = '\u000a';

  let bodyMD5 = '';
  let contentType = '';

  // Get Unix time (seconds since the Epoch)
  const time = Math.floor(new Date().getTime() / 1000).toString();

  let headers: {
    [key: string]: string;
  } = {
    'X-Fivaldi-Partner': partnerId,
    'X-Fivaldi-Timestamp': time
  };

  // If there is a body, hash it for later use and add Content-Type to headers
  if (body) {
    bodyMD5 = crypto.MD5(JSON.stringify(body)).toString();
    contentType = 'application/json';
    headers['Content-Type'] = contentType;
  }

  // Start building the string that will be signed
  let stringToSign =
    method + LF + bodyMD5 + LF + contentType + LF + `x-fivaldi-partner:${partnerId}` + LF + `x-fivaldi-timestamp:${time}` + LF;

  // Setup the url to be added to the string
  const apiUrl = url.replace('http://', '').replace('https://', '');
  let path = '';
  let queryStr = '';

  if (apiUrl.includes('?')) {
    path = apiUrl.substring(apiUrl.indexOf('/'), apiUrl.indexOf('?'));
    queryStr = LF + encodeURI(apiUrl.substring(apiUrl.indexOf('?') + 1));
  } else {
    path = apiUrl.substring(apiUrl.indexOf('/'));
  }

  // Add url path and possible parameters to the string
  stringToSign += path + queryStr;

  // Convert the string and the key to word array
  const wordArrayToSign = crypto.enc.Utf8.parse(stringToSign);
  const key = crypto.enc.Utf8.parse(partnerSecret);

  // Calculate the hash from string using partner secret
  const hash = crypto.HmacSHA256(wordArrayToSign, key);
  // Add Authorization header to the headers
  headers.Authorization = `Fivaldi ${crypto.enc.Base64.stringify(hash)}`;

  return headers;
}
