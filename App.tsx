import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


function App(): React.JSX.Element {
  console.log("hello")
  console.log("yeni deneme")
  return (
    <View style={{flex:1,backgroundColor:"orange",justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontSize:35,fontWeight:"bold"}}>
        hello
      </Text>
      
    </View>
 
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
