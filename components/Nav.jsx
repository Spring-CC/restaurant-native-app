import React from "react";
import { View, FlatList, Text } from 'react-native';
import { Link } from "react-router-dom";

export default function Nav({ user }) {
    const navStyle = {
        color: "white",
        textDecoration: "none",
        fontSize: "3vh",
        fontFamily: "verdana",
    };
    const titleStyle = {
        fontSize: "4vh",
        fontFamily: "verdana",
    };
    return (
        <Header>
            <Text h1 style={titleStyle}>Restaurant App</Text>
            <View className="nav-links">
                <Link style={navStyle} to="/">
                    <FlatList>Home</FlatList>
                </Link>
                <Link style={navStyle} to="/about">
                    <FlatList>About</FlatList>
                </Link>
                {!user && (
                    <Link
                        style={navStyle}
                        onClick={() => {
                            window.location.reload();
                        }}
                        to="/login"
                    >
                        <FlatList>Log In</FlatList>
                    </Link>
                )}
            </View>
        </Header>
    );
}