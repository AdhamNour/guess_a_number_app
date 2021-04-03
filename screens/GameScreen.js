import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";

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
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const round = useRef(0);

  const nextGuess = (direction) => {
    if (
      (direction === 0 && ComputerGuess < props.selectedNumber) ||
      (direction === 1 && ComputerGuess > props.selectedNumber)
    ) {
      Alert.alert("Don't tell Lies", "You know that is wrong", [
        { text: "Oops! Sorry :'(", style: "cancel" },
      ]);
      return;
    }
    if (direction === 0) {
      currentHigh.current = ComputerGuess;
    }
    if (direction === 1) {
      currentLow.current = ComputerGuess;
    }
    round.current = round.current + 1;
    setComputerGuess(
      generateRandomBetween(currentLow.current, currentHigh.current)
    );
  };
  useEffect(() => {
    if (ComputerGuess === props.selectedNumber) {
      props.gameOverHandler(round.current);
    }
  }, [round.current]);

  return (
    <View style={styles.screen}>
      <Text>Oponnent Guess</Text>
      <NumberContainer targetNumber={ComputerGuess} />
      <Card style={styles.buttonContainer}>
        <Button title="LOWER" onPress={() => nextGuess(0)} />
        <Button title="HIGHER" onPress={() => nextGuess(1)} />
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
