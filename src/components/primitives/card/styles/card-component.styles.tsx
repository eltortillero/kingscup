import {StyleSheet} from "react-native";
import {BASE_PALETTE} from "../../../../palette/base_palette";

export const cardStyles = StyleSheet.create({
    cardItem: {
        position: 'absolute',
        alignSelf: 'center',
        borderRadius: 5,
        padding: 20,
        backgroundColor: "rgb(23,23,23)",
        display: "flex",
        alignContent: "center",
        justifyContent: "space-between",
    },
    cardImgTop: {
        width: 40,
        height: 40,
        alignSelf: "flex-start",
    },
    cardImgBottom: {
        width: 40,
        height: 40,
        alignSelf: "flex-end",
    },
    cardMainFont: {
        textAlign: "center",
        fontSize: 35,
        fontWeight: "bold",
    },
    cardText: {
        textAlign: "center",
        color: "white",
        fontWeight: "700",
    },
    redCard: {
        color: BASE_PALETTE.primary,
    },
    whiteCard: {
        color: BASE_PALETTE.positive,
    }
});