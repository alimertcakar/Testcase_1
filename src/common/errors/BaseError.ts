export default class BaseError extends Error {
  constructor(message: string) {
    super(message);

    // restore prototype chain https://stackoverflow.com/questions/41102060/typescript-extending-error-class
    const actualProto = new.target.prototype;
    Object.setPrototypeOf(this, actualProto);
  }
}
