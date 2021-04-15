import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>Game is Over</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={{uri:'https://tgr.scdn2.secure.raxcdn.com/images/wysiwyg/_article/istockphoto-485966046-612x612.jpg'}}
          style={styles.image}
          resizeMode="cover"
          fadeDuration={500}
        />
      </View>
      <Text>this is game over screen Guessed in</Text>
      <Text> Guessed in {props.roundCount} rounds</Text>
      <MainButton onPress={props.reset} > Reset </MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
});

export default GameOverScreen;
