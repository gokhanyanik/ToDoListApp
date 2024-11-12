import React from "react";
import {View,Text,Button, StyleSheet} from 'react-native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types";
//signIn için tip tanımlaması...
type SignInScreenNavigationProps= NativeStackNavigationProp<RootStackParamList,'SignIn'>;

const SignIn=()=>{
    const navigation=useNavigation<SignInScreenNavigationProps>();

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Sign In Screen</Text>
            <Button title="Go to Sign Up" onPress={()=>navigation.navigate('SignUp')}/>
            <Button title="Go to HomeScreen" onPress={()=>navigation.navigate('HomeScreen')}/>

        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
})
export default SignIn;