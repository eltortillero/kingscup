import { StyleSheet } from "react-native";
import { BASE_PALETTE } from "../../../../palette/base_palette";

export const CustomButtonsStyles = StyleSheet.create({
    cover: {
        backgroundColor: BASE_PALETTE.primary,
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    text: {
        color: BASE_PALETTE.positive,
        fontWeight: "700",
        textTransform: "uppercase",
        fontSize: 18,
        textAlign: "center",
    }
});