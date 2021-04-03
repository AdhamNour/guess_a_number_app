import { StatusBar } from "expo-status-bar";
import React,{useState} from "react";
import { StyleSheet, Text, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

import Header from "./components/Header";

export default function App() {
  const [selectedNumber, setselectedNumber] = useState();
  const [roundCount,setRoundCount] = useState(0);
  const reset = () => {
    setselectedNumber(null);
    setRoundCount(0)
  }

  let content = <StartGameScreen onStartGame={setselectedNumber} />;
  if (selectedNumber) {
    content = <GameScreen selectedNumber={selectedNumber} gameOverHandler={setRoundCount} />;
  }
  if(roundCount > 0) {
    content = <GameOverScreen roundCount={roundCount} reset={reset} />
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
