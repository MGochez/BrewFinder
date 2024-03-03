import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input } from "@rneui/themed";
import useDebouncedValue from "../hooks/useDebounce";

const SearchBar = ({ onSearch }) => {
  const [text, setText] = useState("");
  const debouncedText = useDebouncedValue(text, 100);

  useEffect(() => {
    onSearch(text.trim());
  }, [debouncedText]);

  return (
    <View style={styles.container}>
      <Input
        RightIcon={{ type: "feather", name: "search", color: "#0d0d0d" }}
        placeholder='Brewery, city, state, country'
        value={text}
        onChangeText={setText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SearchBar;
