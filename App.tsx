import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {SafeAreaView, StyleSheet, View, Dimensions} from 'react-native';
import { BASE_PALETTE } from './src/palette/base_palette';
import {Card} from "./src/components/primitives/public-primitives.api";
const { width: windowWidth, height: _windowHeight } = Dimensions.get("window");
const [CARD_HEIGHT, CARD_CONTAINER_HEIGHT] = [250, 1.5, windowWidth];

export default function App() {
  const cardStack = [1,2,3,4,5,6];
  return (
    <SafeAreaView style={styles.safeViewContainer}>
      <StatusBar style='light' />
      <View style={animatedRoot.mainCardContainer} pointerEvents="box-none">
          {
              cardStack.map((number, k) => {
                  return (
                      <Card number={number} key={k} zIndex={cardStack.length - 1} screenWidth={windowWidth} />
                  );
              })
          }
      </View>
    </SafeAreaView>
  );
}

const animatedRoot = StyleSheet.create({
    mainCardContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        height: CARD_HEIGHT * CARD_CONTAINER_HEIGHT,
    }
});

/**
 * @deprecated
 */
const styles = StyleSheet.create({
  safeViewContainer: {
    display: "flex",
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: BASE_PALETTE.background,
  },
});
