import React, { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Cards from '../components/Cards';
import SearchBar from '../components/SearchBar';
import { GlobalContext } from '../context/Global';
import { Button } from '@rneui/themed';

const HomeScreen = () => {
  const { breweries } = useContext(GlobalContext);
  const [filteredBreweries, setFilteredBreweries] = useState(breweries);

  const handleSearch = (value) => {
    if (!value.trim()) {
      setFilteredBreweries(breweries);
      return;
    }

    const lowercaseFilter = value.toLowerCase();
    const filtered = breweries.filter(brewery =>
      brewery.name.toLowerCase().includes(lowercaseFilter) ||
      brewery.city.toLowerCase().includes(lowercaseFilter) ||
      brewery.state.toLowerCase().includes(lowercaseFilter) ||
      brewery.country.toLowerCase().includes(lowercaseFilter)
    );

    setFilteredBreweries(filtered);
  };

  return (
    <View style={styles.container}>
      <View>
        <Button color={'#e45290'}style={styles.favButton}>My Favorites</Button>
        <SearchBar onSearch={handleSearch} />
      </View>
      <View style={styles.cardsContainer}>
        <Cards breweries={filteredBreweries} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
  },
  cardsContainer: {
    flex: 1,
  }
});

export default HomeScreen;
