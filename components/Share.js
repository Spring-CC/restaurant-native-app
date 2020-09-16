import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Clipboard,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
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
