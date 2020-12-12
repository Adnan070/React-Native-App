import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class Child extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World</Text>
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
