import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, Image, FlatList } from 'react-native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList, Todo } from "../types";

//type HomeScreenScreenNavigationProps = NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;

//HomeScreen için özel tanımlanan tipi ifade eder ve içerisinde Todo tipini de barındırır.
type HomeScreenProps = {
    todos: Todo[];  // Burada todosun tipini tanımladık.
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>; //setTodosun tipini tanımladık burada 
};
const HomeScreen: React.FC<HomeScreenProps> = ({ todos, setTodos }) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

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
                <TouchableOpacity style={{ backgroundColor: "white", justifyContent: "flex-start", flexDirection: "row" }} onPress={() => console.log("todolistProfilScreen")}>
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
            <FlatList
                data={todos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={{ height: 180, width: 370 }}>
                        <TouchableOpacity
                            style={{ backgroundColor: "#F76C6A", height: 150, width: "90%", margin: 10, borderRadius: 20, top: 10 }}
                            onPress={() => navigation.navigate('DetailTodo', { todos, setTodos })}
                        >
                            <Text style={{ margin: 10, color: "white", fontSize: 17, fontWeight: "bold" }}>{item.title}</Text>
                            <Text style={{ margin: 10, color: "white" }}>{item.description}</Text>
                            <Text style={{ margin: 10, color: "white", top: 35 }}>{item.deadline.toDateString()}</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
            <TouchableOpacity
                style={{ backgroundColor: "white", height: 60, width: 70, left: 130, margin: 10 }}
                onPress={() => navigation.navigate('AddTodo', { todos, setTodos })}
            >
                <Image
                    source={require('../assets/images/ekle.png')}
                    style={{ width: 70, height: 60 }}
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