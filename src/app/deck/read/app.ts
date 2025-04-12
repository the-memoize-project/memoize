import { define } from "directive";
import { paint, willPaint } from "standard/dom";
import { hydrate } from "standard/interface";
import component from "./component";
import Deck from "./deck";
import style from "./style";

@define("m-deck")
@paint(component, style)
class App extends HTMLElement {
  #deck;

  get deck() {
    return (this.#deck ??= []);
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

export default App;
