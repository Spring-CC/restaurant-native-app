import React from 'react';
import { Text, View, Button } from 'react-native';
import { login } from '../api/mock';

export default function Login({ navigation }) {

  const loginUser = () => { // test
    login('test@test.ca', 'password')
      .then(() => {
        navigation.navigate('Home');
      })
      .catch((err) => console.log('error:', err.message));
  };

return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>LoginScreen</Text>
    <Button
        title="Log in"
        onPress={() => {loginUser}}
      />
      <Button
        title="Create account"
        onPress={() => navigation.navigate('CreateAccount')}
      />
  </View>  
);
}