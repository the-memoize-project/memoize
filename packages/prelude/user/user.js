import formatStudyTime from "./formatStudyTime";
import storage from "./storage";

class User {
  #data = {};

  get avatar() {
    return this.#data.user_metadata?.avatar_url;
  }

  get id() {
    return this.#data.id;
  }

  get name() {
    return (
      this.#data.user_metadata?.full_name ?? this.#data.user_metadata?.name
    );
  }

  get reviewTime() {
    return formatStudyTime(this.#data.user_metadata?.reviewTime ?? 0);
  }

  constructor(data) {
    this.#data = data;
  }

  static async logged() {
    if (storage.has("logged")) {
      return new User(storage.get("logged"));
    }

    const { getUserLogged } = await import("artifact/supabase");
    const { data: user } = await getUserLogged();
    storage.set("legged", user);
    return new User(user);
  }
}

export default User;
