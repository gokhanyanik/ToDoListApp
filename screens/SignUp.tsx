import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types";

type SignUpScreenNavigationProps = NativeStackNavigationProp<RootStackParamList, 'SignUp'>;

const SignUp = () => {
    const navigation = useNavigation<SignUpScreenNavigationProps>();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up Screen</Text>
            <Button title="Go to Sign In" onPress={() => navigation.navigate('SignIn')} />
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
    },
})
export default SignUp;