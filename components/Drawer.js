import * as React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { useSelector } from "react-redux";
// import Icon from "react-native-vector-icons/FontAwesome";
import Login from "./Auth";
import SignUp from "./SignUp";
import Search from "./Home";
import Home from "./Landing";
import About from "./About";
import Details from "./Details";
import UserInfo from "./UserInfo";
import FavoritesView from "./FavoritesView";
import Preferences from "./Preferences";
import Auth from "./Auth";
import ChangePassword from "./ChangePassword";
import Yes from "./Yes";

const name = useSelector((state) => state.profileReducer);

class Hidden extends React.Component {
  render() {
    return null;
  }
}

const Drawer = createDrawerNavigator(
  {
    Home: {
      screen: Search,
    },

    Search: {
      screen: Search,
    },

    Yes: {
      screen: Yes,
      navigationOptions: {
        drawerLabel: <Hidden />,
      },
    },

    ChangePassword: {
      screen: ChangePassword,
      navigationOptions: {
        drawerLabel: <Hidden />,
      },
    },

    Login: {
      screen: Auth,
    },

    CreateAccount: {
      screen: SignUp,
      navigationOptions: {
        drawerLabel: <Hidden />,
      },
    },
    About: {
      screen: About,
    },

    Profile: {
      screen: UserInfo,
    },
    Preferences: {
      screen: Preferences,
    },
    Favorites: {
      screen: FavoritesView,
    },

    Details: {
      screen: Details,
      navigationOptions: {
        drawerLabel: <Hidden />,
      },
    },
  },
  {
    intialRouteName: "Home",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "white",
      },
    },
    contentOptions: {
      // add your styling here
      activeTintColor: "white",
      itemsContainerStyle: {
        marginVertical: 0,
      },
      iconContainerStyle: {
        opacity: 1,
      },
    },
    drawerBackgroundColor: "#F8961E", // sets background color of drawer
  }
);

export default createAppContainer(Drawer);
