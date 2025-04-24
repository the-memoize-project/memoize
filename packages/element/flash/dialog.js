class Dialog {
  #message;
  #title;
  #type;

  get message() {
    return (this.#message ??= "");
  }

  get title() {
    return (this.#title ??= "");
  }

  get type() {
    return (this.#type ??= Dialog.ALERT);
  }

  static get ALERT() {
    return "alert";
  }

  static get CONFIRM() {
    return "confirm";
  }

  constructor(title, message, type) {
    this.#title = title;
    this.#message = message;
    this.#type = type;
  }

  static from(title, message, type) {
    return new Dialog(title, message, type);
  }
}

export default Dialog;
