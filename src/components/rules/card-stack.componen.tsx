import React, { FC } from "react";
import { ScrollView, View, Text, StyleProp, ViewStyle } from "react-native";
import { StyleSheet } from "react-native";
export type StyledProps = {
  styles?: StyleProp<ViewStyle>;
};
export const CardStack: FC<StyledProps> = ({ styles: inheritStyles }) => {
  const ref = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <ScrollView style={inheritStyles} horizontal={true}>
      {ref.map((v) => {
        return (
          <View style={[styles.card, styles.cardShadow]} key={v}>
            <Text>{v}</Text>
          </View>
        );
      })}
    </ScrollView>
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
  }
});
