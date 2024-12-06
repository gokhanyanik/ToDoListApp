import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import HomeScreen from './screens/HomeScreen';
import { RootStackParamList } from './types';
import { StyleSheet } from 'react-native';
import AddTodo from './screens/AddTodo';
import DetailTodo from './screens/DetailTodo';
import EditTodo from './screens/EditTodo';
import ProfilScreen from './screens/ProfilScreen';
import ForgotPassword from './screens/ForgotPassword';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AddTodo" component={AddTodo} />
        <Stack.Screen name="DetailTodo" component={DetailTodo} />
        <Stack.Screen name="EditTodo" component={EditTodo} />
        <Stack.Screen name="ProfilScreen" component={ProfilScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1
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
