import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';

type ProfilScreenScreenNavigationProps = NativeStackNavigationProp<RootStackParamList, 'ProfilScreen'>;

const ProfilScreen = () => {
    const navigation = useNavigation<ProfilScreenScreenNavigationProps>();
    return (
        <View style={styles.container}>
           <View style={{backgroundColor:"red",height:30,width:"100%",top:0}}>
            <Text>asf</Text>
           </View>
           <View style={{backgroundColor:"blue",height:300,width:"100%",top:70}}>
           <Text>asf</Text>
           </View>
           <View style={{backgroundColor:"orange",height:130,width:"100%",top:120}}>
           <Text>asf</Text>
           </View>
           <View style={{backgroundColor:"black",height:40,width:"100%",top:160}}>
           <Text>asf</Text>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    }
})

export default ProfilScreen;