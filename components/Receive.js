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

export default function Receive({ navigation }) {
  function submit() { }
  const [number, onChangeNumber] = useState("");
  return (
    <Container>
      <SafeAreaView style={{ flex: 1 }}>
        <Nav />
        <View style={styles.container}>
          <TextInput
            placeholder="Type your unique number"
            style={styles.input}
            onChangeText={(num) => {
              onChangeNumber(num);
            }}
            value={number}
            keyboardType="default"
          />
          <TouchableOpacity style={styles.button} onPress={() => submit(number)}>
            <Text> Submit </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <Footer>
        <FooterTab style={{ backgroundColor: "#F3722C" }}>
          <Button vertical onPress={() => navigation.navigate("Home")}>
            <Icon name="home" style={{ color: '#fff' }} />
            <Text style={{ color: '#fff' }}>Home</Text>
          </Button>
          <Button vertical onPress={() => navigation.navigate("Search")}>
            <Icon name="eye" style={{ color: '#fff' }} />
            <Text style={{ color: '#fff' }}>Search</Text>
          </Button>
          <Button vertical onPress={() => navigation.navigate("Preferences")}>
            <Icon active name="pizza" style={{ color: '#fff' }} />
            <Text style={{ color: '#fff' }}>Preference</Text>
          </Button>
          <Button vertical onPress={() => navigation.navigate("Favorites")}>
            <Icon name="heart" style={{ color: '#fff' }} />
            <Text style={{ color: '#fff' }}>Favorites</Text>
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
    height: 40,
    width: 300,
    borderColor: "#E6772E",
    borderWidth: 1,
    marginTop: 20,
  },
  button: {
    backgroundColor: "#E6772E",
    borderRadius: 5,
    padding: 20,
    margin: 8,
  },
});
