import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input } from '@rneui/themed';
import { debounce } from 'lodash';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (value) => {
    onSearch(value); 
  }

  return (
    <View style={styles.container}>
      <Input
        RightIcon={{ type: 'feather', name: 'search', color: '#0d0d0d' }}
        placeholder='Brewery, city, state, country'
        value={searchTerm}
        onChangeText={(value) => {
          setSearchTerm(value);
          handleSearch(value);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchBar;
