import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StatusBarStyle, StyleSheet, View } from 'react-native';
import { CardPicker } from './src/components/card-picker/card-picker.component';
import { CardStack, Rules } from './src/components/components.index';
import { EFFECTS } from './src/mocks/mocks.index';
import { BASE_PALETTE } from './src/palette/base_palette';

export default function App() {
  return (
    <SafeAreaView style={styles.safeViewContainer}>
      <CardStack styles={styles.cardsWrapper} />
      <CardPicker />
      {/* <Rules cards={EFFECTS} /> */}
      {/* DUNNO */}
      <StatusBar style='dark' />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  safeViewContainer: {
    display: "flex",
    height: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: BASE_PALETTE.base,
  },
  cardsWrapper: {
    backgroundColor: BASE_PALETTE.base,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: BASE_PALETTE.primary,
    marginBottom: 15,
    flex: 1,
  },
});
