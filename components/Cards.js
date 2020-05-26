import React from "react";

import { DeckSwiper, Block, withGalio, Icon } from "galio-framework";

import { StyleSheet, Text, Alert, View } from "react-native";

const customTheme = {
  SIZES: { BASE: 18 },
  // this will overwrite the Galio SIZES BASE value 16
  COLORS: { PRIMARY: "red" },
  // this will overwrite the Galio COLORS PRIMARY color #B23AFC
};

const elements = [
  <View style={{ backgroundColor: "#B23AFC", height: 250, width: 250 }}>
    <Text>You wanna see a cool component?</Text>
    <Text>Galio has this cool Deck Swiper</Text>
  </View>,
  <View style={{ backgroundColor: "#FE2472", height: 250, width: 250 }}>
    <Text>What did you expect?</Text>
    <Text>This React Native component works perfectly</Text>
  </View>,
  <View style={{ backgroundColor: "#FF9C09", height: 250, width: 250 }}>
    <Text>Maybe you want to build the next Tinder</Text>
  </View>,
  <View style={{ backgroundColor: "#45DF31", height: 250, width: 250 }}>
    <Text>or maybe you just want a nice deck swiper component</Text>
    <Text>Galio has everything sorted out for you</Text>
  </View>,
];
const Cards = () => {
  return (
    <Block>
      <DeckSwiper components={elements} />
      <Icon name="pin-3" family="Galio" color="rgb(100, 120, 40)" size={10} />
    </Block>
  );
};

const styles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.COLORS.FACEBOOK,
    },
  });
export default withGalio(Cards, styles);
