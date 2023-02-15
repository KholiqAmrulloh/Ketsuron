import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Router from './src/Router'

const App = () => {
  return (
    <>    
    <StatusBar  hidden = {false} backgroundColor = "#54B435" translucent = {true}/>
     <NavigationContainer>
     <Router/>
    </NavigationContainer>
    </>
   
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
