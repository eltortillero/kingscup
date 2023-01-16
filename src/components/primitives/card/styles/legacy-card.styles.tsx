import {StyleSheet} from "react-native";
import {BASE_PALETTE} from "../../../../palette/base_palette";

/**
 * @deprecated
 * @description original styles required for having pictures on the given cards
 */
export const legacyCardStyles = StyleSheet.create({
    column: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 10,
        borderWidth: 1
    },
    alignItemLeft: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    alignItemRight: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
    },
    cardLabel: {
        fontSize: 30,
        textAlign: "center",
        fontWeight: "900",
    },
    redCard: {
        color: BASE_PALETTE.primary,
    },
    blackCard: {
        color: BASE_PALETTE.base_offset,
    },
    marginBottomCard: {
        marginBottom: 10,
    },
    imgStyles: {
        width: 40,
        height: 40,
    },
    card: {
        width: 140,
        backgroundColor: '#fefefe',
        marginHorizontal: 5,
        borderBottomStartRadius: 7,
        borderTopRightRadius: 7,
        borderTopLeftRadius: 5,
        borderBottomEndRadius: 5,
    },
    cardShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
});