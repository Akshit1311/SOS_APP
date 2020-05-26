import React from "react";

import { SocialIcon } from "react-native-elements";
import { View, StyleSheet, TouchableOpacity } from "react-native";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity>
        <SocialIcon style={styles.socIcon} raised type="twitter" />
      </TouchableOpacity>

      <TouchableOpacity>
        <SocialIcon style={styles.socIcon} raised type="facebook" />
      </TouchableOpacity>

      <TouchableOpacity>
        <SocialIcon
          style={styles.socIcon}
          underlayColor="pink"
          raised
          type="instagram"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  socIcon: {
    alignSelf: "center",
  },

  footer: {
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
  },
});
