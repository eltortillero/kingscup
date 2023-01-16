import { Colors } from "./card-color.type";
import { FullCardFigures } from "./card-range.type";

export type ICard = {
    number: FullCardFigures;
    color: Colors;
}