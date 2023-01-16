import {StyleSheet} from "react-native";
import {BASE_PALETTE} from "../../../../palette/base_palette";

export const CustomButtonsStyles = StyleSheet.create({
    cover: {
        margin: 5,
        backgroundColor: "rgb(20,20,20)",
        borderWidth: 2,
        borderColor: BASE_PALETTE.positive,
        paddingHorizontal: 4,
        paddingVertical: 4,
        borderRadius: 4,
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    innerContainer: {
        width: '100%',
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderColor: BASE_PALETTE.positive,
        borderWidth: 1,
        borderRadius: 2,
    },
    text: {
        color: BASE_PALETTE.positive,
        fontWeight: "700",
        textTransform: "uppercase",
        fontSize: 18,
        textAlign: "center",
    }
});