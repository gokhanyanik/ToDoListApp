import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList, Todo } from './types';
import { StyleSheet } from 'react-native';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import HomeScreen from './screens/HomeScreen';
import AddTodo from './screens/AddTodo';
import DetailTodo from './screens/DetailTodo';
import EditTodo from './screens/EditTodo';
import ProfilScreen from './screens/ProfilScreen';
import ForgotPassword from './screens/ForgotPassword';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {

  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='SignIn'>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="HomeScreen" >
        {(props) => <HomeScreen {...props} todos={todos} setTodos={setTodos} />}
        </Stack.Screen>
        <Stack.Screen name="AddTodo">
          {(props) => <AddTodo {...props} todos={todos} setTodos={setTodos} />}
        </Stack.Screen>
        <Stack.Screen name="DetailTodo" >
        {(props) => <DetailTodo {...props} todos={todos} setTodos={setTodos} />}
        </Stack.Screen>
        <Stack.Screen name="EditTodo" >
        {(props) => <EditTodo {...props} todos={todos} setTodos={setTodos} />}
        </Stack.Screen>
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
