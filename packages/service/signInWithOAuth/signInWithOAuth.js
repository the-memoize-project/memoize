import client from "artifact/supabase";
import { urlFor } from "standard/router";

function signInWithOAuth() {
  client.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo: urlFor("dashboard") },
  });
}

export default signInWithOAuth;
