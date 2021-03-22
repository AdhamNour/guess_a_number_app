import { StatusBar } from "expo-status-bar";
import React,{useState} from "react";
import { StyleSheet, Text, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

import Header from "./components/Header";

export default function App() {
  const [selectedNumber, setselectedNumber] = useState();
  let content = <StartGameScreen onStartGame={setselectedNumber} />;
  if (selectedNumber) {
    content = <GameScreen />;
  }
  return (
    <View style={styles.screenView}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screenView: {
    flex: 1,
  },
});
