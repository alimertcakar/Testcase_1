import BaseError from './BaseError';

export default class TriedToFindFolderButFoundFileError extends BaseError {
  constructor() {
    super('Tried to find a folder but found file');
  }
}
