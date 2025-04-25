import Option from "standard/option";

const User = {
  async isItAuthenticated() {
    const { getSession } = await import("artifact/supabase");
    const { data: session, error } = await getSession();
    const { user } = session ?? {};
    return user ? Option.Authenticated(user) : Option.Expired(error);
  },

  async signUp(data) {
    const { signUp } = await import("artifact/supabase");
    const { data: user, error } = await signUp(data);
    return user ? Option.Created(user) : Option.Error(error);
  },
};

export default User;
