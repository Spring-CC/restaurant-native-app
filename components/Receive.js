import React, { useState } from "react";
import {
  // View,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  // Text,
} from "react-native";
import {
  Container,
  View,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
} from "native-base";
import Nav from "./Nav";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setRestaurantsList } from "../actions";

export default function Receive({ navigation }) {
  function submit() {}
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
      textInput.clear();
      dispatch(setRestaurantsList(response));
    } catch (err) {
      console.log(err);
    }
  }

  function back() {
    navigation.navigate("Profile");
    clear();
  }
  return (
    <Container>
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
              </View>
              <View style={styles.buttonlineup}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => submit(number)}
                >
                  <Text style={styles.text}> Submit </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => back()}>
                  <Text style={styles.text}> Go Back </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </SafeAreaView>
      <Footer>
        <FooterTab style={{ backgroundColor: "#F3722C" }}>
          <Button vertical onPress={() => navigation.navigate("Home")}>
            <Icon name="home" style={{ color: "#fff" }} />
            <Text style={{ color: "#fff" }}>Home</Text>
          </Button>
          <Button vertical onPress={() => navigation.navigate("Search")}>
            <Icon name="eye" style={{ color: "#fff" }} />
            <Text style={{ color: "#fff" }}>Search</Text>
          </Button>
          <Button vertical onPress={() => navigation.navigate("Preferences")}>
            <Icon active name="pizza" style={{ color: "#fff" }} />
            <Text style={{ color: "#fff" }}>Preference</Text>
          </Button>
          <Button vertical onPress={() => navigation.navigate("Favorites")}>
            <Icon name="heart" style={{ color: "#fff" }} />
            <Text style={{ color: "#fff" }}>Favorites</Text>
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
    alignItems: "center",
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
