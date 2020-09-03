import React from 'react';
import { Text, View, Button } from 'react-native';

export default function Home({ navigation }) {

return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home</Text>
    <Button title="Log out" onPress={() => navigation.navigate('Login')} />
  </View>  
);
}