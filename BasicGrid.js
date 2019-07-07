import React from "react";
import { View } from "react-native";

import Cell from "./Cell";
import { cachedGridData } from "./gridUtils";

const BasicGrid = ({ data = cachedGridData }) => (
  <View style={{ flex: 1 }}>
    {data.map(({ id: rowId, data: rowData }) => (
      <View key={rowId} style={{ flexDirection: "row" }}>
        {rowData.map(({ id: cellId, value }) => (
          <Cell key={cellId} value={value} />
        ))}
      </View>
    ))}
  </View>
);

export default BasicGrid;
