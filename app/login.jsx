import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import MyButton from "@/components/MyButton";
import { useFonts } from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";
const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [storeEmail, setStoredEmail] = useState("");
  const [storePassword, setStoredPassword] = useState("");
  // Load the custom font
  const [fontsLoaded] = useFonts({
    Roboto: require("../assets/fonts/Roboto_Condensed-Regular.ttf"),
  });

  const router = useRouter();

  const getData = async () => {
    const storedEmail = await AsyncStorage.getItem("email");
    const storedPassword = await AsyncStorage.getItem("password");
    if (storedEmail && storedPassword) {
      setStoredEmail(storedEmail);
      setStoredPassword(storedPassword);
    }
  };
  const handleLogin = () => {
    if (email && password) {
      // validate email
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!pattern.test(email)) {
        alert("Invalid email");
      }
      if (password.length < 8) {
        alert("Password should be at least 8 characters long");
        return;
      } else {
        // verify email and password
        if (email === storeEmail && password === storePassword) {
          alert("Logined successfully");
          router.navigate("/");
        } else {
          alert("Invalid credentials");
        }
      }
    } else {
      alert("Please fill in all fields");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Log in to Scale</Text>
      <View style={styles.mainInputHolder}>
        <View style={styles.subInputHolder}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            placeholder="enter your email"
            placeholderTextColor="#8a8a8a"
            style={styles.input}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.subInputHolder}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            placeholder="enter your password"
            placeholderTextColor="#8a8a8a"
            style={styles.input}
            onChangeText={setPassword}
          />
        </View>
        <Text style={styles.text}>Forgot Password ?</Text>
        {/* <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable> */}
        <MyButton title={"Login"} onPress={handleLogin} />
        <Text style={styles.otherOptionsSeperater}>or</Text>
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
        <Text style={styles.terms}>
          Scale uses cookies for analysis personalized content and ads. By using
          Scale's services you agree to the use of cookies. Learn more
        </Text>
      </View>
    </View>
  );
};

export default login;

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
    fontSize: 16,
    fontFamily: "OpenSansRegular",
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
    fontSize: 16,
    fontFamily: "OpenSansRegular",
  },
  text: {
    color: "#787878",
    fontSize: 15,
  },
  mainOtherOptionsHandler: {
    gap: 30,
    marginTop: 20,
  },
  otherOptionsSeperater: {
    color: "#787878",
    fontSize: 15,
    alignSelf: "center",
    fontFamily: "OpenSansRegular",
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
    fontFamily: "OpenSansRegular",
  },
  terms: {
    color: "#787878",
    fontSize: 12,
    textAlign: "center",
    width: 250,
    alignSelf: "center",
    marginTop: 30,
    fontFamily: "OpenSansRegular",
  },
});
