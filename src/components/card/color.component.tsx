import React, { FC } from "react";
import { View, Image, StyleSheet } from "react-native";
import { Colors } from "../../mocks/mocks.index";

interface ColorImgProps<T> {
    styles?: T;
};

export const ColorImg = {
    HeartImg: <T extends object,>({ styles }: ColorImgProps<T>) => {
        return (
            <View>
                <Image
                    style={styles || ImgDefaultStyles.imgStyles}
                    source={require('./images/heart.png')}
                />
            </View>
        );
    },
    CloverImg: <T extends object,>({ styles }: ColorImgProps<T>) => {
        return (
            <View>
                <Image
                    style={styles || ImgDefaultStyles.imgStyles}
                    source={require('./images/clover.png')}
                />
            </View>
        );
    },
    SpadesImg: <T extends object,>({ styles }: ColorImgProps<T>) => {
        return (
            <View>
                <Image
                    style={styles || ImgDefaultStyles.imgStyles}
                    source={require('./images/spades.png')}
                />
            </View>
        );
    },
    DiamondImg: <T extends object,>({ styles }: ColorImgProps<T>) => {
        return (
            <View>
                <Image
                    style={styles || ImgDefaultStyles.imgStyles}
                    source={require('./images/diamond.png')}
                />
            </View>
        );
    }
} as const;

type CardColorImgProps<T extends object> = {
    colorName: Colors;
    styles?: T;
};

export const CardColorImg: FC<CardColorImgProps<any>> = ({ colorName, styles }) => {
    switch (colorName) {
        case "CLOVERS":
            return <ColorImg.CloverImg styles={styles} />;
        case "DIAMONDS":
            return <ColorImg.DiamondImg styles={styles} />;
        case "HEARTS":
            return <ColorImg.HeartImg styles={styles} />
        case "SPADES":
            return <ColorImg.SpadesImg styles={styles} />
        default:
            return <ColorImg.SpadesImg styles={styles} />
    } 
}


const ImgDefaultStyles = StyleSheet.create({
    imgStyles: {
        width: 100,
        height: 100,
    }
});