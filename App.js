import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import BasicGrid from "./BasicGrid";

const Menu = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>Menu</Text>
    <Button title="Basic Grid" onPress={() => navigation.navigate("BasicGrid")} />
  </View>
);
Menu.navigationOptions = ({ navigation }) => ({
  title: "Menu"
});

const BasicGridScreen = () => <BasicGrid />;
BasicGrid.navigationOptions = ({ navigation }) => ({
  title: "Basic Grid"
});

const AppNavigator = createStackNavigator(
  {
    Menu: Menu,
    BasicGrid: BasicGrid
  },
  {
    initialRouteName: "Menu"
  }
);

export default createAppContainer(AppNavigator);
