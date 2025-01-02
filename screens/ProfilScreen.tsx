import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList, Todo } from '../types';
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { setTodos } from "../redux/todoSlice";

type ProfilScreenScreenNavigationProps = NativeStackNavigationProp<RootStackParamList, 'ProfilScreen'>;

const ProfilScreen = () => {
    const navigation = useNavigation<ProfilScreenScreenNavigationProps>();
    const todos=useSelector((state:RootState)=>state.todo.todos)
    return (
        <View style={styles.main}>
            <View style={styles.containerFirst}>
                <TouchableOpacity style={styles.optionTouchable} onPress={() => console.log("todolistProfilScreen")}>
                    <Image
                        source={require('../assets/images/todolistProfilScreen.png')}
                        style={styles.todolistImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionTouchable} onPress={() => console.log("ayarlarIkonProfilScreen")}>
                    <Image
                        source={require('../assets/images/ayarlarIkonProfilScreen.png')}
                        style={styles.optionIkonImage}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.containerSecond}>
                <Image
                    source={require('../assets/images/ProfilScreen.png')}
                    style={styles.profilscreenImage}
                />
            </View>
            <View style={styles.containerThird}>
                <View style={styles.textView}>
                    <Text style={styles.textInfo}>Full Name </Text>
                    <Text style={styles.textUserName}>Devin L.Walker </Text>
                </View>
                <View style={styles.textView}>
                    <Text style={styles.textInfo}>Email </Text>
                    <Text style={styles.textUser}>DevinWaller17@gmail.com </Text>
                </View>
                <View style={styles.textView}>
                    <Text style={styles.textInfo}>Password </Text>
                    <Text style={styles.textUser}>Change Password </Text>
                </View>
            </View>
            <TouchableOpacity style={styles.logoutClick} onPress={() => navigation.navigate('SignIn', { todos, setTodos })}>
                <Text style={styles.clickText}>LOG OUT</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    containerFirst: {
        flexDirection: "row",
        width: "100%",
        height: 40,
        backgroundColor: "white",
        justifyContent: "space-between",
        margin: 10
    },
    containerSecond: {
        backgroundColor: "white",
        height: 300,
        width: "100%",
        top: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    containerThird: {
        backgroundColor: "white",
        height: 130,
        width: "100%",
        top: 70
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    logoutClick: {
        width: 370,
        height: 50,
        borderColor: 'white',
        borderWidth: 1,
        marginBottom: 15,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        backgroundColor: "#F79E89",
        margin: 15,
        top: 120
    },
    todolistImage: {
        width: 83,
        height: 18,
        margin: 10
    },
    optionIkonImage: {
        width: 22,
        height: 22,
        margin: 10
    },
    optionTouchable: {
        backgroundColor: "white"
    },
    profilscreenImage: {
        width: 300,
        height: 250
    },
    textView: {
        flexDirection: "row",
        width: "100%",
        height: 50,
        justifyContent: "space-between",
        margin: 5
    },
    textInfo: {
        fontSize: 22,
        color: "grey"
    },
    textUser: {
        fontSize: 22,
        color: "#F79E89"
    },
    textUserName: {
        fontSize: 22,
        color: "#F79E89",
        fontWeight: "bold"
    },
    clickText: {
        color: "white",
        fontSize: 20
    },

})

export default ProfilScreen;