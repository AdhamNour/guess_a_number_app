import React from 'react';
import { View,Text,StyleSheet,Button } from 'react-native'

const GameOverScreen = (props) => {
    return ( 
        <View>
            <Text>this is game over screen, Guessed in {props.roundCount} rounds</Text> 
            <Button title="Reset" onPress={props.reset}  />
        </View>
     );
}
 
export default GameOverScreen;