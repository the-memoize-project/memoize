import { define } from "directive";
import { hydrate } from "stanard/interface";
import { paint, willPaint } from "standard/dom";
import component from "./component";
import Deck from "./deck";

@define("m-deck-header")
@paint(component)
class Header extends HTMLElement {
  #deck;

  get deck() {
    return (this.#deck ??= {});
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @willPaint
  async [hydrate]() {
    this.#deck = await Deck.current();
    return this;
  }
}

export default Header;
