import React, { FC } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { CARD_RULES } from "../../mocks/mocks.index";
import { StyledProps } from "./card-stack.componen";
type CardRules = {
  cards: CARD_RULES;
};
export const Rules: FC<CardRules & StyledProps> = ({
  cards,
  styles: InheritStyles,
}) => {
  const isLastChildStyles = (index: number, arr: CARD_RULES) => {
    const isLastChild = index === arr.length - 1;
    return isLastChild ? [styles.flex_column, styles.lastChildMarginBottom] : [styles.flex_column];
  }
  return (
    <ScrollView scrollEnabled={true} style={[styles.spaces, styles.rulesViewWrapper, InheritStyles]}>
      <View>
        <Text style={styles.rule_title}>Reglas</Text>
      </View>
      {cards.map(([TITLE, RULE], key) => {
        return (
          <View style={isLastChildStyles(key, cards)} key={key}>
            <Text style={styles.title}>{key + 1}. {TITLE}</Text>
            <View style={styles.cardSubtitle}>
              <Text style={styles.blackColor}>{RULE}</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rulesViewWrapper: {
    backgroundColor: '#fefefe',
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  spaces: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  flex_column: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    marginBottom: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 10,
    color: 'black'
  },
  rule_title: {
    fontSize: 26,
    fontWeight: "bold",
    color: 'black',
  },
  blackColor: {
    color: 'black',
  },
  cardSubtitle: {
    paddingHorizontal: 2,
  },
  lastChildMarginBottom: {
    marginBottom: 40,
  }
});
