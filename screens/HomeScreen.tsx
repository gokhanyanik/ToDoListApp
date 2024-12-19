import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, Image, FlatList } from 'react-native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList, Todo } from "../types";

//HomeScreen için özel tanımlanan tipi ifade eder ve içerisinde Todo tipini de barındırır.
type HomeScreenProps = {
    todos: Todo[];  // Burada todosun tipini tanımladık.
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>; //setTodosun tipini tanımladık burada 
    todoId: number
};
const HomeScreen: React.FC<HomeScreenProps> = ({ todos, setTodos, todoId }) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <View style={styles.main}>
            <View style={styles.containerFirst}>
                <TouchableOpacity style={styles.touchableStyle} onPress={() => console.log("todolistProfilScreen")}>
                    <Image
                        source={require('../assets/images/todolistProfilScreen.png')}
                        style={styles.todolistIkonImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableStyle} onPress={() => navigation.navigate('ProfilScreen')}>
                    <Image
                        source={require('../assets/images/ayarlarIkonProfilScreen.png')}
                        style={styles.optionIkonImage}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.containerSecond}>
                <TouchableOpacity style={styles.touchableContainer} onPress={() => console.log("todolistProfilScreen")}>
                    <Image
                        source={require('../assets/images/todo.png')}
                        style={styles.todoImage}
                    />
                    <Image
                        source={require('../assets/images/listof1.png')}
                        style={styles.listofImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableStyle} onPress={() => console.log("ayarlarIkonProfilScreen")}>
                    <Image
                        source={require('../assets/images/filtre.png')}
                        style={styles.filtreImage}
                    />
                </TouchableOpacity>
            </View>
            <FlatList
                data={todos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.flatlistView}>
                        <TouchableOpacity
                            style={styles.flatlistTouchable}
                            onPress={() => navigation.navigate('DetailTodo', { todos, setTodos, todoId:item.id })}
                        >
                            <Text style={styles.flatlistTextTitle}>{item.title}</Text>
                            <Text style={styles.flatlistTextDescription}>{item.description}</Text>
                            <Text style={styles.flatlistTextDeadline}>{item.deadline.toDateString()}</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
            <TouchableOpacity
                style={styles.ekleTouchableImage}
                onPress={() => navigation.navigate('AddTodo', { todos, setTodos })}
            >
                <Image
                    source={require('../assets/images/ekle.png')}
                    style={styles.ekleImage}
                />
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
        width: "95%",
        height: 40,
        backgroundColor: "white",
        justifyContent: "space-between",
        margin: 15
    },
    containerSecond: {
        flexDirection: "row",
        width: "95%",
        height: 40,
        backgroundColor: "white",
        justifyContent: "space-between",
        margin: 10
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    optionIkonImage: {
        width: 22,
        height: 22,
        margin: 15
    },
    todolistIkonImage: {
        width: 83,
        height: 18,
        margin: 10
    },
    touchableStyle: {
        backgroundColor: "white"
    },
    touchableContainer: {
        backgroundColor: "white",
        justifyContent: "flex-start",
        flexDirection: "row"
    },
    todoImage: {
        width: 50,
        height: 35,
        resizeMode: "contain",
        margin: 7
    },
    listofImage: {
        width: 200,
        height: 35,
        margin: 7
    },
    filtreImage: {
        width: 22,
        height: 22,
        margin: 15
    },
    flatlistView: {
        height: 180,
        width: 370
    },
    flatlistTouchable: {
        backgroundColor: "#F76C6A",
        height: 150,
        width: "90%",
        margin: 10,
        borderRadius: 20,
        top: 10
    },
    flatlistTextDescription: {
        margin: 10,
        color: "white"
    },
    flatlistTextTitle: {
        margin: 10,
        color: "white",
        fontSize: 17,
        fontWeight: "bold"
    },
    flatlistTextDeadline: {
        margin: 10,
        color: "white",
        top: 35
    },
    ekleImage: {
        width: 70,
        height: 60
    },
    ekleTouchableImage: {
        backgroundColor: "white",
        height: 60,
        width: 70,
        left: 130,
        margin: 10
    }
})
export default HomeScreen;