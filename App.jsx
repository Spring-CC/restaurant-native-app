import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Details from './components/Details';
import { StyleSheet, View } from 'react-native';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <View className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/about" component={About} />

          <Route path="/details" component={Details} />
        </Switch>
      </View>
    </Router>
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
