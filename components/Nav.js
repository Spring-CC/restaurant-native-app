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
        <View>
            <Text style={titleStyle}>Restaurant App</Text>
            <View className="nav-links">
                <Link style={navStyle} to="/">
                    <Text>Home</Text>
                </Link>
                <Link style={navStyle} to="/about">
                    <Text>About</Text>
                </Link>
                {!user && (
                    <Link
                        style={navStyle}
                        onClick={() => {
                            window.location.reload();
                        }}
                        to="/login"
                    >
                        <Text>Log In</Text>
                    </Link>
                )}
            </View>
        </View>
    );
}