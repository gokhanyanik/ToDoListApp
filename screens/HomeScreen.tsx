import React from "react";
import {View,Text,StyleSheet,Button} from 'react-native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types";


type HomeScreenScreenNavigationProps= NativeStackNavigationProp<RootStackParamList,'HomeScreen'>;

const HomeScreen=()=>{
    const navigation=useNavigation<HomeScreenScreenNavigationProps>();

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
            {/*  <Button title="Go to Sign In" onPress={()=>navigation.navigate('SignIn')}/> */ }
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


export default HomeScreen;