import React, { useState } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import { Text, Overlay } from "react-native-elements";
// const NavMenu = () => {
//   return <Text>Hyyy</Text>;
// };

const NavMenu = () => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.container}>
      {/* <Text onPress ></Text> */}

      <View style={styles.navBar}>
        <TouchableNativeFeedback onPress={toggleOverlay}>
          <Image
            onPress={toggleOverlay}
            source={require("../assets/icons/hamburger.png")}
            style={styles.hamburgerIcon}
          />
        </TouchableNativeFeedback>

        <Text style={styles.appName}>MP Police</Text>
      </View>

      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        animated
        fullScreen={true}
      >
        <View style={styles.container2}>
          <TouchableNativeFeedback onPress={toggleOverlay}>
            <Image
              onPress={toggleOverlay}
              source={require("../assets/icons/cross.png")}
              style={styles.crossIcon}
            />
          </TouchableNativeFeedback>
          <View style={styles.navMenu}>
            <TouchableOpacity>
              <Text style={styles.navBtn}>HOME</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.navBtn}>REPORT</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.navBtn}>CONTACT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Overlay>
    </View>
  );
};

export default NavMenu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // paddingTop: StatusBar.currentHeight,
    flexDirection: "row",
  },

  container2: {
    flex: 1,
  },
  appName: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
  },

  hamburgerIcon: {
    height: 30,
    width: 20,
    marginLeft: 20,
    left: 0,
    position: "absolute",
    alignSelf: "center",
  },

  navMenu: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  navBtn: {
    alignSelf: "center",
    fontSize: 30,
    marginVertical: 30,
    paddingHorizontal: 10,
    borderBottomColor: "#000",
    borderBottomWidth: 3,
    borderLeftColor: "#000",
    borderLeftWidth: 3,
  },

  navBar: {
    backgroundColor: "#f8f8ff",
    flex: 1,
    flexDirection: "row",
    padding: 10,
    justifyContent: "center",
  },

  crossIcon: {
    height: 30,
    width: 20,
    marginLeft: 20,
    marginTop: 20,
    position: "absolute",
  },
});
