import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import BasicGrid from "./BasicGrid";
import ScrollingGrid from "./ScrollingGrid";
import ScrollingGridFixedHeader from "./ScrollingGridFixedHeader";
import ScrollingGridFixedColumn from "./ScrollingGridFixedColumn";
import ScrollingGridSyncedColumn from "./ScrollingGridSyncedColumn";
import ScrollingGridPanResponder from "./ScrollingGridPanResponder";

const Button = ({ title, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      backgroundColor: "tomato",
      width: 170,
      padding: 10,
      margin: 5,
      borderRadius: 3,
      alignItems: "center"
    }}
  >
    <Text style={{ color: "white", fontWeight: "bold" }}>{title}</Text>
  </TouchableOpacity>
);

const Menu = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Button title="Basic Grid" onPress={() => navigation.navigate("BasicGrid")} />
    <Button title="Scrolling Grid" onPress={() => navigation.navigate("ScrollingGrid")} />
    <Button title="Fixed Header Grid" onPress={() => navigation.navigate("ScrollingGridFixedHeader")} />
    <Button title="Fixed Column Grid" onPress={() => navigation.navigate("ScrollingGridFixedColumn")} />
    <Button title="Synced Column Grid" onPress={() => navigation.navigate("ScrollingGridSyncedColumn")} />
    <Button title="Pan Responder Grid" onPress={() => navigation.navigate("ScrollingGridPanResponder")} />
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

const ScrollingGridPanResponderScreen = () => <ScrollingGridPanResponder />;
ScrollingGridPanResponderScreen.navigationOptions = ({ navigation }) => ({
  title: "Pan Responder"
});

const AppNavigator = createStackNavigator(
  {
    Menu: Menu,
    BasicGrid: BasicGridScreen,
    ScrollingGrid: ScrollingGridScreen,
    ScrollingGridFixedHeader: ScrollingGridFixedHeaderScreen,
    ScrollingGridFixedColumn: ScrollingGridFixedColumnScreen,
    ScrollingGridSyncedColumn: ScrollingGridSyncedColumnScreen,
    ScrollingGridPanResponder: ScrollingGridPanResponderScreen
  },
  {
    initialRouteName: "Menu"
  }
);

export default createAppContainer(AppNavigator);
