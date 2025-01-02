import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList, Todo } from "../types";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { setEmail, setPassword, setFulName, setComfirmPassword, setIsPasswordVisible,setTodos } from "../redux/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

const SignUp= () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const { email, password, fulName, comfirmPassword, isPasswordVisible ,todos} = useSelector((state: RootState) => state.todo)
    const dispatch = useDispatch()

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };
    return (
        <View style={styles.main}>
            <View style={styles.todolistViewImage}>
                <Image
                    source={require('../assets/images/todolistSignIn.png')}
                    style={styles.image}
                />
            </View>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={(text) => dispatch(setEmail(text))}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Full Name"
                    value={fulName}
                    onChangeText={(text) => dispatch(setFulName(text))}
                />
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputPassword}
                        placeholder="Password"
                        secureTextEntry={!isPasswordVisible}
                        value={String(password)}
                        onChangeText={(password) => dispatch(setPassword(password))}
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
                        value={comfirmPassword}
                        onChangeText={(text) => dispatch(setComfirmPassword(text))}
                    />
                    <TouchableOpacity style={styles.icon} onPress={togglePasswordVisibility}>
                        <Icon
                            name={isPasswordVisible ? "eye-off" : "eye"} // Şifre görünürlüğüne göre simge değişir
                            size={24}
                            color="gray"
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate('SignIn', { todos, setTodos })}>
                    <Text style={styles.textSignUp}>SIGN UP</Text>
                </TouchableOpacity>
                <View style={styles.questionView}>
                    <Text>Have an account? </Text>
                    <TouchableOpacity style={styles.loginTouchable} onPress={() => navigation.navigate('SignIn', { todos, setTodos })}>
                        <Text style={styles.loginText}>LOG IN</Text>
                    </TouchableOpacity>
                </View>
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
    todolistViewImage: {
        justifyContent: "flex-start",
        alignItems: "center",
        margin: 50
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: "contain"
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
    textSignUp: {
        color: "white"
    },
    questionView: {
        flexDirection: "row",
        justifyContent: "center"
    },
    loginTouchable: {
        width: 90,
        height: 50
    },
    loginText: {
        color: "#FF8A80"
    }
})
export default SignUp;