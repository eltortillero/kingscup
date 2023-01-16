import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, StyleSheet, View, Dimensions} from 'react-native';
import {BASE_PALETTE} from './src/palette/base_palette';
import {Card} from "./src/components/primitives/public-primitives.api";
import {useDeck} from "./src/hooks/public-hooks.api";

const {width: windowWidth, height: _windowHeight} = Dimensions.get("window");
const [CARD_HEIGHT, CARD_CONTAINER_HEIGHT] = [250, 1.5, windowWidth];

export default function App() {
    const {shuffledDeck} = useDeck();
    return (
        <SafeAreaView style={animatedRoot.safeViewContainer}>
            <StatusBar style='light'/>
            <View style={animatedRoot.mainCardContainer} pointerEvents="box-none">
                {
                    shuffledDeck.map(({number, color}, k) => {
                        return (
                            <Card number={number} color={color} key={k} zIndex={shuffledDeck.length - 1}
                                  screenWidth={windowWidth}/>
                        );
                    })
                }
            </View>
        </SafeAreaView>
    );
}

const animatedRoot = StyleSheet.create({
    safeViewContainer: {
        display: "flex",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: BASE_PALETTE.background,
    },
    mainCardContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        height: CARD_HEIGHT * CARD_CONTAINER_HEIGHT,
    }
});
