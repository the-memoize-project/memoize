import User from "auth/signIn/user";
import { define } from "directive";
import { paint, willPaint } from "standard/dom";
import { handle } from "standard/interface";
import * as Navigate from "standard/navigate";
import component from "./component";
import style from "./style";

@define("m-splash")
@paint(component, style)
class Splash extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @willPaint
  async [handle]() {
    const auth = await User.isItAuthenticated();
    auth.match({
      Authenticated: () => Navigate.goToDashboard(),
    });
    return this;
  }
}

export default Splash;
