import React, {FC} from "react";
import {Text, View} from "react-native";
import Animated from "react-native-reanimated";
import {PanGestureHandler} from "react-native-gesture-handler";
import {cardStyles} from './styles/card-component.styles';
import {CardProps} from './signatures/card-component.types';
import {useCardAnimations} from "../../../hooks/public-hooks.api";
import {CardColorImg} from "../color-image/color-image.component";

/**
 * @description primitive card with number and form may change the picture but for now it stays this way
 * @param {@link TCardNumber}
 * @param screenWidth number
 * @param zIndex number
 * @param color {@link Colors}
 * @returns a {@link FC} of type {@link CardProps}
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
                <Text style={[cardStyles.cardMainFont, fontColor()]}>
                    {number}
                </Text>
            </View>
            <View>
                <CardColorImg styles={cardStyles.cardImgBottom} colorName={color}/>
            </View>
        </Animated.View>
    </PanGestureHandler>
};