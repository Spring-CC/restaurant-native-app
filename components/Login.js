import React from 'react';
import { Text, View, Button } from 'react-native';
import { login } from '../api/dblogin';
import EmailForm from "./EmailForm"

export default function Login({ navigation }) {

return (
  <EmailForm
  buttonText="Log in"
  onSubmit={login}
  onAuthentication={() => navigation.navigate('Home')}
>
  <Button
    title="Create account"
    onPress={() => navigation.navigate('CreateAccount')}
  />
    <Button
    title="Go Home"
    onPress={() => navigation.navigate('Home')}
  />
</EmailForm>
);
}