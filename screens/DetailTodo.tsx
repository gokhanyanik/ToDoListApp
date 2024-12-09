import React, { useState } from "react";
import { View, Text, StyleSheet, Button ,Image, TouchableOpacity} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';

type DetailTodoScreenNavigationProps = NativeStackNavigationProp<RootStackParamList, "DetailTodo">;

const DetailTodo = ( ) => {
    const navigation = useNavigation<DetailTodoScreenNavigationProps>()
    

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <TouchableOpacity 
                style={{ backgroundColor: "#FFFFFF", width:30 ,justifyContent:"center"}}
                onPress={()=>navigation.navigate('HomeScreen')}
                >
                    <Image
                    source={require('../assets/images/solok.png')}
                    style={{margin:20}}
                    
                    />
                </TouchableOpacity>
                <View style={{ backgroundColor: "#FFFFFF", width: 360, }}>
                    <TouchableOpacity 
                    style={{ backgroundColor: "#FFFFFF", width:360,height:50, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}
                    onPress={()=>navigation.navigate('EditTodo')}
                    >
                    <Image
                    source={require('../assets/images/saat.png')}
                    style={{margin:5,height:24,width:24}}
                    />
                     <Image
                    source={require('../assets/images/düzenle.png')}
                    style={{margin:5,height:24,width:24}}
                    />
                     <Image
                    source={require('../assets/images/copkutusu.png')}
                    style={{margin:5,height:24,width:24}}
                    />
                    </TouchableOpacity>
                </View>

            </View>
            <View style={{ backgroundColor: "#FFFFFF", height: 100, justifyContent: "center", }}>
                <Text style={{ margin: 20 }}>TİTLETODO</Text>
            </View>
            <View style={{ backgroundColor: "#FFFFFF", flex: 1, justifyContent: "flex-start", }}>
                <Text style={{ margin: 20 }}>TODO LİST AÇIKLAMASI</Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#f0f0f0',
        height: 50,
        flexDirection: "row"
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    }
})

export default DetailTodo;