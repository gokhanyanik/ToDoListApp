import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RootStackParamList } from "../types";

type NavigationProp=NativeStackNavigationProp<RootStackParamList,'ForgotPassword'>
const ForgotPassword = () => {
    const navigation = useNavigation<NavigationProp>();
   const [password,setPassword]=useState('');
   const [isPasswordVisible,setIsPasswordVisible]=useState(false);
   const [confirmPassword,setConfirmPassword]=useState('')
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };
    return (
        <View style={styles.main}>
            <View style={styles.todolistImageView}>
                <Image
                    source={require('../assets/images/todolistSignIn.png')}
                    style={styles.image}
                />
            </View>
            <View style={styles.container}>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputPassword}
                        placeholder="Password"
                        secureTextEntry={!isPasswordVisible}
                        value={password}
                        onChangeText={(e)=>setPassword(e)}
                    />
                    <TouchableOpacity style={styles.icon} onPress={togglePasswordVisibility}>
                        <Icon
                            name={isPasswordVisible ? "eye-off" : "eye"} // Şifre görünürlüğüne göre simge değişir
                            size={24}
                            color="gray"
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputPassword}
                        placeholder="Comfirm Password"
                        secureTextEntry={!isPasswordVisible}
                        value={confirmPassword}
                        onChangeText={(Text) => setConfirmPassword(Text)}
                    />
                    <TouchableOpacity style={styles.icon} onPress={togglePasswordVisibility}>
                        <Icon
                            name={isPasswordVisible ? "eye-off" : "eye"} // Şifre görünürlüğüne göre simge değişir
                            size={24}
                            color="gray"
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.clickText}>CHANGE PASSWORD</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: "contain"
    },
    todolistImageView: {
        justifyContent: "flex-start",
        alignItems: "center",
        margin: 50
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputView: {
        width: 370,
        height: 50,
        borderColor: '#ccc',
        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 15,
        margin: 8
    },
    input: {
        width: 370,
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 15,
    },
    inputPassword: {
        width: 350,
        height: 50,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 15,
    },
    touchable: {
        width: 370,
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 15,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        backgroundColor: "#FF8A80",
        margin: 15,
    },
    icon: {
        margin: 5
    },
    clickText: {
        color: "white"
    },
})


export default ForgotPassword;