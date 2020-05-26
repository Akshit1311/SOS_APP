import React, { Component } from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import { Input } from "react-native-elements";
import AsyncStorage from "@react-native-community/async-storage";

class Numbers extends Component {
  state = {
    phoneNumber1: "",
    phoneNumber2: "",
    phoneNumber3: "",
  };

  constructor(props) {
    super(props);
    this.getData();
  }

  onSubmit = async () => {
    alert("Numbers Updated!");
    try {
      //   this.setState({ phoneNumber1: value });
      await AsyncStorage.setItem("phoneNumber1", this.state.phoneNumber1);
      await AsyncStorage.setItem("phoneNumber2", this.state.phoneNumber2);
      await AsyncStorage.setItem("phoneNumber3", this.state.phoneNumber3);
    } catch (err) {
      console.log(err);
    }
  };

  getData = async () => {
    try {
      const value1 = await AsyncStorage.getItem("phoneNumber1");
      const value2 = await AsyncStorage.getItem("phoneNumber2");
      const value3 = await AsyncStorage.getItem("phoneNumber3");

      if (value1 !== null) {
        this.setState({
          phoneNumber1: value1,
          phoneNumber2: value2,
          phoneNumber3: value3,
        });
      }
    } catch (e) {
      // error reading value
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Quick Dial Phone Numbers</Text>

        <Input
          value={this.state.phoneNumber1}
          onChangeText={(val) => this.setState({ phoneNumber1: val })}
          style={styles.phoneNumInput}
          placeholder="Phone Number 1 "
        />

        <Input
          value={this.state.phoneNumber2}
          onChangeText={(val) => this.setState({ phoneNumber2: val })}
          style={styles.phoneNumInput}
          placeholder="Phone Number 2 "
        />

        <Input
          value={this.state.phoneNumber3}
          onChangeText={(val) => this.setState({ phoneNumber3: val })}
          style={styles.phoneNumInput}
          placeholder="Phone Number 3 "
        />

        <Button title="Submit" onPress={this.onSubmit} />
      </View>
    );
  }
}

export default Numbers;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
  },

  phoneNumInput: {
    width: "100%",
    flex: 1,
    alignSelf: "flex-end",
  },

  heading: {
    fontSize: 30,
    textAlign: "center",
    marginVertical: 20,
  },
});
