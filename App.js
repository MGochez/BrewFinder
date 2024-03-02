import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import GlobalProvider from './src/context/Global';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: ''
  },
});

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style='auto'/>
        <GlobalProvider>
          <StackNavigator/>
        </GlobalProvider>
    </NavigationContainer>
  );
}


export default App