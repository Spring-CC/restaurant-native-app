import React, { useState } from "react";
import {
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  Text,
} from "react-native";
import { Container, View, Footer, FooterTab, Button, Icon } from "native-base";
import Nav from "./Nav";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setRestaurantsList } from "../actions";

export default function Receive({ navigation }) {
  function submit() { }
  const [number, onChangeNumber] = useState("");
  const [isSent, setIsSent] = useState(false);
  const userId = useSelector((state) => state.userIdReducer);
  const dispatch = useDispatch();

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
      onChangeNumber("");
      dispatch(setRestaurantsList(response.data));
    } catch (err) {
      console.log(err);
    }
  }

  function back() {
    navigation.navigate("Profile");
    onChangeNumber("");
  }
  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={{ flex: 1 }}>
          <Nav />
          <View style={styles.container}>
            {isSent ? (
              <View>
                <Text style={styles.success}>New restaurants are ready!</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate("Search")}
                >
                  <Text style={styles.text}>Go Home</Text>
                </TouchableOpacity>
              </View>
            ) : (
                <View>
                  <View>
                    <TextInput
                      placeholder="Type your secret code"
                      style={styles.input}
                      onChangeText={(num) => {
                        onChangeNumber(num);
                      }}
                      value={number}
                      keyboardType="default"
                    />
                  </View>

                  <View style={styles.buttonlineup}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => submit(number)}
                    >
                      <Text style={styles.text}> Submit </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => back()}
                    >
                      <Text style={styles.text}> Go Back </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
      <Footer>
        <FooterTab style={{ backgroundColor: "#F3722C" }}>
          <Button vertical onPress={() => navigation.navigate("Home")}>
            <Icon name="home" style={{ color: "#fff" }} />
            <Text style={{ color: "#fff", fontSize: 12 }}>Home</Text>
          </Button>
          <Button vertical onPress={() => navigation.navigate("Search")}>
            <Icon name="search" style={{ color: "#fff" }} />
            <Text style={{ color: "#fff", fontSize: 12 }}>Search</Text>
          </Button>
          <Button vertical onPress={() => navigation.navigate("Preferences")}>
            <Icon active name="cog" style={{ color: "#fff" }} />
            <Text style={{ color: "#fff", fontSize: 12 }}>Preference</Text>
          </Button>
          <Button vertical onPress={() => navigation.navigate("Profile")}>
            <Icon name="person" style={{ color: "#fff" }} />
            <Text style={{ color: "#fff", fontSize: 12 }}>User</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
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
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#E6772E",
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
  buttonlineup: { alignItems: "center" },
});
