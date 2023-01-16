import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { CustomButton } from './src/components/primitives/button/custom-button';
import { CardPicker } from './src/components/card-picker/card-picker.component';
import { RulesModal } from './src/components/modal/modal.component';
import { useDeck } from './src/hooks/use-deck/use-deck';
import { useModal } from './src/hooks/use-modal/use-modal'
import { BASE_PALETTE } from './src/palette/base_palette';

export default function App() {
  const {
    cardHistoryList,
    pickCardFromDeck,
    resetGame,
    currentCard,
  } = useDeck();
  const {
    visibility,
    toggleVisibility
  } = useModal();
  return (
    <SafeAreaView style={styles.safeViewContainer}>
      <RulesModal visibleState={visibility} toggleModal={toggleVisibility} />
      <CardPicker pickRandomCardFn={pickCardFromDeck} resetGameFn={resetGame} />
      <CustomButton onPress={toggleVisibility} label="Mira las reglas" />
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
    backgroundColor: BASE_PALETTE.positive,
  },
  cardsWrapper: {
    backgroundColor: BASE_PALETTE.base,
    marginBottom: 15,
    width: "100%",
    flex: 1,
  },
});
