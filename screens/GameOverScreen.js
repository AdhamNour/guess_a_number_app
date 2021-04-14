import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import BodyText from "../components/BodyText"
import TitleText from "../components/TitleText"

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>Game is Over</TitleText>
      <Image source={require('../assets/images/success.png')} />
      <Text>this is game over screen Guessed in</Text>
      <Text> Guessed in {props.roundCount} rounds</Text>
      <Button title="Reset" onPress={props.reset} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
