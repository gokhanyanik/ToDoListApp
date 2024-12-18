import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList, Todo } from './types';
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
        <Stack.Screen name="SignIn" >
          {(props) => < SignIn {...props} todos={todos} setTodos={setTodos} />}
        </Stack.Screen>
        <Stack.Screen name="SignUp" >
          {(props) => < SignUp {...props} todos={todos} setTodos={setTodos} />}
        </Stack.Screen>
        <Stack.Screen name="HomeScreen" >
          {(props) => <HomeScreen todoId={0} {...props} todos={todos} setTodos={setTodos} />}
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
        <Stack.Screen name="ProfilScreen" >
          {(props) => <ProfilScreen {...props} todos={todos} setTodos={setTodos} />}
        </Stack.Screen>
        <Stack.Screen name="ForgotPassword" >
          {(props) => <ForgotPassword {...props} todos={todos} setTodos={setTodos} />}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>

  );
}
export default App;
