import React, { useContext } from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Heart } from "lucide-react-native";
import { GlobalContext } from "../context/Global";

const BreweryCard = ({ brewery }) => {
  const navigation = useNavigation();
  const { addFavorite, removeFavorite, isFavorite } = useContext(GlobalContext);

  const handleFavorite = () => {
    isFavorite(brewery) ? removeFavorite(brewery) : addFavorite(brewery);
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => navigation.navigate("DetailScreen", { brewery })}
      >
        <View width={"85%"}>
          <Text style={styles.name}>{brewery.name}</Text>
          <Text style={styles.cityState}>
            {brewery.city}, {brewery.state}
          </Text>
        </View>
        <TouchableOpacity onPress={() => handleFavorite()}>
          <Heart
            size={28}
            color={"#fa4577"}
            fill={isFavorite(brewery) ? "#fa4577" : "#00000000"}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cityState: {
    fontSize: 16,
  },
  touchableOpacity: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default BreweryCard;
