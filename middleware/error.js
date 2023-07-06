class HttpError extends Error {
    constructor(message, status) {
      super(message); // add message
      this.code = status;
    }
  }
  module.exports = HttpError;
  