import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import listScreens from './Screens/listScreens';
import ComponentsScreen from './Screens/ComponentsScreen';
import CreateStackNavigator from 'react-navigation/native'

export default function App() { 
 

  return (
    <View style={styles.container}>
      <Text style={styles.textStyles}>Hello Dr Ryan!</Text>
      <Text style={styles.textStyles}>Welcome to CPIT-499</Text>
      <Text style={styles.textStyles}>This is after using github</Text>
      <StatusBar style="auto" />
    {/* <Button  onPress={}
      title='press for a gift'
    /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a2d2ff',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  textStyles:{
   fontSize: 50,
   fontFamily:'Ariel'
   

  },
});
