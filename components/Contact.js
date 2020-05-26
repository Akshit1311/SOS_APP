import React, { Component } from "react";
import { View, Text, StyleSheet, Linking } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

class Contact extends Component {
  state = {
    url: "https://www.mppolice.gov.in/en",
    git: "",
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
          <Text>https://www.mppolice.gov.in/en</Text>
        </TouchableOpacity>

        <Text style={styles.headerText}>GitHub Project</Text>
        <TouchableOpacity onPress={this.gitRepo}>
          <Text>https://www.mppolice.gov.in/en</Text>
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
