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
  Card,
  CardItem,
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
        <Card style={styles.about}>
          <CardItem header style={{ backgroundColor: '#2A9D8F' }}>
            <Text style={{ color: '#fff' }}>Munchify</Text>
          </CardItem>
          <CardItem style={{ backgroundColor: '#2A9D8F' }}>
            <Body>
              <Text style={{ color: '#fff' }}>
                This app allows you to find restaurants in Tokyo, the best part about this app though is the more you use the app the more it learns about your preference and starts to predict what restaurant would be perfect for you today!
              </Text>
            </Body>
          </CardItem>
          <CardItem footer style={{ backgroundColor: '#2A9D8F' }}>
            <Text style={{ color: '#fff' }}>Munchify Team</Text>
          </CardItem>
        </Card>
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
          <Text style={styles.textGit}>Erismd</Text>
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
          <Text style={styles.textGit}>ottotsuma</Text>
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
          <Text style={styles.textGit}>MEGAALBERT</Text>
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
          <Text style={styles.textGit}>yuriamm</Text>
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
          <Text style={styles.textGit}>Dylanc55</Text>
        </View>
      </ScrollView>
      <Footer>
        <FooterTab style={{ backgroundColor: "#F3722C" }}>
          <Button vertical onPress={() => navigation.navigate("Home")}>
            <Icon name="home" style={{ color: '#fff' }} />
            <Text
              style={{ color: '#fff', fontSize: 12 }}>Home</Text>
          </Button>
          <Button vertical onPress={() => navigation.navigate("Search")}>
            <Icon name="search" style={{ color: '#fff' }} />
            <Text style={{ color: '#fff', fontSize: 12 }}>Search</Text>
          </Button>
          <Button vertical onPress={() => navigation.navigate("Preferences")}>
            <Icon active name="cog" style={{ color: '#fff' }} />
            <Text style={{ color: '#fff', fontSize: 12 }}>Preference</Text>
          </Button>
          <Button vertical onPress={() => navigation.navigate("Profile")}>
            <Icon name="person" style={{ color: '#fff' }} />
            <Text style={{ color: '#fff', fontSize: 12 }}>User</Text>
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
    marginTop: 20,
    marginBottom: 20,
  },
  textGit: {
    fontSize: 15,
    fontFamily: "MPLUS1p-Black",
    marginBottom: 15,
  },
  about: {
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 12,
    backgroundColor: "#2A9D8F",
    alignItems: "center",
    borderRadius: 12,
    padding: 10,
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
