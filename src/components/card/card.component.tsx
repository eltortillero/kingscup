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
        <View style={CardStyles.column}>
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
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 10,
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
    }
})