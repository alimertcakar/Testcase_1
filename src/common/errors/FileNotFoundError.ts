import BaseError from './BaseError';

export default class FileNotFoundError extends BaseError {
  constructor() {
    super('File not found');
  }
}
