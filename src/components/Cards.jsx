import React from "react";
import { FlatList, View } from "react-native";
import BreweryCard from "./Card";

const Cards = ({ breweries }) => {
  const renderItem = ({ item }) => <BreweryCard brewery={item} />;

  return (
    <View>
      <FlatList
        data={breweries}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Cards;
