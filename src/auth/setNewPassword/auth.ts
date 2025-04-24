import style from "auth/signIn/style";
import { define } from "directive";
import { paint, willPaint } from "standard/dom";
import on, { detail, stop } from "standard/event";
import { handle } from "standard/interface";
import * as Navigate from "standard/navigate";
import component from "./component";
import User from "./user";

@define("m-set-new-password")
@paint(component, style)
class Auth extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.submit("reset", stop, detail)
  async reset(data) {
    const auth = await User.updateUser(data);
    auth.match({
      Ok: () => Navigate.goToPasswordReseted(),
    });
    return this;
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

export default Auth;
