import {PanGestureHandlerGestureEvent} from "react-native-gesture-handler";
import {useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring} from "react-native-reanimated";
import {snapPoint} from "react-native-redash";

type animationContext = {
    y: number;
    x: number;
}
export const useCardAnimations = (width: number) => {
    const [CARD_WIDTH, CARD_HEIGHT, CARD_CONTAINER_WIDTH] = [180, 250, width];
    const side = (CARD_CONTAINER_WIDTH + CARD_WIDTH + 50) / 2;
    const negativeRotate: number = Math.floor(Math.random()) >= 1 ? -1 : 1;
    const initialZ = Math.floor(Math.random() * 12) * negativeRotate;
    const SNAP_POINTS = [-side, 0, side];
    const x = useSharedValue<number>(0);
    const y = useSharedValue<number>(0);
    const z = useSharedValue<number>(initialZ);
    const onGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, animationContext>({
        onStart: (_, ctx) => {
            ctx.y = y.value;
            ctx.x = x.value;
        },
        onActive: ({translationX, translationY}, {x: xCtx, y: yCtx}) => {
            x.value = xCtx + translationX;
            y.value = yCtx + translationY;
            z.value = (xCtx + translationX) * 0.1;
        },
        onEnd: ({velocityX, velocityY}) => {
            const xTranslation = snapPoint(x.value, velocityX, SNAP_POINTS);
            const zTranslation = snapPoint(z.value, velocityX, SNAP_POINTS);
            x.value = withSpring(xTranslation, {velocity: velocityX});
            y.value = withSpring(0, {velocity: velocityY});
            z.value = withSpring(initialZ, {velocity: velocityX})
        }
    });
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [
            {perspective: 1500},
            {rotateZ: `${z.value}deg`},
            {translateX: x.value},
            {translateY: y.value},
        ],
    }));
    return {
        onGestureEvent,
        animatedStyle,
        CARD_WIDTH,
        CARD_HEIGHT
    }
}