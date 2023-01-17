import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, StyleSheet, View, Dimensions, Text} from 'react-native';
import {BASE_PALETTE} from './src/palette/base_palette';
import {Card, CustomButton} from "./src/components/primitives/public-primitives.api";
import {useDeck, useModal} from "./src/hooks/public-hooks.api";
import {RulesModal} from "./src/components/modal/modal.component";

const {width: windowWidth, height: _windowHeight} = Dimensions.get("window");
const [CARD_HEIGHT, CARD_CONTAINER_HEIGHT] = [250, 1.5, windowWidth];

export default function App() {
    const {shuffledDeck, resetGame} = useDeck();
    const {visibility, toggleVisibility} = useModal();
    return (
        <SafeAreaView style={animatedRoot.safeViewContainer}>
            <StatusBar style='light'/>
            <RulesModal visibleState={visibility} toggleModal={toggleVisibility}/>
            <View style={animatedRoot.gameNameContainer}>
                <Text style={animatedRoot.gameNameText}>
                    KINGS CUP
                </Text>
            </View>
            <View style={animatedRoot.mainCardContainer} pointerEvents="box-none">
                {
                    shuffledDeck.map(({number, color}, k) => {
                        return (
                            <Card number={number} color={color} key={k} zIndex={k + 2}
                                  screenWidth={windowWidth}/>
                        );
                    })
                }
            </View>
            <View style={animatedRoot.buttonsContainer}>
                <CustomButton onPress={resetGame} label={"Reset game"}/>
                <CustomButton onPress={toggleVisibility} label={"See rules"}/>
            </View>
        </SafeAreaView>
    );
}

const animatedRoot = StyleSheet.create({
    safeViewContainer: {
        display: "flex",
        height: "100%",
        alignItems: 'center',
        justifyContent: "space-evenly",
        flexDirection: 'column',
        backgroundColor: BASE_PALETTE.background,
    },
    gameNameContainer: {
        zIndex: 1
    },
    gameNameText: {
        color: BASE_PALETTE.positive,
        fontSize: 25,
        fontWeight: "bold"
    },
    mainCardContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        height: CARD_HEIGHT * CARD_CONTAINER_HEIGHT,
        zIndex: 2,
    },
    buttonsContainer: {
        alignSelf: "center",
        zIndex: 1
    }
});
