'use strict'

class ErrorMessage {
  constructor(status, detail) {
    this.status = status.toString();
    this.detail = detail;

    switch (status) {
      case 404:
        this.title = 'not found';
        break;
      default:
        this.title = 'unkown error';
    }
  }
}

module.exports = ErrorMessage;
