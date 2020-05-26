import React, { Component } from "react";
import { View, Text, StyleSheet, Linking } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

class Contact extends Component {
  state = {
    url: "https://www.mppolice.gov.in/en",
    git: "https://github.com/Akshit1311/SOS_APP",
  };

  gitRepo = () => {
    Linking.openURL(this.state.git);
  };

  mpPolWeb = () => {
    Linking.openURL(this.state.url);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Contact MP Police</Text>
        <TouchableOpacity onPress={this.mpPolWeb}>
          <Text>{this.state.url}</Text>
        </TouchableOpacity>

        <Text style={styles.headerText}>GitHub Project</Text>
        <TouchableOpacity onPress={this.gitRepo}>
          <Text>{this.state.git}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    alignItems: "center",
  },

  headerText: {
    fontSize: 40,
    marginHorizontal: 20,
    marginVertical: 40,
    textAlign: "center",
  },
});
