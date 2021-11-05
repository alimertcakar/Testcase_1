import BaseError from './BaseError';

export default class InvalidParameterError extends BaseError {
  constructor() {
    super('Invalid or missing parameter');
  }
}
