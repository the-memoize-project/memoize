import client from "./client";

function playDeckOfId(deckId) {
  return client
    .from("deck")
    .update({ paused: false })
    .eq("id", deckId)
    .select()
    .single();
}

export default playDeckOfId;
