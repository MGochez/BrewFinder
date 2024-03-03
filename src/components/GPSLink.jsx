import React from "react";
import { Text, Linking, StyleSheet } from "react-native";
import { Button } from "@rneui/themed";
import { MapPin } from "lucide-react-native";

const GPSLink = ({ latitude, longitude }) => {
  const lat = parseFloat(latitude);
  const long = parseFloat(longitude);

  const handlePress = () => {
    Linking.openURL(`https://maps.google.com/maps?q=${lat},${long}`);
  };
  return (
    <Button onPress={handlePress}>
      <MapPin color={"#F4F4F4"} />
      <Text style={styles.buttonStyle}> Take me there!</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  info: {
    fontSize: 15,
    padding: 4,
  },
  buttonStyle: {
    color: "#F4F4F4",
    fontSize: 20,
    padding: 5,
    height: 35,
  },
});

export default GPSLink;
