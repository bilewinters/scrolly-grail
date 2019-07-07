import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import BasicGrid from "./BasicGrid";
import ScrollingGrid from "./ScrollingGrid";
import ScrollingGridFixedHeader from "./ScrollingGridFixedHeader";

const Menu = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>Menu</Text>
    <Button title="Basic Grid" onPress={() => navigation.navigate("BasicGrid")} />
    <Button title="Scrolling Grid" onPress={() => navigation.navigate("ScrollingGrid")} />
    <Button title="Fixed Header Grid" onPress={() => navigation.navigate("ScrollingGridFixedHeader")} />
  </View>
);
Menu.navigationOptions = ({ navigation }) => ({
  title: "Menu"
});

const BasicGridScreen = () => <BasicGrid />;
BasicGrid.navigationOptions = ({ navigation }) => ({
  title: "Basic Grid"
});

const ScrollingGridScreen = () => <ScrollingGrid />;
ScrollingGridScreen.navigationOptions = ({ navigation }) => ({
  title: "Scrolling"
});

const ScrollingGridFixedHeaderScreen = () => <ScrollingGridFixedHeader />;
ScrollingGridFixedHeader.navigationOptions = ({ navigation }) => ({
  title: "Fixed Header"
});

const AppNavigator = createStackNavigator(
  {
    Menu: Menu,
    BasicGrid: BasicGridScreen,
    ScrollingGrid: ScrollingGridScreen,
    ScrollingGridFixedHeader: ScrollingGridFixedHeader
  },
  {
    initialRouteName: "Menu"
  }
);

export default createAppContainer(AppNavigator);
