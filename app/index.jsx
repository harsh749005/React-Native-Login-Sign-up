import MyButton from "@/components/MyButton";
import { useRouter } from "expo-router";
import { StatusBar, StyleSheet, Text, View } from "react-native";

const Index = ()=> {
  const router = useRouter();
  const handleClick = () =>{
    // alert("hi");
    router.navigate('/signup')
  }


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" />
      <Text style={styles.heading}>This is Home Page</Text>
      <MyButton title={"Signup"} onPress={handleClick} />
    </View>
  );
}
export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    gap:15
  },
  heading:{
    color:"white",
    fontSize:30,
    fontFamily:"Roboto"
  }
});
