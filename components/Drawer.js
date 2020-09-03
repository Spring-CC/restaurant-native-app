import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 30,
        left: 10,
      }}
    >
      <Icon
        name="bars"
        size={30}
        style={{ paddingLeft: 20 }}
        onPress={() => {
          navigation.navigate("Notifications");
          navigation.openDrawer();
        }}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Icon
        onPress={() => navigation.goBack()}
        name="bars"
        size={30}
        style={{ paddingLeft: 20, position: "absolute", top: 30, left: 10 }}
      />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        {/* <Drawer.Screen name="Select" component={Checkbox} /> */}
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
