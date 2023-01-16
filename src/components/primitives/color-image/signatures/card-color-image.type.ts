import {Colors} from "../../../../types/types/card-color.type";

export type CardColorImgProps<T extends object> = {
    colorName: Colors;
    styles?: T;
};
