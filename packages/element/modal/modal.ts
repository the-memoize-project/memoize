import { define } from "directive";
import attributeChanged, { booleanAttribute } from "directive/attributeChanged";
import { paint, willPaint } from "standard/dom";
import Echo, { dispatchEvent } from "standard/echo";
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

  @attributeChanged("opened", booleanAttribute)
  @joinCut(visibility)
  set opened(value) {
    this.#opened = value;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.#internals = this.attachInternals();
  }

  @on.click("overlayer", stop)
  @dispatchEvent("close")
  close() {
    this.opened = false;
    return this;
  }

  open() {
    this.opened = true;
    return this;
  }

  @willPaint
  [visibility]() {
    this.opened
      ? this.#internals.states.add("opened")
      : this.#internals.states.delete("opened");
    return this;
  }
}

export default Modal;
