import BaseError from './BaseError';

export default class CantMoveFolderError extends BaseError {
  constructor() {
    super('You cannot move a folder');
  }
}
