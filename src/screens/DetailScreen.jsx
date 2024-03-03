import { useContext } from "react";
import {
  ScrollView,
  Text,
  StyleSheet,
  View,
  Image,
  Linking,
} from "react-native";
import { Button } from "@rneui/base";
import { GlobalContext } from "../context/Global";
import {
  HeartIcon,
  Earth,
  Phone,
  Globe,
  MapPin,
  Building2,
  Mail,
  Hop,
} from "lucide-react-native";
import MapView, { Marker } from "react-native-maps";
import NoLocationAvailable from "../assets/images/NoLocationAvailable.png";
import RedirectionLink from "../components/RedirectionLink";
import GPSLink from "../components/GPSLink";
import InfoDetail from "../components/InfoDetails";

const DetailScreen = ({ route }) => {
  const { brewery } = route.params;
  const { isFavorite, addFavorite, removeFavorite } = useContext(GlobalContext);

  const handleFavorite = () => {
    isFavorite(brewery) ? removeFavorite(brewery) : addFavorite(brewery);
  };

  const handlePhonePress = () => {
    Linking.openURL(`tel:${brewery.phone}`);
  };

  const handleUrlPress = () => {
    Linking.openURL(brewery.website_url);
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
              title='Location'
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
      <View style={styles.buttonAndTitle}>
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
        <InfoDetail label={"Type"} content={brewery.brewery_type} Icon={Hop} />
        <InfoDetail
          label={"Adress"}
          content={brewery.address_1}
          Icon={MapPin}
        />
        <InfoDetail
          label={"City"}
          content={`${brewery.city}, ${brewery.state}`}
          Icon={Building2}
        />
        <InfoDetail label={"Country"} content={brewery.country} Icon={Earth} />
        <InfoDetail
          label={"Postal Code"}
          content={brewery.postal_code}
          Icon={Mail}
        />
        <RedirectionLink
          label={"Phone"}
          content={brewery.phone}
          Icon={Phone}
          onPress={handlePhonePress}
        />
        <RedirectionLink
          label={"Website"}
          content={brewery.website_url}
          Icon={Globe}
          onPress={handleUrlPress}
        />
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
    fontSize: 18,
    padding: 3,
  },
  buttonStyle: {
    color: "#F4F4F4",
    fontSize: 20,
    padding: 5,
    height: 30,
  },
  buttonAndTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    alignItems: "center",
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
    flexDirection: "column",
    justifyContent: "center",
  },
});

export default DetailScreen;
