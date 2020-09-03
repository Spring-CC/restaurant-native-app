import React from 'react';
import { Text, View, Button } from 'react-native';
import { createAccount } from '../api/mock';
import EmailForm from "./EmailForm"

export default function SignUp({navigation}) {

return (
  <EmailForm
  buttonText="Sign up"
  //onSubmit={createAccount}
  onAuthentication={() => navigation.navigate('Home')}
>
  <Button
    title="Back to log in"
    onPress={() => navigation.navigate('Login')}
  />
</EmailForm>
);
}