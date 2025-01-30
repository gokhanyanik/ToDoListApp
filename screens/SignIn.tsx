import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList ,Screens } from "../types";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { setEmail, setPassword } from "../redux/todoSlice";
import { validateUser } from "../database/database";
import Toast from "react-native-toast-message";
import { Formik } from "formik";
import * as Yup from "yup";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'SignIn'>

const SignIn = () => {
    const navigation = useNavigation<NavigationProp>();
    const { email, password } = useSelector((state: RootState) => state.todo)
    const dispatch = useDispatch()
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Geçerli bir email adresi giriniz")
            .required("Email alanı boş bırakılamaz"),
        password: Yup.string()
            .min(4, "Sifre en az 4 karakter olmalıdır")
            .required("şifre alanı boş bırakılamaz"),
    });

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
                <Formik
                    initialValues={{ email: "", password: "" }}
                    validationSchema={validationSchema}
                    onSubmit={async (values, { resetForm }) => {
                        try {
                            const isValidUser = await validateUser(email, password);
                            if (isValidUser) {
                                navigation.replace(Screens.Home); // HomeScreen'e yönlendir
                            } else {
                                Toast.show({
                                    type: "error",
                                    text1: "Giriş Hatası : E-posta veya şifre yanlış."
                                })
                            }
                        } catch (error) {
                            Toast.show({
                                type: "error",
                                text1: "Giriş sırasında hata olustu..."
                            })
                        }
                        resetForm()
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                        <View style={styles.main}>
                            <View style={[styles.todolistImage, isKeyboardVisible && { height: 0 },]}>
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
                                    value={values.email}
                                    onChangeText={(email) => { handleChange("email")(email); dispatch(setEmail(email)) }}
                                    onFocus={() => setIsKeyboardVisible(true)} // Klavye açıldığında
                                    onBlur={() => { setIsKeyboardVisible(false); handleBlur("email") }} // Klavye kapandığında
                                />
                                {touched.email && errors.email && (
                                    <Text style={styles.errorText}>{errors.email}</Text>
                                )}
                                <View style={styles.inputView}>
                                    <TextInput
                                        style={styles.inputPassword}
                                        placeholder="Password"
                                        secureTextEntry={!isPasswordVisible}
                                        value={values.password?.toString()}
                                        onChangeText={(password) => { handleChange("password")(password); dispatch(setPassword(password)) }}
                                        onFocus={() => setIsKeyboardVisible(true)} // Klavye açıldığında
                                        onBlur={() => { setIsKeyboardVisible(false); handleBlur("password") }} // Klavye kapandığında
                                    />
                                    {touched.password && errors.password && (
                                        <Text style={{ position: "absolute", left: 10, top: 40, justifyContent: "center", color: "red", paddingVertical: 4 }}>{errors.password}</Text>
                                    )}
                                    <TouchableOpacity style={styles.icon} onPress={() => {
                                        setIsPasswordVisible(!isPasswordVisible);
                                    }}>
                                        <Icon
                                            name={isPasswordVisible ? "eye-off" : "eye"} // Şifre görünürlüğüne göre simge değişir
                                            size={24}
                                            color="gray"
                                        />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.forgotpasswordTextView}>
                                    <TouchableOpacity onPress={() => navigation.navigate(Screens.Forgot)}>
                                        <Text>Forgot Password?</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity style={styles.touchable} onPress={()=>handleSubmit()}>
                                    <Text style={styles.signinText}>SIGN IN</Text>
                                </TouchableOpacity>

                                <View style={styles.questionView}>
                                    <Text>Don't have an account? </Text>
                                    <TouchableOpacity style={styles.touchableSingUp} onPress={() => navigation.navigate(Screens.SignUp)}>
                                        <Text style={styles.textSignUp}>SIGN UP</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>

                        </View>
                    )}
                </Formik>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView >
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
    todolistImage: {
        justifyContent: "flex-start",
        alignItems: "center",
        margin: 50
    },
    forgotpasswordTextView: {
        width: '100%',
        alignItems: "flex-end",
        right: 10,
        margin: 15
    },
    signinText: {
        color: "white"
    },
    questionView: {
        flexDirection: "row",
        justifyContent: "center"
    },
    touchableSingUp: {
        width: 90,
        height: 50
    },
    textSignUp: {
        color: "#FF8A80"
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
        borderRadius: 15
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
    errorText: {
        color: "red",
        marginBottom: 5,
        alignSelf: "flex-start",
        left: 20
    },
})
export default SignIn;