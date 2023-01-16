import {cardStyles} from './styles/card-component.styles';
import {CardProps} from './signatures/card-component.types';
import React, {FC} from "react";
import {useCardAnimations} from "../../../hooks/public-hooks.api";
import {PanGestureHandler} from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import {Text, View} from "react-native";
import {CardColorImg} from "../../card/color.component";

/**
 * @description base component for cards that supports animation out of the box
 * @param number number
 * @param screenWidth number
 * @param zIndex number
 * @constructor
 */
export const Card: FC<CardProps> = ({number, screenWidth, zIndex, color}) => {
    const {
        onGestureEvent,
        animatedStyle,
        CARD_WIDTH: width,
        CARD_HEIGHT: height
    } = useCardAnimations(screenWidth);
    const fontColor = () => color === "DIAMONDS" || color === "HEARTS" ? cardStyles.redCard : cardStyles.whiteCard;
    return <PanGestureHandler key={number} onGestureEvent={onGestureEvent}>
        <Animated.View style={[
            cardStyles.cardItem,
            animatedStyle,
            {width, height, zIndex},
        ]}>
            <View>
                <CardColorImg styles={cardStyles.cardImgTop} colorName={color}/>
            </View>
            <View>
                <Text style={cardStyles.cardMainFont}>
                    {number}
                </Text>
            </View>
            <View>
                <CardColorImg styles={cardStyles.cardImgBottom} colorName={color}/>
            </View>
        </Animated.View>
    </PanGestureHandler>
};