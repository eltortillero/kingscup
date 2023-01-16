import {createColorStacks} from "../functions/public-functios.api";
import {ICard} from "../types/public-types.api";
import {COLORS} from "./public-providers.api";

export const FULL_ORDERED_DECK: Array<ICard> = COLORS.map(createColorStacks).flatMap(card => card);