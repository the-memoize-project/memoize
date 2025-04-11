import renderer from "standard/renderer";
import router from "standard/router";

router("/auth/password-reseted", function passwordReseted() {
  import("./auth");
  renderer("<m-password-reseted></m--password-reseted>");
});
