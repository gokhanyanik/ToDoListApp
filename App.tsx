import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import HomeScreen from './screens/HomeScreen';
import AddTodo from './screens/AddTodo';
import DetailTodo from './screens/DetailTodo';
import EditTodo from './screens/EditTodo';
import ProfilScreen from './screens/ProfilScreen';
import ForgotPassword from './screens/ForgotPassword';
import { createUserTable ,createTodoTable} from './database/database';



const Stack = createNativeStackNavigator()
function App(): React.JSX.Element {

  
  useEffect(() => {
    createUserTable(); // Kullanıcı tablosunu oluştur
    createTodoTable();  // 
  }, []);
  
  return (
    <Provider store={store}>
      <NavigationContainer >
        <Stack.Navigator initialRouteName='SignUp'>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="AddTodo" component={AddTodo} />
          <Stack.Screen name="DetailTodo" component={DetailTodo} />
          <Stack.Screen name="EditTodo" component={EditTodo} />
          <Stack.Screen name="ProfilScreen" component={ProfilScreen} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}
export default App;
