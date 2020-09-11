import React from 'react';
import { StyleSheet, View } from "react-native";
import { Container, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import Nav from "./Nav";

export default function Landing({ navigation }) {
    return (
        <Container>
            <Nav />
            <View style={styles.container}>
                <Button
                    success
                    full
                    iconLeft
                    onPress={() => navigation.navigate("Login")}
                >
                    <Icon name='home' />
                    <Text>Login</Text>
                </Button>
            </View>
            <Footer>
                <FooterTab>
                    <Button active vertical onPress={() => navigation.navigate("Home")}>
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
        backgroundColor: "#F9C74F",
    },
    button: {
        color: 'white',
    }
});