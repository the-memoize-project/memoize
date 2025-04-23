import { connected, define } from "directive";
import attributeChanged, { booleanAttribute } from "directive/attributeChanged";
import * as Services from "service";
import Echo, { dispatchEvent } from "standard/echo";
import { handle } from "standard/interface";
import Detail from "./detail";
import EventName from "./eventName";

@define("m-service")
class Service extends Echo(HTMLElement) {
  #autoExecute;
  #name;

  get autoExecute() {
    return (this.#autoExecute ??= false);
  }

  @attributeChanged("auto-execute", booleanAttribute)
  set autoExecute(value) {
    this.#autoExecute = value;
  }

  get name() {
    return this.#name;
  }

  @attributeChanged("name")
  @dispatchEvent("name")
  set name(value) {
    this.#name = value;
  }

  constructor() {
    super();
    this.style.setProperty("display", "none");
  }

  async execute(payload) {
    const { data, error } = await Services[this.name](payload);
    const eventName = EventName.from(error);
    const detail = Detail.from(data, error);
    const event = new CustomEvent(eventName, { detail });
    this.dispatchEvent(event);
    return this;
  }

  @connected
  [handle]() {
    this.autoExecute && this.execute();
    return this;
  }
}

export default Service;
