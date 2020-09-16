import React from "react";
import {
  StyleSheet,
  ScrollView,
  Image,
  Linking,
  TouchableOpacity,
} from "react-native";
import {
  Container,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Left,
  Body,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
} from "native-base";
import Nav from "./Nav";
import IconAlt from "react-native-vector-icons/Foundation";

export default function About({ navigation }) {
  return (
    <Container>
      <ScrollView style={styles.container}>
        <Nav />
        <View style={styles.about}>
          <Text>
            THIS WILL BE WHAT OUR APP IS ABOUT, THIS IS JUST THE PLACEHOLDER
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
            {"\n"}
          </Text>
        </View>
        <View style={styles.box1}>
          <Text style={styles.text}>Eri Shimada</Text>
          <Image
            source={{
              uri:
                "https://ca.slack-edge.com/T0139VDCF27-U013CHJSHRT-ac0cf8bdb88e-512",
            }}
            style={styles.image}
          />

          <TouchableOpacity
            onPress={() => Linking.openURL("https://github.com/Erismd")}
          >
            <IconAlt style={styles.icon} name="social-github" size={50} />
          </TouchableOpacity>
        </View>
        <View style={styles.box2}>
          <Text style={styles.text}>Shaun Darragh</Text>
          <Image
            source={{
              uri: "https://ottotsuma.github.io/tsuma2.jpg",
            }}
            style={styles.image}
          />
          <TouchableOpacity
            onPress={() => Linking.openURL("https://github.com/ottotsuma")}
          >
            <IconAlt style={styles.icon} name="social-github" size={50} />
          </TouchableOpacity>
        </View>
        <View style={styles.box3}>
          <Text style={styles.text}>Alberto Medellin</Text>
          <Image
            source={{
              uri:
                "https://ca.slack-edge.com/T0139VDCF27-U013T9A9NF3-768002e495e2-512",
            }}
            style={styles.image}
          />

          <TouchableOpacity
            onPress={() => Linking.openURL("https://github.com/MEGAALBERT")}
          >
            <IconAlt style={styles.icon} name="social-github" size={50} />
          </TouchableOpacity>
        </View>
        <View style={styles.box4}>
          <Text style={styles.text}>Yuri Amami</Text>
          <Image
            source={{
              uri:
                "https://avatars0.githubusercontent.com/u/59043522?s=460&u=c51394ea0198c52f18a767eb68861fc300a7f8bd&v=4",
            }}
            style={styles.image}
          />

          <TouchableOpacity
            onPress={() => Linking.openURL("https://github.com/yuriamm")}
          >
            <IconAlt style={styles.icon} name="social-github" size={50} />
          </TouchableOpacity>
        </View>
        <View style={styles.box5}>
          <Text style={styles.text}>Dylan Cooper</Text>
          <Image
            source={{
              uri:
                "https://ca.slack-edge.com/T0139VDCF27-U013K8SSE6Q-fb608ad7d078-512",
            }}
            style={styles.image}
          />

          <TouchableOpacity
            onPress={() => Linking.openURL("https://github.com/Dylanc55")}
          >
            <IconAlt style={styles.icon} name="social-github" size={50} />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Footer>
        <FooterTab>
          <Button vertical onPress={() => navigation.navigate("Home")}>
            <Icon name="home" />
            <Text>Home</Text>
          </Button>
          <Button vertical onPress={() => navigation.navigate("Search")}>
            <Icon name="eye" />
            <Text>Search</Text>
          </Button>
          <Button vertical onPress={() => navigation.navigate("Preferences")}>
            <Icon active name="pizza" />
            <Text>Preference</Text>
          </Button>
          <Button vertical onPress={() => navigation.navigate("Favorites")}>
            <Icon name="heart" />
            <Text>Favorites</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    fontFamily: "MPLUS1p-Black",
    color: "white",
  },
  text_sub: {
    fontSize: 20,
    fontFamily: "MPLUS1p-Medium",
    color: "dodgerblue",
  },
  about: {
    margin: 10,
    borderRadius: 12,
    backgroundColor: "#2A9D8F",
    alignItems: "center",
    borderRadius: 12,
  },
  box1: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8961E",
    margin: 10,
    borderRadius: 12,
  },
  box2: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9C74F",
    margin: 10,
    borderRadius: 12,
  },
  box3: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#90BE6D",
    margin: 10,
    borderRadius: 12,
  },
  box4: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8961E",
    margin: 10,
    borderRadius: 12,
  },
  box5: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9C74F",
    margin: 10,
    borderRadius: 12,
  },
});
