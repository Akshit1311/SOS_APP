import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
  TouchableNativeFeedback,
  TouchableOpacity,
  Image,
} from "react-native";

import { Overlay } from "react-native-elements";

//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import NavMenu from "./components/NavMenu";
import Footer from "./components/Footer";
import SOS from "./components/SOS";
import Cards from "./components/Cards";
import Numbers from "./components/Numbers";
import Contact from "./components/Contact";
// import Locate from "./components/Locate";

//Navigation

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require("./assets/images/sos.png")}
    />
  );
}

function HomeScreen({ navigation }) {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* Navbar */}

      <View style={styles.navBar}>
        <TouchableNativeFeedback onPress={toggleOverlay}>
          <Image
            onPress={toggleOverlay}
            source={require("./assets/icons/hamburger.png")}
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
              source={require("./assets/icons/cross.png")}
              style={styles.crossIcon}
            />
          </TouchableNativeFeedback>
          <View style={styles.navMenu}>
            <TouchableOpacity>
              <Text
                style={styles.navBtn}
                onPress={() => {
                  toggleOverlay();
                  // navigation.navigate("Home");
                }}
              >
                HOME
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text
                style={styles.navBtn}
                onPress={() => {
                  toggleOverlay();
                  navigation.navigate("Details");
                }}
              >
                REPORT
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text
                style={styles.navBtn}
                onPress={() => {
                  toggleOverlay();
                  navigation.navigate("Numbers");
                }}
              >
                NUMBERS
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text
                style={styles.navBtn}
                onPress={() => {
                  toggleOverlay();
                  navigation.navigate("Contact");
                }}
              >
                CONTACT
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Overlay>

      {/* <Text>Home Screen</Text> */}
      <SOS />
      {/* <Contact /> */}
      {/* <Numbers /> */}

      {/* <Locate /> */}
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* <Cards /> */}
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push("Details")}
      />
    </View>
  );
}

function NumbersScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Numbers />
    </View>
  );
}

function ContactScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Contact />
    </View>
  );
}

//Navigation
const Stack = createStackNavigator();

//Navigation
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
            headerTitleStyle: {
              alignSelf: "center",
            },
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
            headerTitleStyle: {
              alignSelf: "center",
            },
          }}
        />
        <Stack.Screen
          name="Numbers"
          component={NumbersScreen}
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
            headerTitleStyle: {
              alignSelf: "center",
            },
          }}
        />
        <Stack.Screen
          name="Contact"
          component={ContactScreen}
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
            headerTitleStyle: {
              alignSelf: "center",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// function App() {
//   return (
//     <View style={styles.container}>
//       <NavMenu />
//       <SOS />
//       <Footer />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: StatusBar.currentHeight,
  },

  container2: {
    flex: 1,
  },

  navMenu: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    height: "100%",
  },

  hamburgerIcon: {
    height: 30,
    width: 20,
    marginLeft: 20,
    left: 0,
    position: "absolute",
    alignSelf: "center",
  },

  crossIcon: {
    height: 30,
    width: 20,
    marginLeft: 20,
    marginTop: 20,
    position: "absolute",
  },

  appName: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
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
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    padding: 10,
    justifyContent: "center",
  },
});

export default App;
