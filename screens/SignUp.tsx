import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RootStackParamList,Screens } from "../types";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { setFullName, setEmail, setPassword } from "../redux/todoSlice";
import { addUser } from "../database/database";
import Toast from "react-native-toast-message";
import { Formik } from "formik";
import * as Yup from "yup";



type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'SignUp'>

const SignUp = () => {
    const navigation = useNavigation<NavigationProp>();
    const { fullName} = useSelector((state: RootState) => state.todo)
    const dispatch = useDispatch()
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };
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
                <View style={styles.main} >


                    <View style={[styles.todolistViewImage, isKeyboardVisible && { height: 0 },]}>
                        <Image
                            // eslint-disable-next-line @typescript-eslint/no-require-imports
                            source={require('../assets/images/todolistSignIn.png')}
                            style={styles.image}

                        />
                    </View>
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        validationSchema={validationSchema}
                        onSubmit={async (values, { resetForm }) => {
                            try {
                              await addUser(values.email, values.password); // Kullanıcıyı veritabanına ekle
                        
                              // Kullanıcıya başarı mesajı göster
                              Toast.show({
                                type: "success",
                                text1: "Kayıt başarılı!"
                              });
                        
                              // Redux store'u sıfırla (Email ve Password'ü temizle)
                              setEmail("");
                             setPassword("");
                        
                              // Form verilerini sıfırla
                              resetForm();
                        
                              // Giriş ekranına yönlendir
                              navigation.replace(Screens.SignIn);
                            } catch (error) {
                              Toast.show({
                                type: "error",
                                text1: "Kayıt sırasında hata oluştu",
                                text2: `Kullanıcı adı ya da şifre hatalı: ${error}`
                              });
                            }
                          }}
                        >
                    
                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                            <View style={styles.container}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Email"
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    value={values.email}
                                    onChangeText={(email)=>{handleChange("email")(email); setEmail(email)}}
                                    onFocus={() => setIsKeyboardVisible(true)} // Klavye açıldığında
                                    onBlur={() => {setIsKeyboardVisible(false);handleBlur("email")}} // Klavye kapandığında
                                />
                                {touched.email && errors.email && (
                                    <Text style={styles.errorText}>{errors.email}</Text>
                                )}
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
                                        value={values.password?.toString()}
                                        onChangeText={(password)=>{handleChange("password")(password); setPassword(password)}}
                                        onFocus={() => setIsKeyboardVisible(true)} // Klavye açıldığında
                                        onBlur={() => {setIsKeyboardVisible(false);handleBlur("password")}} // Klavye kapandığında
                                    />
                                   {touched.password && errors.password && (
                                        <Text style={{position: "absolute",left:10,top:40,justifyContent:"center",color:"red",paddingVertical:4}}>{errors.password}</Text>
                                    )}
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
                                <TouchableOpacity style={styles.touchable} onPress={()=>handleSubmit()}>
                                    <Text style={styles.textSignUp}>SIGN UP</Text>
                                </TouchableOpacity>
                                <View style={styles.questionView}>
                                    <Text>Have an account? </Text>
                                    <TouchableOpacity style={styles.loginTouchable} onPress={() => navigation.navigate(Screens.SignIn)}>
                                        <Text style={styles.loginText}>LOG IN</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                    </Formik>
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
    errorText: {
        color: "red",
        marginBottom:5,
        alignSelf: "flex-start",
        left:20   
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

function handleChange(arg0: string) {
    throw new Error("Function not implemented.");
}
