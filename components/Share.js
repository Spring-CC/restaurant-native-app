import React, { useEffect, useState } from "react";
import {
  // View,
  // Text,
  StyleSheet,
  Clipboard,
  TouchableOpacity,
  SafeAreaView,
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
import { useSelector } from "react-redux";

export default function Receive({ navigation }) {
  const [copiedText, setCopiedText] = useState("");
  const [number, setNumber] = useState("");
  const userId = useSelector((state) => state.userIdReducer);

  const copyToClipboard = () => {
    Clipboard.setString(userId);
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
    setCopiedText(text);
  };

  return (
    <Container>
      <SafeAreaView style={{ flex: 1 }}>
        <Nav />
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => copyToClipboard()}
          >
            <Text style={styles.text}>{userId}</Text>
          </TouchableOpacity>
          <Text>tap to copy</Text>

          {/* {copiedText !== "" ?():()} */}
          <TouchableOpacity onPress={() => fetchCopiedText()}>
            <Text>View copied text</Text>
          </TouchableOpacity>
          <Text style={styles.copiedText}>{copiedText}</Text>
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
  text: { fontSize: 20 },
  copiedText: {
    marginTop: 10,
    color: "red",
  },
  button: {
    backgroundColor: "#E6772E",
    borderRadius: 5,
    padding: 20,
    margin: 8,
  },
});
