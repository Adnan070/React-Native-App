import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Form, Button } from "react-native";

export default class Comp extends React.Component {
  state = {
    name: "Sajid",
  };

  handleClick() {
    this.setState({
      name: "Adnan",
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.name === this.state.name) {
      return false;
    }
    return true;
  }

  render() {
    console.log("Form Render State Value: ", this.state.name);
    return (
      <View style={styles.container}>
        <Text style={styles.text}> State Value: {this.state.name} </Text>
        <Button
          style={styles.button}
          onPress={this.handleClick.bind(this)}
          title="Click Me"
        />

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
