import * as React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
// import Icon from "react-native-vector-icons/FontAwesome";
import Login from "./Auth";
import SignUp from "./SignUp";
import Home from "./Home";
import About from "./About";
import Details from "./Details";
import UserInfo from "./UserInfo";
import Preferences from "./Preferences";
import Auth from "./Auth";
import ChangePassword from "./ChangePassword";
import Yes from "./Yes"

class Hidden extends React.Component {
  render() {
    return null;
  }
}

const Drawer = createDrawerNavigator(
  {
    Home: {
      screen: Home,
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
    drawerBackgroundColor: "#FF5B38", // sets background color of drawer
  }
);

export default createAppContainer(Drawer);

// function HomeScreen({ navigation }) {
//   return (
//     <View
//       style={{
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center",
//         position: "absolute",
//         top: 30,
//         left: 30,
//       }}
//     >
//       <Icon
//         name="bars"
//         size={30}
//         style={{ paddingLeft: 20 }}
//         onPress={() => {
//           navigation.navigate("Notifications");
//           navigation.openDrawer();
//         }}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Icon
//         onPress={() => navigation.goBack()}
//         name="bars"
//         size={30}
//         style={{ paddingLeft: 20, position: "absolute", top: 30, left: 10 }}
//       />
//     </View>
//   );
// }

// export default function Sidebar() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Select" component={Checkbox} />
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }
