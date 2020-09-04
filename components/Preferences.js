import React, {useState} from 'react';
import { StyleSheet, Text, View, CheckBox } from 'react-native';

export default function About() {

const [isSelected, setSelection] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Izakaya</Text>
        </View>
        <Text> {isSelected ? "Yes of course 👍" : "Not at all 👎"}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    checkboxContainer: {
      flexDirection: "row",
      marginBottom: 20,
    },
    checkbox: {
      alignSelf: "center",
    },
    label: {
      margin: 8,
    },
  });
