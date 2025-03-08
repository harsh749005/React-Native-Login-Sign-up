import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
import MyButton from "@/components/MyButton";
import { useFonts } from "expo-font";
import AsyncStorage from '@react-native-async-storage/async-storage';
const signup = () => {

    // Load the custom font
    const [fontsLoaded] = useFonts({
      Roboto: require("../assets/fonts/Roboto_Condensed-Regular.ttf"),
      OpenSansRegular : require("../assets/fonts/OpenSans-Regular.ttf"),
      OpenSansMedium : require("../assets/fonts/OpenSans-Medium.ttf")
    });
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const handleSignIn = async () =>{
      if (email && password) {
        // validate email
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!pattern.test(email)) {
          alert("Invalid email");
        }
        if (password.length < 8) {
          alert("Password should be at least 8 characters long");
          return;
        } 
        else{
          // Save email and password to AsyncStorage
          await AsyncStorage.setItem('email', email);
          await AsyncStorage.setItem('password', password);
          // Navigate to login page with email and password
          router.navigate("/login");
          alert("done")
        }
        
      }
      else{
        alert('Please enter email and password')
      }

    }
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Get your free Account</Text>
      <View style={styles.mainInputHolder}>
        <View style={styles.mainOtherOptionsHandler}>
          <View style={styles.otherOptionsHandler}>
            <Image
              style={styles.imageHandler}
              source={require("@/assets/images/google.png")}
            ></Image>
            <Text style={styles.otherOptionsText}>Continue with Google</Text>
          </View>
          <View style={styles.otherOptionsHandler}>
            <Image
              style={styles.imageHandler}
              source={require("@/assets/images/apple.png")}
            ></Image>
            <Text style={styles.otherOptionsText}>Continue with Apple</Text>
          </View>
        </View>

        {/* <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable> */}
        <Text style={styles.otherOptionsSeperater}>or</Text>
        <View style={styles.subInputHolder}>
          <Text style={styles.inputLabel}>Work email</Text>
          <TextInput
            placeholder="enter your email"
            placeholderTextColor="#8a8a8a"
            style={styles.input}
            onChangeText={setEmail}
            keyboardType="email-address"
                      />
                                <TextInput
            placeholder="enter your password"
            placeholderTextColor="#8a8a8a"
            style={styles.input}
            onChangeText={setPassword}
            keyboardType="password"
                      />
        </View>

        <MyButton title={"Continue with Email"} onPress={handleSignIn} />
        <View style={styles.textHolder}>
          <Text style={styles.text}>Already have an account ? </Text>
          <Link style={styles.textLogin} href='/login' >Login</Link>
        </View>
      </View>
    </View>
  );
};

export default signup;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: 10,
    backgroundColor: "black",
  },
  heading: {
    fontSize: 35,
    color: "white",
    fontFamily: "Roboto",
    marginTop: 20,
  },
  mainInputHolder: {
    justifyContent: "flex-start",
    flexDirection: "column",
    padding: 10,
    marginTop: 10,
    gap: 20,
  },
  subInputHolder: {
    gap: 10,
  },
  inputLabel: {
    color: "#e3e3e3",
    fontSize: 18,
    fontFamily: "OpenSansRegular"
  },
  input: {
    backgroundColor: "black",
    color: "white",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    width: 320, // Specify a width for the input if needed
    borderRadius: 5,
    borderColor: "#262626",
    borderWidth: 2,
    fontSize: 18,
    fontFamily: "OpenSansRegular"
  },
  textHolder:{
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign:"center",
  },
  text: {
    color: "#787878",
    fontSize: 15,
    fontFamily: "OpenSansRegular"
  },
  textLogin:{
    color: "#4bbd53",
    fontSize: 15,
    fontWeight: 600,
    fontFamily: "OpenSansRegular"
  
    // textDecorationLine: "underline",
  },
  mainOtherOptionsHandler: {
    gap: 30,
    marginTop: 20,
    
  },
  otherOptionsSeperater: {
    color: "#787878",
    fontSize: 15,
    alignSelf: "center",
  },
  imageHandler: {
    width: 35,
    height: 25,
    objectFit: "cover",
    marginLeft: 30,
  },
  otherOptionsHandler: {
    flexDirection: "row",
    gap: 45,
  },
  otherOptionsText: {
    color: "#787878",
    fontSize: 15,
    fontFamily: "OpenSansRegular"
  },
});
