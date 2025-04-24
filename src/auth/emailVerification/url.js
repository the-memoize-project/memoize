import { args } from "standard/router";

const Url = {
  get provider() {
    return args.email.split("@")?.[1] ?? "";
  },
};

export default Url;
