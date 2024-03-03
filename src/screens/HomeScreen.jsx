import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { GlobalContext } from "../context/Global";
import { Button } from "@rneui/themed";
import Cards from "../components/Cards";
import SearchBar from "../components/SearchBar";
import usePagination from "../hooks/usePagination";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { breweries } = useContext(GlobalContext);
  const [filteredBreweries, setFilteredBreweries] = useState(breweries);

  const {
    currentPage,
    currentPageList,
    totalPages,
    currentList,
    setCurrentList,
    handleClickPrev,
    handleClickNext,
  } = usePagination(filteredBreweries);

  const handleSearch = (value) => {
    if (!value.trim()) {
      setFilteredBreweries(breweries);
      return;
    }

    const lowercaseFilter = value.toLowerCase();
    const filtered = breweries.filter(
      (brewery) =>
        brewery.name.toLowerCase().includes(lowercaseFilter) ||
        brewery.city.toLowerCase().includes(lowercaseFilter) ||
        brewery.state.toLowerCase().includes(lowercaseFilter) ||
        brewery.country.toLowerCase().includes(lowercaseFilter)
    );

    setFilteredBreweries(filtered);
  };

  useEffect(() => {
    setCurrentList(filteredBreweries);
  }, [filteredBreweries]);

  useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View>
        <SearchBar onSearch={handleSearch} />
      </View>
      <View style={styles.cardsContainer}>
        <Cards breweries={currentPageList} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          color={"#0D0D0D"}
          titleStyle={{ color: "#F4F4F4" }}
          onPress={handleClickPrev}
          radius={"md"}
        >
          <ArrowLeftIcon color={"#edc453"} /> Prev
        </Button>
        <Text style={styles.pageText}>
          {currentPage}/{totalPages}
        </Text>
        <Button
          color={"#0D0D0D"}
          titleStyle={{ color: "#F4F4F4" }}
          onPress={handleClickNext}
          radius={"md"}
        >
          Next <ArrowRightIcon color={"#edc453"} />
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 2,
    backgroundColor: "#F4F4F4",
  },
  cardsContainer: {
    flex: 6,
  },
  buttonContainer: {
    flex: 0.5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  pageText: {
    fontSize: 22,
  },
});

export default HomeScreen;
