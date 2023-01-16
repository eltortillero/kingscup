import {COLORLESS_CARD_STACK} from "../deck-providers/public-providers.api";
import {Colors} from "../types/public-types.api";
import {createCardFullCard} from "./create-card";

export const createColorStacks = (color: Colors) => COLORLESS_CARD_STACK.map(number => createCardFullCard(color, number));
