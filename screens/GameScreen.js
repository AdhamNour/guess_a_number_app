import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";

const generateRandomBetween = (min, max) => {
  min = Math.ceil(min);
  max = Math.ceil(max);
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  return randomNumber;
};

const GameScreen = (props) => {
  const [ComputerGuess, setComputerGuess] = useState(
    generateRandomBetween(1, 100)
  );
  return (
    <View style={styles.screen}>
      <Text>Oponnent Guess</Text>
      <NumberContainer targetNumber={ComputerGuess} />
      <Card style={styles.buttonContainer}>
        <Button title="LOWER" onPress={() => {}} />
        <Button title="HIGHER" onPress={() => {}} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});

export default GameScreen;
