import React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "react-native";
import BrewLogo from "../../assets/images/BrewLogo.png";

const LogoIconMini = () => {
  return <Image style={styles.iconMini} source={BrewLogo} />;
};

const styles = StyleSheet.create({
  iconMini: {
    height: "20px",
    width: "20px",
  },
});

export default LogoIconMini;
