import { define } from "directive";
import { paint, willPaint } from "standard/dom";
import on, { detail, prevent, stop } from "standard/event";
import { handle } from "standard/interface";
import * as Navigate from "standard/navigate";
import component from "./component";
import Notification from "./notification";
import style from "./style";
import User from "./user";

@define("m-sign-in")
@paint(component, style)
class Auth extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.submit("#signin", prevent, detail)
  async signIn(data) {
    const auth = await User.signInWithPassword(data);
    auth.match({
      Success: () => Navigate.goToDashboard(),
      Failure: () => Notification.signInFail(),
    });
    return this;
  }

  @on.click("#signinwithgoogle", stop)
  signInWithGoogle() {
    User.signInWithOAuth();
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
