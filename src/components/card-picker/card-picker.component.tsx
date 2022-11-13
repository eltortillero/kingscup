import React from "react"
import { View, Text, StyleSheet } from "react-native"

export const CardPicker = () => {
    return (
        <View style={CardPickerStyles.flexColumn}>
            <Text>
                Hi there
            </Text>
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
});
