import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import BasicGrid from "./BasicGrid";
import ScrollingGrid from "./ScrollingGrid";
import ScrollingGridFixedHeader from "./ScrollingGridFixedHeader";
import ScrollingGridFixedColumn from "./ScrollingGridFixedColumn";
import ScrollingGridSyncedColumn from "./ScrollingGridSyncedColumn";

const Menu = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text>Menu</Text>
    <Button title="Basic Grid" onPress={() => navigation.navigate("BasicGrid")} />
    <Button title="Scrolling Grid" onPress={() => navigation.navigate("ScrollingGrid")} />
    <Button title="Fixed Header Grid" onPress={() => navigation.navigate("ScrollingGridFixedHeader")} />
    <Button title="Fixed Column Grid" onPress={() => navigation.navigate("ScrollingGridFixedColumn")} />
    <Button title="Synced Column Grid" onPress={() => navigation.navigate("ScrollingGridSyncedColumn")} />
  </View>
);
Menu.navigationOptions = ({ navigation }) => ({
  title: "Menu"
});

const BasicGridScreen = () => <BasicGrid />;
BasicGridScreen.navigationOptions = ({ navigation }) => ({
  title: "Basic Grid"
});

const ScrollingGridScreen = () => <ScrollingGrid />;
ScrollingGridScreen.navigationOptions = ({ navigation }) => ({
  title: "Scrolling"
});

const ScrollingGridFixedHeaderScreen = () => <ScrollingGridFixedHeader />;
ScrollingGridFixedHeaderScreen.navigationOptions = ({ navigation }) => ({
  title: "Fixed Header"
});

const ScrollingGridFixedColumnScreen = () => <ScrollingGridFixedColumn />;
ScrollingGridFixedColumnScreen.navigationOptions = ({ navigation }) => ({
  title: "Fixed Column"
});

const ScrollingGridSyncedColumnScreen = () => <ScrollingGridSyncedColumn />;
ScrollingGridSyncedColumnScreen.navigationOptions = ({ navigation }) => ({
  title: "Synced Column"
});

const AppNavigator = createStackNavigator(
  {
    Menu: Menu,
    BasicGrid: BasicGridScreen,
    ScrollingGrid: ScrollingGridScreen,
    ScrollingGridFixedHeader: ScrollingGridFixedHeader,
    ScrollingGridFixedColumn: ScrollingGridFixedColumn,
    ScrollingGridSyncedColumn: ScrollingGridSyncedColumn
  },
  {
    initialRouteName: "Menu"
  }
);

export default createAppContainer(AppNavigator);
