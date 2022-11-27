import { FC, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../mocks/mocks.index";
import { BASE_PALETTE } from "../../palette/base_palette";
import { CardColorImg } from "./color.component";


type TCard = {
    number: number | string;
    color: Colors;
    blacked: boolean;
};


export const Card: FC<TCard> = ({ number, color, blacked }) => {


    const textColor = () => {
        const isRed = color === 'DIAMONDS' || color === 'HEARTS';
        return isRed ? CardStyles.cardRed : CardStyles.cardBlack;
    }

    return (
        <View style={[CardStyles.column, CardStyles.card, CardStyles.cardShadow]}>
            <View style={CardStyles.alignItemLeft}>
                <CardColorImg styles={CardStyles.imgStyles} colorName={color} />
            </View>
            <View>
                <Text style={[CardStyles.cardLabel, textColor()]}>
                    {number}
                </Text>
            </View>
            <View style={CardStyles.alignItemRight}>
                <CardColorImg styles={CardStyles.imgStyles} colorName={color} />
            </View>
        </View>
    )
};


const CardStyles = StyleSheet.create({
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
    cardRed: {
        color: BASE_PALETTE.primary,
    },
    cardBlack: {
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
})