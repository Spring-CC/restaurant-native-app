import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Clipboard,
  TouchableOpacity,
} from "react-native";
import Nav from "./Nav";

export default function Receive({ navigation }) {
  const [copiedText, setCopiedText] = useState("");

  const copyToClipboard = () => {
    Clipboard.setString("hello world");
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
    setCopiedText(text);
  };
  return (
    <View>
      <Nav />
      <View style={styles.container}>
        <View>
          <TouchableOpacity onPress={() => copyToClipboard()}>
            <Text style={styles.text}>
              THIS WILL BE THE NUMBER RECEIVED FROM DB
            </Text>
            <Text style={styles.text}>33300022222000</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => fetchCopiedText()}>
            <Text>View copied text</Text>
          </TouchableOpacity>
          <Text style={styles.copiedText}>{copiedText}</Text>
          <Text>
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9C74F",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    // flex: 1,
  },
  text: { fontSize: 20 },
  copiedText: {
    marginTop: 10,
    color: "red",
  },
});
