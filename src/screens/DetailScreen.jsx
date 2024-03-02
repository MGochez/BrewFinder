import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

const DetailScreen = ({ route }) => {
  const { brewery } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>{brewery.name}</Text>
        
      </View>
      <Text style={styles.info}>Type: {brewery.brewery_type}</Text>
      <Text style={styles.info}>Address: {brewery.address_1}</Text>
      <Text style={styles.info}>City: {brewery.city}</Text>
      <Text style={styles.info}>State/Province: {brewery.state_province}</Text>
      <Text style={styles.info}>Postal Code: {brewery.postal_code}</Text>
      <Text style={styles.info}>Country: {brewery.country}</Text>
      <Text style={styles.info}>Phone: {brewery.phone}</Text>
      <Text style={styles.info}>Website: {brewery.website_url}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  info: {
    fontSize: 17,
    marginBottom: 9,
  },
});

export default DetailScreen;
