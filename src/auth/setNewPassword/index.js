import renderer from "standard/renderer";
import router from "standard/router";

router("/auth/set-new-password", function forgotPassword() {
  import("./auth");
  renderer("<m-set-new-password></m-set-new-password>");
});
