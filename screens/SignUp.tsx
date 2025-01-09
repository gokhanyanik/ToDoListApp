import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RootStackParamList } from "../types";


type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'SignUp'>

const SignUp = () => {
    const navigation = useNavigation<NavigationProp>();

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('')

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
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Full Name"
                    value={fullName}
                    onChangeText={(text) => setFullName(text)}
                />
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputPassword}
                        placeholder="Password"
                        secureTextEntry={!isPasswordVisible}
                        value={String(password)}
                        onChangeText={(password) => setPassword(password)}
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
                        onChangeText={(text) =>setConfirmPassword(text)}
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
                    <Text style={styles.textSignUp}>SIGN UP</Text>
                </TouchableOpacity>
                <View style={styles.questionView}>
                    <Text>Have an account? </Text>
                    <TouchableOpacity style={styles.loginTouchable} onPress={() => navigation.navigate('SignIn')}>
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