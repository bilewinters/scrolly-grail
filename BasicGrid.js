import React from "react";
import { View } from "react-native";

import Cell from "./Cell";
import { generateGridData } from "./gridUtils";

const BasicGrid = ({ data = generateGridData(20, 50) }) => (
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
