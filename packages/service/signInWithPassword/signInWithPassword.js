import client from "artifact/supabase";

function signInWithPassword(data) {
  return client.auth.signInWithPassword(data);
}

export default signInWithPassword;
