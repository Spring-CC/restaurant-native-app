import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/Foundation";
import Nav from "./Nav";

export default function UserProfile() {
  const profileImage = require("../assets/profile.jpeg");

  function changePassword() {
    // call from Auth0 endpoint in order to change password
  }
  //also pass the name from Auth.js into the profile name
  //console.log the picture param and see if user is able to change profile pic
  //

  return (
    <View style={styles.container}>
      <Nav />
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image style={styles.avatar} source={profileImage} />

          <Text style={styles.name}>Uncle Shaun </Text>
          <Text style={styles.userInfo}>shaunshaunshaun@mail.com </Text>
          <Text style={styles.userInfo}>UK </Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.item}>
          <View style={styles.iconContent}>
            <Icon style={styles.icon} name="key" size={30} />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>Change password</Text>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.iconContent}>
            <Icon style={styles.icon} name="heart" size={30} />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>Favorites</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#DCDCDC",
  },
  headerContent: {
    padding: 30,
    alignItems: "center",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: "#000000",
    fontWeight: "600",
  },
  userInfo: {
    fontSize: 16,
    color: "#778899",
    fontWeight: "600",
  },
  body: {
    backgroundColor: "#778899",
    height: 500,
    alignItems: "center",
  },
  item: {
    flexDirection: "row",
  },
  infoContent: {
    flex: 1,
    alignItems: "flex-start",
    paddingLeft: 5,
  },
  iconContent: {
    flex: 1,
    alignItems: "flex-end",
    paddingRight: 5,
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 20,
  },
  info: {
    fontSize: 18,
    marginTop: 20,
    color: "#FFFFFF",
  },
});
