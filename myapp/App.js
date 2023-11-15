import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import SearchFilter from "./SearchFilter";
import NotificationPopup from "./NotificationButton";
import NotificationButton from "./NotificationButton";
export default function App() {
  const [input, setInput] = useState("");
  console.log(input);
  const data = [
    { name: 'Olivia', id: 41, department: 'Engineering' },
    { name: 'Peter', id: 42, department: 'Product Management' },
    { name: 'Quincy', id: 43, department: 'Research & Development' },
    { name: 'Rachel', id: 44, department: 'Marketing' },
    { name: 'Sarah', id: 45, department: 'Operations' },
    { name: 'Tom', id: 46, department: 'Finance' },
    { name: 'Ursula', id: 47, department: 'Human Resources' },
    { name: 'Victor', id: 48, department: 'Customer Service' },
    { name: 'Wendy', id: 49, department: 'Sales' },
    { name: 'Xander', id: 50, department: 'Quality Assurance' },
];

  return (
    <>
    <View>
      
    <Text style={{alignItems:'center',fontSize:18,fontWeight:"bold"}}>Select Country</Text>
      <View
        style={{
          padding: 10,
          margin: 10,
          flexDirection: "row",
          width: "95%",
          backgroundColor: "#d2d2f9",
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        <Text size={20} color="black" style={{ marginLeft: 2, marginRight: 8 }}>
          &#128269;
        </Text>
        <TextInput
          placeholder="Search.."
          style={{ fontSize: 15,width:"100%" }}
          value={input}
          onChangeText={(value) => setInput(value)}
        />
      </View>
      <SearchFilter data={data} input={input} setInput={setInput}/>
      {/* <NotificationButton/>.
       */}
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
