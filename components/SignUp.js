import React from 'react';
import { Text, View, Button } from 'react-native';
import { createAccount } from '../api/mock';

export default function SignUp({navigation}) {

  const createUser = () => {
    createAccount('test@test.ca', 'password')
      .then((val) => {
        navigation.navigate('Home');
      })
      .catch((err) => console.log('error:', err.message));
  };

return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>SignUp</Text>
    <Button title="Create User" onPress={() => {createUser}} />
    <Button title="Login" onPress={() => navigation.navigate('Login')} />
  </View>  
);
}