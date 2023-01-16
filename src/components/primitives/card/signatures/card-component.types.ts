import {Colors} from "../../../../types/types/card-color.type";
import {FullCardFigures} from "../../../../types/types/card-range.type";

export type CardProps = {
    number: FullCardFigures;
    screenWidth: number;
    zIndex: number;
    color: Colors;
};
