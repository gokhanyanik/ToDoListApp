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
            <Text style={styles.title}>Profil Screen</Text>
            <Button title="Go to Home Screen" onPress={() => navigation.navigate('HomeScreen')} />
            <Button title="Go to ForgotPassword" onPress={() => navigation.navigate('ForgotPassword')} />
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

export default ProfilScreen;