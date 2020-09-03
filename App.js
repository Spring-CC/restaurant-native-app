import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Details from './components/Details';
import { StyleSheet, View } from 'react-native';
import { createStore } from 'redux';
import increment from './reducers/increment';
import { Provider } from 'react-redux';

const store = createStore(increment);

export default function App() {
  return (
    <Provider store={store}>
      <View>
        <Nav />
        <Home />
        <About />
        <Details />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
