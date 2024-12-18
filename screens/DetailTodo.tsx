import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Image, TouchableOpacity, GestureResponderEvent } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList, Todo } from '../types';

type DetailTodoProps = {
    todos: Todo[];  // Burada todosun tipini tanımladık.
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>; //setTodosun tipini tanımladık burada 
};
const DetailTodo: React.FC<DetailTodoProps> = ({ todos, setTodos }) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    const route = useRoute<RouteProp<RootStackParamList, "DetailTodo">>();
    // İlk todo öğesini alalım. Eğer bir seçim yapılacaksa bu daha dinamik hale getirilebilir.
    const todoTitle = todos.length > 0 ? todos[0] : null; // Dizinin boş olup olmadığını kontrol et.
    const todoDescription = todos.length > 0 ? todos[0] : null; // Dizinin boş olup olmadığını kontrol et.

    const todoId = route.params?.todoId;
    console.log("alınan tdoId: ", todoId)
    const todo = todos.find((t) => t.id === Number(todoId));

    const handleDeleteTodo = (id: number, event: GestureResponderEvent): void => {
        const filteredTodos = todos.filter((todo) => todo.id !== id);
        setTodos(filteredTodos);
        console.log("filtrelenen Todos: ", todos);
        navigation.navigate("HomeScreen", { todos: filteredTodos, setTodos });
        console.log("güncel todo: ", todo)
        console.log("güncel", todoId)
    };

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.solokTouchable}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={require('../assets/images/solok.png')}
                        style={styles.solokImage}
                    />
                </TouchableOpacity>
                <View style={styles.secondContainer}>
                    <View
                        style={styles.transactions}
                    >
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/images/saat.png')}
                                style={styles.deadlineImage}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('EditTodo', { todos, setTodos })}>
                            <Image
                                source={require('../assets/images/düzenle.png')}
                                style={styles.editImage}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={(event) => handleDeleteTodo(todoId, event)}>
                            <Image
                                source={require('../assets/images/copkutusu.png')}
                                style={styles.deleteImage}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.todoControl}>
                {todoTitle ? ( // Eğer todo varsa başlığı görüntüle
                    <Text style={styles.titleText}>{todoTitle.title}</Text>
                ) : ( // Eğer todo yoksa bir mesaj göster
                    <Text style={styles.alertText}>Henüz bir todo yok</Text>
                )}
                {todoDescription ? ( // Eğer todo varsa açıklmayı görüntüle
                    <Text style={styles.descriptionText}>{todoDescription.description}</Text>
                ) : ( // Eğer todo yoksa bir mesaj göster
                    <Text style={styles.alertText}>Henüz bir todo yok</Text>
                )}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    container: {
        backgroundColor: '#f0f0f0',
        height: 50,
        flexDirection: "row"
    },
    secondContainer: {
        backgroundColor: "#FFFFFF",
        width: 360,
    },
    transactions: {
        backgroundColor: "#FFFFFF",
        width: 360,
        height: 50,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    solokTouchable: {
        backgroundColor: "#FFFFFF",
        width: 30,
        justifyContent: "center"
    },
    solokImage: {
        margin: 20
    },
    deadlineImage: {
        margin: 5,
        height: 24,
        width: 24
    },
    editImage: {
        margin: 5,
        height: 24,
        width: 24
    },
    deleteImage: {
        margin: 5,
        height: 24,
        width: 24
    },
    todoControl: {
        backgroundColor: "#FFFFFF",
        flex: 1,
        justifyContent: "flex-start",
    },
    titleText: {
        margin: 20,
        fontSize: 25,
        fontWeight: "bold"
    },
    descriptionText: {
        margin: 20
    },
    alertText: {
        margin: 20
    },

})

export default DetailTodo;