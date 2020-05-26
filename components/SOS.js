import React, { useState, useEffect } from "react";

import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
  Button,
} from "react-native";

// SMS Functionality
import Communications from "react-native-communications";

// Location
import * as Location from "expo-location";

import NavMenu from "./NavMenu";
// import { Linking } from "react-native";

const SOS = () => {
  const phoneNumber = "000";
  const body = "heyy it works!!";

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  });

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/background.jpg")}
        style={styles.community}
      ></ImageBackground>
      <Text style={styles.h1}>MP Police</Text>

      <TouchableOpacity
        // onPress={() => Linking.openURL("tel:${phoneNumber}")}
        // onPress={() => Linking.openURL(`sms:${phoneNumber}${getSMSDivider()}body=${body}`)}
        // onPress={() => Communications.text(phoneNumber, text[0])}
        onPress={() => alert("Your SOS has been Sent!!")}
        // onPress={console.log(text[0])}
        style={styles.sosBtn}
      >
        <Image source={require("../assets/images/sos.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default SOS;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  sosBtn: {
    bottom: "20%",
  },

  community: {
    opacity: 0.5,
    height: "60%",
    width: 600,
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "center",
  },

  h1: {
    fontSize: 60,
    bottom: "50%",
    color: "#fff",
  },
});
