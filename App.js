import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Comp from "./Comp";
import Child from "./Child";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Comp />
        <Child />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 55,
    fontWeight: "700",
  },
  button: {
    backgroundColor: "#453",
    height: 50,
    width: 150,
    borderRadius: 30,
  },
});
