import { FivaldiApiClient } from '../index';
import { Methods } from '../methods';

export class ArchiveMethods extends Methods {
  constructor(apiClient: FivaldiApiClient) {
    super(apiClient, '/archive');
  }

  /** Gets download url for a file. */
  async getFileUrl(fileId: string): Promise<string> {
    return await super.request('GET', `/files/${fileId}`);
  }
}
