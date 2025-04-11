import renderer from "standard/renderer";
import router from "standard/router";

router("/auth/email-verification", function emailVerification() {
  import("./auth");
  renderer("<m-email-verification></m-email-verification>");
});
