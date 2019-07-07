import React from "react";
import { View, Text } from "react-native";

const Cell = ({ value, style }) => (
  <View
    style={{
      borderWidth: 1,
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderColor: "black",
      padding: 5,
      width: 100,
      height: 30,
      ...style
    }}
  >
    <Text>{value}</Text>
  </View>
);

export default Cell;
