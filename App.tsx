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
import Toast from "react-native-toast-message";
import { Screens } from './types';



const Stack = createNativeStackNavigator()
function App(): React.JSX.Element {

  
  useEffect(() => {
    createUserTable(); // Kullanıcı tablosunu oluştur
    createTodoTable();  // 
  }, []);
  
  return (
    <Provider store={store}>
      <NavigationContainer >
        <Stack.Navigator initialRouteName={Screens.SignUp}>
          <Stack.Screen name={Screens.SignIn} component={SignIn} />
          <Stack.Screen name={Screens.SignUp} component={SignUp} />
          <Stack.Screen name={Screens.Home} component={HomeScreen} />
          <Stack.Screen name={Screens.Add} component={AddTodo} />
          <Stack.Screen name={Screens.Details} component={DetailTodo} />
          <Stack.Screen name={Screens.Edit} component={EditTodo} />
          <Stack.Screen name={Screens.Profile} component={ProfilScreen} />
          <Stack.Screen name={Screens.Forgot} component={ForgotPassword} />
        </Stack.Navigator>
        <Toast/>
      </NavigationContainer>
    </Provider>

  );
}
export default App;
