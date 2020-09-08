import React, { Component } from "react";
import { StyleSheet, View, Image, Text, Button, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/Foundation";

import { useSelector } from "react-redux";

export default function UserInfo({ navigation }) {
  // const profileImage = require("../assets/profile.jpeg");
  const name = useSelector((state) => state.profileReducer);
  const profileImage = useSelector((state) => state.picReducer);
  console.log(profileImage);
  /** if no name then show guest */
  if (name[0].name === "") {
    return (
      <SafeAreaView style={styles.background}>
        <Image
          source={require("./../assets/logo_bowl.png")}
          style={styles.logo}
        />
        <Text>
          You are not logged in, please log in before trying to view your
          profile.
        </Text>
        <Button
          title="Go To Home"
          onPress={() => {
            // Navigate using the `navigation` prop that you received
            navigation.navigate("Home");
          }}
        />

        <Button
          title="Go To Login"
          onPress={() => {
            // Navigate using the `navigation` prop that you received
            navigation.navigate("Login");
          }}
        />
      </SafeAreaView>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image style={styles.avatar} source={profileImage} />
            {name ? (
              <Text style={styles.name}>Your name is, {name}!</Text>
            ) : (
                <Text>Hello, guest!</Text>
              )}
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Icon style={styles.icon} name="key" size={30} />
            </View>
            <Button
              style={styles.button}
              title="Change Password"
              onPress={() => navigation.navigate("ChangePassword")}
            />
          </View>

          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Icon style={styles.icon} name="heart" size={30} />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info}>Favorites</Text>
            </View>
            <View>
              <Button
                style={styles.button}
                title="Go Home"
                onPress={() => navigation.navigate("Home")}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#DCDCDC",
  },
  background: {
    alignItems: "center",
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
  logo: {
    marginTop: 3,
    width: 100,
    height: 100,
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
