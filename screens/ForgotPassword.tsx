import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';

type ForgotPasswordScreenNavigationProps = NativeStackNavigationProp<RootStackParamList, 'ForgotPassword'>;

const ForgotPassword = () => {
    const navigation = useNavigation<ForgotPasswordScreenNavigationProps>()
    return (
        <View style={styles.container}>
            <Text style={styles.title}>ForgotPassword</Text>
            <Button title="Go to HomeScreen" onPress={() => navigation.navigate('HomeScreen')} />
            <Button title="Go to ProfilScreen" onPress={() => navigation.navigate('ProfilScreen')} />
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


export default ForgotPassword;