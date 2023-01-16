import React, {FC} from "react";
import {ColorImgVariants} from './variants/image-base-variants.component';
import {CardColorImgProps} from "./signatures/card-color-image.type";

export const CardColorImg: FC<CardColorImgProps<any>> = ({colorName, styles}) => {
    switch (colorName) {
        case "CLOVERS":
            return <ColorImgVariants.CloverImg styles={styles}/>;
        case "DIAMONDS":
            return <ColorImgVariants.DiamondImg styles={styles}/>;
        case "HEARTS":
            return <ColorImgVariants.HeartImg styles={styles}/>
        case "SPADES":
            return <ColorImgVariants.SpadesImg styles={styles}/>
        default:
            return <ColorImgVariants.SpadesImg styles={styles}/>
    }
}