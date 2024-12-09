import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types";

type HomeScreenScreenNavigationProps = NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;

const HomeScreen = () => {
    const navigation = useNavigation<HomeScreenScreenNavigationProps>();

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", width: "95%", height: 40, backgroundColor: "white", justifyContent: "space-between", margin: 15 }}>
                <TouchableOpacity style={{ backgroundColor: "white" }} onPress={() => console.log("todolistProfilScreen")}>
                    <Image
                        source={require('../assets/images/todolistProfilScreen.png')}
                        style={{ width: 83, height: 18, margin: 10 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: "white" }} onPress={() => navigation.navigate('ProfilScreen')}>
                    <Image
                        source={require('../assets/images/ayarlarIkonProfilScreen.png')}
                        style={{ width: 22, height: 22, margin: 15 }}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", width: "95%", height: 40, backgroundColor: "white", justifyContent: "space-between", margin: 10 }}>
                <TouchableOpacity style={{ backgroundColor: "white", justifyContent: "flex-start",flexDirection:"row" }} onPress={() => console.log("todolistProfilScreen")}>
                    <Image
                        source={require('../assets/images/todo.png')}
                        style={{ width: 50, height: 35, resizeMode: "contain", margin: 7 }}
                    />
                     <Image
                        source={require('../assets/images/listof1.png')}
                        style={{ width: 200, height: 35, margin: 7 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: "white" }} onPress={() => console.log("ayarlarIkonProfilScreen")}>
                    <Image
                        source={require('../assets/images/filtre.png')}
                        style={{ width: 22, height: 22, margin: 15 }}
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={{ backgroundColor: "#F76C6A", height: 150, width: "90%", margin: 10, borderRadius: 20, top: 10 }}
                onPress={() => navigation.navigate('DetailTodo')}
            >
                <Text style={{ margin: 10, color: "white", fontSize: 17, fontWeight: "bold" }}>Todolist Title</Text>
                <Text style={{ margin: 10, color: "white" }}>Todolist Description</Text>
                <Text style={{ margin: 10, color: "white", top: 35 }}>Creat Deadline</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ backgroundColor: "#F79E89", height: 150, width: "90%", margin: 10, borderRadius: 20 }}
                onPress={() => navigation.navigate('DetailTodo')}
            >
                <Text style={{ margin: 10, color: "white", fontSize: 17, fontWeight: "bold" }}>Todolist Title</Text>
                <Text style={{ margin: 10, color: "white" }}>Todolist Description</Text>
                <Text style={{ margin: 10, color: "white", top: 35 }}>Creat Deadline</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ backgroundColor: "white", height: 60, width: "100%", margin: 50, alignItems: "flex-end", top: 100 }}
                onPress={() => navigation.navigate('AddTodo')}
            >
                <Image
                    source={require('../assets/images/ekle.png')}
                    style={{ width: 60, height: 60, margin: 10 }}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
})


export default HomeScreen;