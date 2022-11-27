import React, { FC } from "react";
import { View, Text } from "react-native";
import { ICard } from "../../mocks/stacks/stacks.mock";
import { Card } from "../card/card.component";

type CurrentCardProps = {
    card: ICard | null;
}
export const CurrentCard: FC<CurrentCardProps> = ({ card }) => {
    if (!!card) {
        return <Card number={card.number} color={card.color} blacked />
    }
    return (
        <View>
            <Text>
                Inicia el juego
            </Text>
        </View>
    );
}