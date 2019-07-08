import React, { useRef } from "react";
import { View, ScrollView, FlatList } from "react-native";

import Cell from "./Cell";
import { cachedGridData } from "./gridUtils";

const ScrollingGrid = ({ data = cachedGridData }) => {
  const gridBody = useRef();
  const fixedColumn = useRef();
  const control = useRef({ body: false, column: false }).current;

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={{ height: "100%" }}
        horizontal
        contentContainerStyle={{ flexDirection: "column", paddingLeft: 100 }}
      >
        <FlatList
          ref={gridBody}
          onScrollBeginDrag={() => (control.body = true)}
          onScrollEndDrag={() => (control.body = false)}
          onMomentumScrollBegin={() => (control.body = true)}
          onMomentumScrollEnd={() => (control.body = false)}
          onScroll={a =>
            control.body &&
            fixedColumn.current.scrollToOffset({ offset: a.nativeEvent.contentOffset.y, animated: false })
          }
          bounces={false}
          initialNumToRender={25}
          stickyHeaderIndices={[0]}
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item: row, index: rowIndex }) => {
            if (rowIndex === 0) {
              return (
                <View key={row.id} style={{ flexDirection: "row" }}>
                  {row.data.map(({ id: cellId, value }, index) => {
                    if (index === 0) {
                      return null;
                    }
                    return <Cell key={cellId} value={value} style={{ backgroundColor: "tomato" }} />;
                  })}
                </View>
              );
            }
            return (
              <View key={row.id} style={{ flexDirection: "row" }}>
                {row.data.map(({ id: cellId, value }, index) => {
                  if (index === 0) {
                    return null;
                  }
                  return (
                    <Cell key={cellId} value={value} style={{ backgroundColor: index === 0 ? "tomato" : undefined }} />
                  );
                })}
              </View>
            );
          }}
        />
      </ScrollView>
      <FlatList
        ref={fixedColumn}
        onScrollBeginDrag={() => (control.column = true)}
        onScrollEndDrag={() => (control.column = false)}
        onMomentumScrollBegin={() => (control.column = true)}
        onMomentumScrollEnd={() => (control.column = false)}
        onScroll={a =>
          control.column && gridBody.current.scrollToOffset({ offset: a.nativeEvent.contentOffset.y, animated: false })
        }
        bounces={false}
        style={{ position: "absolute", left: 0, height: "100%" }}
        initialNumToRender={25}
        stickyHeaderIndices={[0]}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item: row, index: rowIndex }) => {
          return (
            <View key={row.id} style={{ flexDirection: "row" }}>
              <Cell key={row.data[0].id} value={row.data[0].value} style={{ backgroundColor: "tomato" }} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default ScrollingGrid;
