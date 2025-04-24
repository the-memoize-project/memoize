import Option from "standard/option";

const User = {
  async isItAuthenticated() {
    const { getSession } = await import("artifact/supabase");
    const { data: session, error } = await getSession();
    const { user } = session ?? {};
    return user ? Option.Authenticated(user) : Option.Expired(error);
  },

  async signInWithOAuth() {
    const { signInWithOAuth } = await import("artifact/supabase");
    signInWithOAuth();
    return User;
  },

  async signInWithPassword(data) {
    const { signInWithPassword } = await import("artifact/supabase");
    const {
      data: { user } = {},
      error,
    } = await signInWithPassword(data);
    return user ? Option.Success(user) : Option.Failure(error);
  },
};

export default User;
