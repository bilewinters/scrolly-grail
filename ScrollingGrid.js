import React from "react";
import { View, ScrollView, FlatList } from "react-native";

import Cell from "./Cell";
import { cachedGridData } from "./gridUtils";

const ScrollingGrid = ({ data = cachedGridData }) => (
  <View style={{ flex: 1 }}>
    <ScrollView style={{ height: "100%" }} horizontal contentContainerStyle={{ flexDirection: "column" }}>
      <FlatList
        initialNumToRender={25}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item: row }) => (
          <View key={row.id} style={{ flexDirection: "row" }}>
            {row.data.map(({ id: cellId, value }) => (
              <Cell key={cellId} value={value} />
            ))}
          </View>
        )}
      />
    </ScrollView>
  </View>
);

export default ScrollingGrid;
