import client from "./client";

function createProgress(data) {
  return client.from("progress").insert([data]).select().single();
}

export default createProgress;
