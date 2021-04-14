import React from 'react';
import { Text,StyleSheet } from 'react-native';

const BodyText = (props) => {
    return ( 
        <Text style={styles.BodyText}>{props.children}</Text>
     );
}

const styles = StyleSheet.create({
    BodyText:{
        fontFamily:"open-sans",
        color:"blue",
    }
})

export default BodyText;