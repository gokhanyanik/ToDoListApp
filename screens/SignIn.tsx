import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { setEmail, setPassword } from "../redux/todoSlice";
import { validateUser } from "../database/database";


type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'SignIn'>

const SignIn = () => {
    const navigation = useNavigation<NavigationProp>();
    const { email, password } = useSelector((state: RootState) => state.todo)
    const dispatch = useDispatch()
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleSignIn = async () => {
        try {
          const isValidUser = await validateUser(email, password);
          if (isValidUser) {
            navigation.replace("HomeScreen"); // HomeScreen'e yönlendir
          } else {
            Alert.alert("Giriş Hatası", "E-posta veya şifre yanlış.");
          }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
          Alert.alert("Hata", "Giriş sırasında bir hata oluştu.");
        }
      };
    return (
        <View style={styles.main}>
            <View style={styles.todolistImage}>
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
                    onChangeText={(text) => dispatch(setEmail(text))}
                />
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.inputPassword}
                        placeholder="Password"
                        secureTextEntry={!isPasswordVisible}
                        value={password?.toString()}
                        onChangeText={(value) => dispatch(setPassword(value))}
                    />
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
                    <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
                        <Text>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.touchable} onPress={handleSignIn}>
                    <Text style={styles.signinText}>SIGN IN</Text>
                </TouchableOpacity>

                <View style={styles.questionView}>
                    <Text>Don't have an account? </Text>
                    <TouchableOpacity style={styles.touchableSingUp} onPress={() => navigation.navigate('SignUp')}>
                        <Text style={styles.textSignUp}>SIGN UP</Text>
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
    }
})
export default SignIn;