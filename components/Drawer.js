import * as React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
// import Icon from "react-native-vector-icons/FontAwesome";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";
import About from "./About";
import Details from "./Details";
import Userinfo from "./Userinfo";
import Preferences from "./Preferences";
import Auth from "./Auth";
import ChangePassword from "./ChangePassword";

const Drawer = createDrawerNavigator({
  Home: {
    screen: Home,
  },

  Auth: {
    screen: Auth,
  },

  Login: {
    screen: Login,
  },

  Auth: {
    screen: Auth,
  },
  ChangePassword: {
    screen: ChangePassword,
  },

  CreateAccount: {
    screen: SignUp,
  },
  About: {
    screen: About,
  },
  Details: {
    screen: Details,
  },
  Profile: {
    screen: Userinfo,
  },
  Preferences: {
    screen: Preferences,
  },
});

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
