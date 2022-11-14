import { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../mocks/mocks.index";
import { CardColorImg } from "./color.component";


type TCard = {
    number: number | string;
    color: Colors;
    blacked: boolean;
};


export const Card: FC<TCard> = ({ number, color, blacked }) => {
    return (
        <View style={CardStyles.column}>
            <View style={CardStyles.alignItemLeft}>
                <CardColorImg styles={CardStyles.imgStyles} colorName={color} />
            </View>
            <View>
                <Text style={CardStyles.cardLabel}>
                { number }
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
        fontSize: 20,
        textAlign: "center"
    },
    marginBottomCard: {
        marginBottom: 10,
    },
    imgStyles: {
        width: 40,
        height: 40,
    }
})