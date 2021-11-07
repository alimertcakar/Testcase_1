import BaseError from './BaseError';

export default class FolderNotFound extends BaseError {
  constructor() {
    super('Folder not found');
  }
}
