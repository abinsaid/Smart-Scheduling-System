import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyles}>Hello Dr Ryan!</Text>
      <Text style={styles.textStyles}>Welcome to CPIT-499</Text>
      <Text style={styles.textStyles}>This is after using github</Text>
      <StatusBar style="auto" />
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
