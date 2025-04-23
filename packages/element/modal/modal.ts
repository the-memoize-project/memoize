import { define } from "directive";
import { paint } from "standard/dom";
import Echo from "standard/echo";
import on, { stop } from "standard/event";
import { visibility } from "standard/interface";
import joinCut from "standard/joinCut";
import component from "./component";
import style from "./style";

@define("m-modal")
@paint(component, style)
class Modal extends Echo(HTMLElement) {
  #internals;
  #opened;

  get opened() {
    return (this.#opened ??= false);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.#internals = this.attachInternals();
  }

  @on.click("overlayer", stop)
  @joinCut(visibility)
  close() {
    this.#opened = false;
    return this;
  }

  @joinCut(visibility)
  open() {
    this.#opened = true;
    return this;
  }

  [visibility]() {
    this.opened
      ? this.#internals.states.add("opened")
      : this.#internals.states.delete("opened");
    return this;
  }
}

export default Modal;
