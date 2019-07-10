import React, { useRef } from "react";
import { View, ScrollView, FlatList, PanResponder } from "react-native";

import Cell from "./Cell";
import { cachedGridData } from "./gridUtils";

const createPanResponder = (onScroll, onScrollEnd) =>
  PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onStartShouldSetPanResponderCapture: () => true,
    onMoveShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderGrant: () => {},
    onPanResponderMove: (_, gestureState) => onScroll(gestureState),
    onPanResponderRelease: (_, gestureState) => onScrollEnd(gestureState)
  });

const FixedHeader = ({ row }) => (
  <View key={row.id} style={{ flexDirection: "row", position: "absolute", top: 0, left: 0 }}>
    <Cell key={"blank"} value={""} style={{ backgroundColor: "tomato" }} />
    {row.data.map(({ id: cellId, value }, index) => {
      if (index === 0) {
        return null;
      }
      return <Cell key={cellId} value={value} style={{ backgroundColor: "tomato" }} />;
    })}
  </View>
);

const ScrollingGrid = ({ data = cachedGridData }) => {
  const gridX = useRef();
  const gridY = useRef();
  const fixedColumn = useRef();
  const scrollOffsets = useRef({ x: 0, y: 0 }).current;

  const onUserScroll = ({ dx, dy }) => {
    gridX.current.scrollTo({ x: scrollOffsets.x - dx, animated: false });
    gridY.current.scrollToOffset({ offset: scrollOffsets.y - dy, animated: false });
    fixedColumn.current.scrollToOffset({ offset: scrollOffsets.y - dy, animated: false });
  };

  const onScrollEnd = ({ dx, dy }) => {
    scrollOffsets.x = scrollOffsets.x - dx;
    scrollOffsets.y = scrollOffsets.y - dy;
  };

  const panResponder = createPanResponder(onUserScroll, onScrollEnd);

  return (
    <View style={{ flex: 1 }} {...panResponder.panHandlers}>
      <ScrollView
        ref={gridX}
        scrollEnabled={false}
        style={{ height: "100%" }}
        horizontal
        contentContainerStyle={{ flexDirection: "column", paddingLeft: 100 }}
      >
        <FlatList
          ref={gridY}
          bounces={false}
          scrollEnabled={false}
          initialNumToRender={25}
          stickyHeaderIndices={[0]}
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item: row, index: rowIndex }) => {
            if (rowIndex === 0) {
              return <View style={{ height: 30, opacity: 0 }} />;
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
        <FixedHeader row={data[0]} />
      </ScrollView>
      <FlatList
        ref={fixedColumn}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
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
