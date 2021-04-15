import React from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../constants/colors";

const MainButton = (props) => {
  return (
    <TouchableOpacity actionOpacity={0.6}  onPress={props.onPress}>
      <View style={styles.button} >
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor:Colors.primaryColor,
        paddingVertical:12,
        paddingHorizontal:20,
        borderRadius:26
    },
    buttonText: {
        color:'white',
        fontSize:11,
        fontFamily:"open-sans"
    }
});

export default MainButton;
