import { define } from "directive";
import attributeChanged, {
  booleanAttribute,
  resizing,
} from "directive/attributeChanged";
import { paint, repaint } from "standard/dom";
import { visibility } from "standard/interface";
import joinCut from "standard/joinCut";
import component from "./component";
import style from "./style";

@define("m-box")
@paint(component, style)
class Box extends HTMLElement {
  #elevated;
  #internals;
  #height;
  #outlined;
  #spacing;
  #width;

  get elevated() {
    return (this.#elevated ??= false);
  }

  @attributeChanged("elevated", booleanAttribute)
  @joinCut(visibility)
  set elevated(value) {
    this.#elevated = value;
  }

  get height() {
    return (this.#height ??= "auto");
  }

  @attributeChanged("height", resizing)
  @repaint
  set height(value) {
    this.#height = value;
  }

  get outlined() {
    return (this.#outlined ??= false);
  }

  @attributeChanged("outlined", booleanAttribute)
  @joinCut(visibility)
  set outlined(value) {
    this.#outlined = value;
  }

  get width() {
    return (this.#width ??= "100%");
  }

  @attributeChanged("width", resizing)
  @repaint
  set width(value) {
    this.#width = value;
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.#internals = this.attachInternals();
  }

  [visibility]() {
    this.elevated
      ? this.#internals.states.add("elevated")
      : this.#internals.states.delete("elevated");

    this.outlined
      ? this.#internals.states.add("outlined")
      : this.#internals.states.delete("outlined");

    return this;
  }
}

export default Box;
