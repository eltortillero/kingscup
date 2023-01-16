import React, { FC } from "react";
import { ScrollView, View, Text, StyleProp, ViewStyle } from "react-native";
import { StyleSheet } from "react-native";
import { ICard } from "../../mocks/mocks.index";
import { BASE_PALETTE } from "../../palette/base_palette";
import { Card } from "../card/card.component";

export type StyledProps = {
  styles?: StyleProp<ViewStyle>;
  selectedCardsHistory: Array<ICard>;
};

export const CardStack: FC<StyledProps> = ({ styles: inheritStyles, selectedCardsHistory }) => {
  return (
    <View style={inheritStyles} pointerEvents="none">
      {
        selectedCardsHistory.length > 0 ?
          <ScrollView pointerEvents="none" horizontal={true} style={styles.scrollView}>
            {
              selectedCardsHistory.map(({ color, number }, key) => {
                return (
                    <Card color={color} number={number} blacked={false} key={key} />
                );
              })
            }
          </ScrollView> :
          <View style={styles.emptyHistoryContainer}>
            <Text style={styles.emptyHistoryText}>
              Start the game by clicking
              the button below
            </Text>
          </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    height: 350,
    borderWidth:1,
    paddingVertical: 10,
  },

  emptyHistoryContainer: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyHistoryText: {
    paddingHorizontal: 10,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: BASE_PALETTE.base_offset,
  }
});
