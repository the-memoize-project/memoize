import { params } from "standard/router";
import Interval from "./interval";
import Type from "./type";
import Validity from "./validity";

const Card = {
  async create(data, userId) {
    const { createCard, createProgress } = await import("artifact/supabase");
    const { data: card } = await createCard({
      ...data,
      deck: params.deck,
      user_id: userId,
    });
    const { data: _progress } = await createProgress({
      card: card.id,
      interval: Interval.oneMinute,
      type: Type.LEARN,
      user_id: userId,
      validity: Validity.now,
    });
    return Card;
  },
};

export default Card;
