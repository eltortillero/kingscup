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
    <View style={inheritStyles}>
      {
        selectedCardsHistory.length > 0 ?
          <ScrollView horizontal={true}>
            {
              selectedCardsHistory.map(({ color, number }, key) => {
                return (
                  <View style={[styles.card, styles.cardShadow]} key={key}>
                    <Card color={color} number={number} blacked={false} />
                  </View>
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
  card: {
    width: 140,
    height: 200,
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: '#fefefe',
    marginHorizontal: 5,
    borderBottomStartRadius: 7,
    borderTopRightRadius: 7,
    borderTopLeftRadius: 5,
    borderBottomEndRadius: 5,
  },
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
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
