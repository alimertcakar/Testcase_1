import BaseError from './BaseError';

export default class TriedToFindFileButFoundFolderError extends BaseError {
  constructor() {
    super('Tried to find a file but found folder');
  }
}
