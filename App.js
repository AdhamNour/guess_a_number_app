import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen'

import Header from './components/Header'

export default function App() {
  return (
    <View style={styles.screenView} >
        <Header title="Guess a Number" />
        <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screenView:{
    flex: 1
  }
});
