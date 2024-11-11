import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import { RootStackParamList } from './types';
import { StyleSheet } from 'react-native';

const Stack= createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
 
  return (
    <NavigationContainer >
      <Stack.Navigator  initialRouteName='SignIn'>
        <Stack.Screen name="SignUp" component={SignUp} options={{title:"HAKKIMIZDA"}} />
        <Stack.Screen name="SignIn" component={SignIn} options={{title:"HOME"}}/>
      </Stack.Navigator>
    </NavigationContainer>
 
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex:1
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
