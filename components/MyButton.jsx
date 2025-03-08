import { View, Text, Pressable, StyleSheet, Touchable } from 'react-native'
import React from 'react'
import { useFonts } from "expo-font";
const MyButton = ({ title ,onPress}) => {
      const [fontsLoaded] = useFonts({
        Roboto: require("../assets/fonts/Roboto_Condensed-Regular.ttf"),
        OpenSansRegular : require("../assets/fonts/OpenSans-Regular.ttf"),
        OpenSansMedium : require("../assets/fonts/OpenSans-Medium.ttf")
      });
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  )
}

export default MyButton

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#f2f2f2",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: 600,
    fontFamily: "OpenSansMedium"
  },
})