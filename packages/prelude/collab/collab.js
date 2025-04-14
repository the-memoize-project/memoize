class Collab {
  #decks;

  constructor(decks) {
    this.#decks = decks;
  }

  static async ofUser(userId) {
    const { client } = await import("artifact/supabase");
    const { data: collabs } = await client
      .from("collab")
      .select("*, deck(*)")
      .eq("user_id", userId);
    console.log(collabs);
    return new Collab(collabs);
  }
}

export default Collab;
