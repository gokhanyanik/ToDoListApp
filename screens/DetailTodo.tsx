import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';

type DetailTodoScreenNavigationProps = NativeStackNavigationProp<RootStackParamList, "DetailTodo">;

const DetailTodo = () => {
    const navigation = useNavigation<DetailTodoScreenNavigationProps>()
    return (
       <View style={{flex:1}}>
         <View style={styles.container}>
            <View style={{ backgroundColor: "red", flex: 1 }}><Text>A</Text></View>
            <View style={{ backgroundColor: "yellow", width: 300, }}>
                <View style={{ backgroundColor: "blue", flex: 1, flexDirection: "row", justifyContent: "flex-end", alignItems: "center" }}>
                    <Text>b</Text>
                    <Text>c</Text>
                    <Text>d</Text>
                </View>
            </View>

        </View>
        <View style={{backgroundColor:"pink",height:100,justifyContent:"center",}}>
                <Text style={{margin:10}}>TİTLE</Text>
        </View>
        <View style={{backgroundColor:"purple",flex:1,justifyContent:"flex-start",}}>
                <Text style={{margin:10}}>TODO LİST AÇIKLAMASI</Text>
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