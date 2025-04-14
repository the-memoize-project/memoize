import Progress from "./progress";

class Deck {
  #data;
  #progress;

  get cover() {
    return this.#data.cover;
  }

  get description() {
    return this.#data.description;
  }

  get id() {
    return this.#data.id;
  }

  get name() {
    return this.#data.name;
  }

  get progress() {
    return (this.#progress ??= Progress.from(this.#data.cards));
  }

  constructor(data) {
    this.#data = data;
  }

  static async current() {
    const { client } = await import("artifact/supabase");
    const { data: deck } = await client
      .from("collab")
      .select("*, deck(*, card(*))")
      .eq()
      .single();
    return new Deck(deck);
  }
}

export default Deck;
