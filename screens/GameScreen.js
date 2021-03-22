import React,{useState} from 'react';
import { View,Text,StyleSheet } from 'react-native';

const generateRandomBetween = (min,max) => {
    min = Math.ceil(min);
    max = Math.ceil(max);
    const randomNumber= Math.floor(Math.random()*(max-min))+min;
    return randomNumber;
}

const GameScreen = (props) => {
    const [ComputerGuess, setComputerGuess] = useState(generateRandomBetween(1,100));
    return ;
}

const styles = StyleSheet.create({

})

export default GameScreen;