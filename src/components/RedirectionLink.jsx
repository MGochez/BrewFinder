import React from "react";
import { Text, StyleSheet, View } from "react-native";

const RedirectionLink = ({ onPress, label, content, Icon }) => {
  return (
    <View style={styles.container}>
      <Icon color={"#0D0D0D"} size={19} style={{ marginRight: 2 }} />
      <Text style={styles.info}>{label}: </Text>
      <Text
        onPress={onPress}
        style={{ color: "#3153eb", marginLeft: 2, fontSize: 19 }}
      >
        {content}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  info: {
    fontSize: 19,
    padding: 3,
  },
  container: {
    display: "flex",
    justifyContent: "start",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default RedirectionLink;
