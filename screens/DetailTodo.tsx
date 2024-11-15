import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';

type DetailTodoScreenNavigationProps = NativeStackNavigationProp<RootStackParamList, "DetailTodo">;

const DetailTodo = () => {
    const navigation = useNavigation<DetailTodoScreenNavigationProps>()
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detail Todo</Text>
            <Button title="Go to HomeScreen" onPress={() => navigation.navigate('HomeScreen')} />
        </View>
    )
}

const styles = StyleSheet.create({
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
    }
})

export default DetailTodo;