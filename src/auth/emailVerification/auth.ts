import User from "auth/forgotPassword/user";
import style from "auth/signIn/style";
import { define } from "directive";
import { paint, willPaint } from "standard/dom";
import on, { stop } from "standard/event";
import { handle } from "standard/interface";
import * as Navigate from "standard/navigate";
import component from "./component";
import Url from "./url";

@define("m-email-verification")
@paint(component, style)
class Auth extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  @on.click("#openEmailApp", stop)
  openEmailApp() {
    Navigate.goToEmailProvider(Url.provider);
    return this;
  }

  @on.click("#resend", stop)
  resend() {
    User.resetPasswordForEmail(args.email);
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
