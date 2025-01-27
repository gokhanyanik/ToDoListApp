import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RootStackParamList } from "../types";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { setFullName, setEmail, setPassword } from "../redux/todoSlice";
import { addUser } from "../database/database";
import Toast from "react-native-toast-message";



type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'SignUp'>

const SignUp = () => {
    const navigation = useNavigation<NavigationProp>();
    const { fullName, email, password } = useSelector((state: RootState) => state.todo)
    const dispatch = useDispatch()
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const handleSignup = async () => {
        try {
            await addUser(email, password); // Kullanıcıyı veritabanına ekle
            Toast.show({
                type: "success",
                text1: "kayit basarili..."
            })
            dispatch(setEmail(''))  // Kayıt tamamlandıktan sonra setEmaili ve setPasswordu temizliyoruz.
            dispatch(setPassword(''))
            navigation.replace("SignIn"); // Giriş ekranına yönlendir
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            Toast.show({
                type: "error",
                text1: "kayit sirasında hata olustu...",
                text2: `Kullanıcı adi ya da sifre hatali...${error}`
            })
        }
    };
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"} // iOS için padding
        >
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
                onFocus={() => setIsKeyboardVisible(true)} // Klavye açıldığında
                onBlur={() => setIsKeyboardVisible(false)} // Klavye kapandığında
            >
                <View style={styles.main} >


                    <View style={[styles.todolistViewImage, isKeyboardVisible && { height: 0 },]}>
                        <Image
                            // eslint-disable-next-line @typescript-eslint/no-require-imports
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
                            onChangeText={(email) => dispatch(setEmail(email))}
                            onFocus={() => setIsKeyboardVisible(true)} // Klavye açıldığında
                            onBlur={() => setIsKeyboardVisible(false)} // Klavye kapandığında
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Full Name"
                            value={fullName}
                            onChangeText={(fullName) => dispatch(setFullName(fullName))}
                            onFocus={() => setIsKeyboardVisible(true)} // Klavye açıldığında
                            onBlur={() => setIsKeyboardVisible(false)} // Klavye kapandığında
                        />
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.inputPassword}
                                placeholder="Password"
                                secureTextEntry={!isPasswordVisible}
                                value={password?.toString()}
                                onChangeText={(password) => dispatch(setPassword(password))}
                                onFocus={() => setIsKeyboardVisible(true)} // Klavye açıldığında
                                onBlur={() => setIsKeyboardVisible(false)} // Klavye kapandığında
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
                                onChangeText={(text) => setConfirmPassword(text)}
                                onFocus={() => setIsKeyboardVisible(true)} // Klavye açıldığında
                                onBlur={() => setIsKeyboardVisible(false)} // Klavye kapandığında
                            />
                            <TouchableOpacity style={styles.icon} onPress={togglePasswordVisibility}>
                                <Icon
                                    name={isPasswordVisible ? "eye-off" : "eye"} // Şifre görünürlüğüne göre simge değişir
                                    size={24}
                                    color="gray"
                                />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.touchable} onPress={handleSignup}>
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
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
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
        margin: 50,
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