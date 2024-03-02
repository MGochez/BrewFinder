import { Image, StyleSheet, View } from 'react-native';
import BrewLogo from '../../assets/images/BrewLogo.png';


const LogoIcon = () => {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={BrewLogo}
        />
      </View>
    );
  };


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: 200, 
      height: 200,
      resizeMode: 'contain',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: [{ translateX: -100 }, { translateY: 350 }]
    },
  });


export default LogoIcon