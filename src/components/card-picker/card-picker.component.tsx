import React, { FC } from "react"
import { View, StyleSheet } from "react-native"
import { CustomButton } from "../primitives/button/custom-button";

type CardPickerProps = {
    pickRandomCardFn: () => void;
    resetGameFn: () => void;
}

export const CardPicker: FC<CardPickerProps> = ({
    pickRandomCardFn,
    resetGameFn,
}) => {
    return (
        <View style={CardPickerStyles.flexColumn}>

            <View style={CardPickerStyles.buttonContainerMarginButton}>
                <CustomButton label="Escoge carta" onPress={pickRandomCardFn} />
            </View>
            <View style={CardPickerStyles.buttonContainerMarginButton}>
                <CustomButton label="Reinicia juego actual" onPress={resetGameFn} />
            </View>
        </View>
    );
};

const CardPickerStyles = StyleSheet.create({
    flexColumn: {
        display: "flex",
        flex: 2.35,
        flexDirection: "column",
        marginBottom: 20,
    },
    buttonContainerMarginButton: {
        marginBottom: 5,
    },
});
