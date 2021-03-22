import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import Card from "../components/Card";
import Input from "../components/Input";
import Colors from "../constants/colors"

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>The Game Screen</Text>
      <Card style={styles.inputContainer}>
        <Text>Select A number</Text>
        <Input style={styles.input} blurOnSubmit autoCapitalize='none' keyboardType='number-pad' maxLength={2}  />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Reset" onPress={() => {}} color= {Colors.accentColor}/>
          </View>
          <View style={styles.button}>
            <Button title="Confirm" onPress={() => {}} color={Colors.primaryColor} />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  button: {
      width:100
  },
  input:{
      width:100,
      textAlign: "center",
  }
});

export default StartGameScreen;
