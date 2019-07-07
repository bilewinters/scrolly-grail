import React from "react";
import { View, Text, FlatList } from "react-native";

import Cell from "./Cell";

const cachedGridData = [];

const generateGridData = (colCount, rowCount) => {
  const rows = [];
  for (let r = 0; r < rowCount; r++) {
    let row = cachedGridData[r] ? cachedGridData[r] : { id: `r${r}`, data: [] };
    cachedGridData[r] = row;
    for (let c = 0; c < colCount; c++) {
      if (row.data.length <= c) {
        row.data.push({ id: `r${r}c${c}`, value: Math.random() });
      }
    }
    rows.push(row);
  }
  return rows;
};

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
