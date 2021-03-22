import React from 'react';

import { View,Text,StyleSheet } from 'react-native';
import Colors from '../constants/colors';

const NumberContainer = (props) => {
    return ( 
        <View style={styles.targetNumberContainer} >
            <Text style={styles.targetNumber} >{props.targetNumber}</Text>
        </View>
     );
}

const styles = StyleSheet.create({
    targetNumber: {
        fontSize:57.5,
        color: Colors.primaryColor
    },
    targetNumberContainer: {
        alignItems: 'center',
        padding:10,
        margin:10,
        borderWidth:2,
        borderColor:Colors.primaryColor,
        borderRadius:15
    }
})

export default NumberContainer;