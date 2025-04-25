import style from "auth/signIn/style";
import { define } from "directive";
import { paint, willPaint } from "standard/dom";
import on, { detail, stop } from "standard/event";
import { handle } from "standard/interface";
import * as Navigate from "standard/navigate";
import component from "./component";
import Notification from "./notification";
import User from "./user";

@define("m-sign-up")
@paint(component, style)
class Auth extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.submit("#signUp", stop, detail)
  async create(data) {
    const auth = await User.signUp(data);
    auth.match({
      Created: () => Navigate.goToDashboard(),
      Error: () => Notification.signUpFail(),
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
