import {Image, StyleSheet, View} from "react-native";
import React from "react";

type ColorImgProps<T> = {
    styles?: T;
};

export const ColorImgVariants = {
    HeartImg: <T extends object, >({styles}: ColorImgProps<T>) => {
        return (
            <View>
                <Image
                    style={styles || ImgDefaultStyles.imgStyles}
                    source={require('./images/heart.png')}
                />
            </View>
        );
    },
    CloverImg: <T extends object, >({styles}: ColorImgProps<T>) => {
        return (
            <View>
                <Image

                    style={styles || ImgDefaultStyles.imgStyles}
                    source={require('./images/clover.png')}
                />
            </View>
        );
    },
    SpadesImg: <T extends object, >({styles}: ColorImgProps<T>) => {
        return (
            <View>
                <Image
                    style={styles || ImgDefaultStyles.imgStyles}
                    source={require('./images/spades.png')}
                />
            </View>
        );
    },
    DiamondImg: <T extends object, >({styles}: ColorImgProps<T>) => {
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

const ImgDefaultStyles = StyleSheet.create({
    imgStyles: {
        width: 100,
        height: 100,
    }
});