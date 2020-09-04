import React, { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, Button, Text } from 'react-native';

export default function SignUp({ navigation }) {

  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  const user = {
    email,
    password
  };

  const callBackFunc = (err) => {
    return err;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          onChangeEmail(text);
          console.log(email);
        }}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          onChangePassword(text);
          console.log(password)
        }}
        value={password}
        secureTextEntry
      />

      <Button
        title="Back to log in"
        onPress={() => navigation.navigate('Login')}
      />
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
  },
});