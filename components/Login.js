import React, {useState} from 'react';
import { ScrollView, StyleSheet, TextInput, Button, Text, Separator } from 'react-native';

"https://www.google.com/maps/search/entertainment/@35.5116084,139.4681215,16z/data=!3m1!4b1!4m11!2m10!3m6!1sentertainment!2z44CSMTk0LTAwMDQgVG9reW8sIE1hY2hpZGEsIFRzdXJ1bWEsIDMgQ2hvbWXiiJIxMOKIkjEg44G_44Ga44G76YqA6KGMIOOCsOODqeODs-ODmeODquODvOODkeODvOOCr-WHuuW8teaJgA!3s0x6018f965cf9082c1:0xc543bc1d81de60cf!4m2!1d139.4709994!2d35.5112337!5m1!4e3!6e1" // this just returns a list of near by adult clubs :< 

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