import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from "react-native";
import Nav from "./Nav";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setRestaurantsList } from "../actions";

export default function Receive({ navigation }) {
  const [number, onChangeNumber] = useState("");
  const [isSent, setIsSent] = useState(false);
  const userId = useSelector((state) => state.userIdReducer);
  const dispatch = useDispatch();

  //TODO: VALIDATE NUMBER?
  //axios get /dummyfavorites/:userid
  //update store
  //redirect
  async function submit() {
    try {
      const response = await axios.post(
        `https://restaurantserverspring.herokuapp.com/shared`,
        {
          sharingUser: number,
          receivingUser: userId,
        }
      );
      setIsSent(true);
      dispatch(setRestaurantsList(response));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Nav />
      <View style={styles.container}>
        {isSent ? (
          <View>
            <Text style={styles.success}>Number has been sent!</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Search")}
            >
              <Text style={styles.text}>Go Home</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <TextInput
              placeholder="Type your unique number"
              style={styles.input}
              onChangeText={(num) => {
                onChangeNumber(num);
              }}
              value={number}
              keyboardType="default"
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => submit(number)}
            >
              <Text style={styles.text}> Submit </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9C74F",
    padding: 5,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 50,
    width: 300,
    borderColor: "#E6772E",
    borderWidth: 1,
    marginTop: 20,
  },
  button: {
    backgroundColor: "#E6772E",
    borderRadius: 5,
    padding: 10,
    margin: 8,
    alignItems: "center",
  },
  text: {
    marginVertical: 10,
    fontFamily: "MPLUS1p-Medium",
    textAlign: "center",
    color: "#fff",
    fontSize: 15,
  },
  success: {
    fontSize: 25,
    fontFamily: "MPLUS1p-Medium",
    color: "#F3722C",
  },
});
