import Option from "standard/option";

const User = {
  async isItAuthenticated() {
    const { getSession } = await import("artifact/supabase");
    const { data: session, error } = await getSession();
    const { user } = session ?? {};
    return user ? Option.Authenticated(user) : Option.Expired(error);
  },

  async resetPasswordForEmail(email) {
    const { resetPasswordForEmail } = await import("artifact/supabase");
    const { data: user } = await resetPasswordForEmail(email);
    return user ? Option.Ok() : Option.Err();
  },
};

export default User;
