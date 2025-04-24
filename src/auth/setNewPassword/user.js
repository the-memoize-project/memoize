import Option from "standard/option";

const User = {
  async isItAuthenticated() {
    const { getSession } = await import("artifact/supabase");
    const { data: session, error } = await getSession();
    const { user } = session ?? {};
    return user ? Option.Authenticated(user) : Option.Expired(error);
  },

  async updateUser(data) {
    const { updateUserMetaData } = await import("artifact/supabase");
    const { data: user, error } = await updateUserMetaData(data);
    return user ? Option.Ok(user) : Option.Err(error);
  },
};

export default User;
