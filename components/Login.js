import React, {useState} from 'react';
import { ScrollView, StyleSheet, TextInput, Button, Text, Separator } from 'react-native';

export default function Login({ navigation }) {

  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  // the hell is this function doing? 
  const callBackFunc = (err) => {
    return err;
  }

return (
  <ScrollView contentContainerStyle={styles.container}>
  <TextInput
    style={styles.input}
    onChangeText={(text) => {
      onChangeEmail(text);
      // console.log(email);
    }}
    value={email}
    keyboardType="email-address"
  />
  <TextInput
    style={styles.input}
    onChangeText={(text) => {
      onChangePassword(text);
      // console.log(password)
    }}
    value={password}
    secureTextEntry
  />
 
  <Button title="Login" 
  onPress={() => navigation.navigate('Home')}
  />


  <Button
  style={styles.button}
    title="Create account"
    onPress={() => navigation.navigate('CreateAccount')}
  />
  
    <Button
    style={styles.button}
    title="Go Home"
    onPress={() => navigation.navigate('Home')}
  />
</ScrollView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10',
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
  },
  button: {
    padding: '10',
    color: "#841584"
  },
});