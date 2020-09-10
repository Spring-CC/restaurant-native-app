import React from 'react';
import { StyleSheet, Image } from "react-native";
import { Container, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import Nav from "./Nav";

export default function Landing({ navigation }) {
    return (
        <Container>
            <Nav />
            <Content style={styles.container}>

            </Content>
            <Footer>
                <FooterTab>
                    <Button vertical active onPress={() => navigation.navigate("Landing")}>
                        <Icon name="apps" />
                        <Text>Home</Text>
                    </Button>
                    <Button vertical onPress={() => navigation.navigate("Home")}>
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
});