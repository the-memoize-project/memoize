import { connected, define } from "directive";
import { paint, repaint } from "standard/dom";
import Echo from "standard/echo";
import on, { stop } from "standard/event";
import { handle } from "standard/interface";
import Option from "standard/option";
import component from "./component";
import Dialog from "./dialog";
import style from "./style";

@define("m-flash")
@paint(component, style)
class Flash extends Echo(HTMLElement) {
  #completion;
  #dialog;
  #opened;

  get dialog() {
    return (this.#dialog ??= Dialog.from());
  }

  get opened() {
    return (this.#opened ??= false);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.click("#cancel", stop)
  @repaint
  cancel() {
    this.#opened = false;
    this.#completion?.(Option.Disagree());
    return this;
  }

  @on.click("#confirm", stop)
  @repaint
  confirm() {
    this.#opened = false;
    this.#completion?.(Option.Agree());
    return this;
  }

  @on.close("#modal", stop)
  @on.click("#close", stop)
  @repaint
  hide() {
    this.#opened = false;
    this.#completion?.(Option.Close());
    return this;
  }

  @repaint
  show() {
    this.#opened = true;
    return this;
  }

  @connected
  [handle]() {
    globalThis.Flash = {
      alert: (title, message) => {
        this.#dialog = Dialog.from(title, message);
        this.show();
        return new Promise((resolve) => (this.#completion = resolve));
      },

      confirm: (title, message) => {
        this.#dialog = Dialog.from(title, message, Dialog.CONFIRM);
        this.show();
        return new Promise((resolve) => (this.#completion = resolve));
      },
    };
    return this;
  }
}

export default Flash;
