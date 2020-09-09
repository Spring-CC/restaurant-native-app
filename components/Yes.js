import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Button,
} from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { useSelector, useDispatch } from "react-redux";
import { increment, restaurant, setRestaurantsList } from "../actions";
import data from "../data/restaurants.json";
import Nav from "./Nav";
import axios from "axios";
import Details from "./Details";

export default function Yes({ navigation }) {

  // useEffect(() => {
  //   navigation.navigate("Details");
  // }, []);

  return (
    <Text>Orange</Text>
  )
}
