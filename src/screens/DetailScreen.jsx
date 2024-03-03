import { useContext } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Image,
  Linking,
  Platform,
} from "react-native";
import { Button, color } from "@rneui/base";
import { GlobalContext } from "../context/Global";
import { HeartIcon, MapPin, Globe } from "lucide-react-native";
import MapView, { Marker } from "react-native-maps";
import NoLocationAvailable from "../assets/images/NoLocationAvailable.png";

const DetailScreen = ({ route }) => {
  const { brewery } = route.params;
  const { isFavorite, addFavorite, removeFavorite } = useContext(GlobalContext);

  const handleFavorite = () => {
    isFavorite(brewery) ? removeFavorite(brewery) : addFavorite(brewery);
  };

  const PhoneNumberLink = ({ phone }) => {
    const handlePress = () => {
      Linking.openURL(`tel:${phone}`);
    };
    return (
      <Text style={styles.info} onPress={handlePress}>
        Phone: <Text style={{ color: "#3153eb" }}>{phone}</Text>
      </Text>
    );
  };

  const WebsiteLink = ({ url }) => {
    const handlePress = () => {
      Linking.openURL(url);
    };
    return (
      <Text style={styles.info} onPress={handlePress}>
        Website: <Text style={{ color: "#3153eb" }}>{url}</Text>
      </Text>
    );
  };

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

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {brewery.latitude ? (
        <>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: parseFloat(brewery.latitude),
              longitude: parseFloat(brewery.longitude),
              latitudeDelta: 0.04,
              longitudeDelta: 0.04,
            }}
          >
            <Marker
              title="Location"
              coordinate={{
                latitude: parseFloat(brewery.latitude),
                longitude: parseFloat(brewery.longitude),
              }}
            />
          </MapView>
          <GPSLink latitude={brewery.latitude} longitude={brewery.longitude} />
        </>
      ) : (
        <Image
          source={NoLocationAvailable}
          style={{ width: "100%", height: "55%" }}
        />
      )}

      <View style={styles.titleAndButton}>
        <Text style={styles.title}>{brewery.name}</Text>
        <Button radius={"md"} color={"#e45290"} onPress={handleFavorite}>
          {isFavorite(brewery) ? (
            <HeartIcon fill={"#F4F4F4"} />
          ) : (
            <HeartIcon color={"#F4F4F4"} />
          )}
        </Button>
      </View>
      <View style={styles.line} />
      <View style={{ margin: 10 }}>
        <Text style={styles.info}>Type: {brewery.brewery_type}</Text>
        <Text style={styles.info}>Address: {brewery.address_1}</Text>
        <Text style={styles.info}>City: {brewery.city}</Text>
        <Text style={styles.info}>State: {brewery.state_province}</Text>
        <Text style={styles.info}>Postal Code: {brewery.postal_code}</Text>
        <Text style={styles.info}>Country: {brewery.country}</Text>
        <PhoneNumberLink phone={brewery.phone} />
        <View style={styles.iconText}>
          <Globe size={10} color={"#D0D0D0"} />
          <WebsiteLink url={brewery.website_url} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: "#E7ECF5",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  info: {
    fontSize: 15,
    padding: 4,
  },
  buttonStyle: {
    color: "#F4F4F4",
    fontSize: 20,
    padding: 5,
    height: 30,
  },
  titleAndButton: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    padding: 5,
  },
  map: {
    width: "100%",
    height: "50%",
  },
  line: {
    height: 0.35,
    backgroundColor: "#9197A4",
  },
  iconText: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
  },
});

export default DetailScreen;
