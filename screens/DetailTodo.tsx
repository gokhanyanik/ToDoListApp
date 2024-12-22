import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Image, TouchableOpacity, GestureResponderEvent } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList, Todo } from '../types';

type DetailTodoProps = {
    todos: Todo[];  // Burada todosun tipini tanımladık.
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>; //setTodosun tipini tanımladık burada 
    todoId:number
};
const DetailTodo: React.FC<DetailTodoProps> = ({ todos, setTodos }) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    const route = useRoute<RouteProp<RootStackParamList, "DetailTodo">>();
   
    const todoId = route.params?.todoId;
    console.log(todoId)
    const todo = todos.find((t) => t.id === Number(todoId));
    console.log("silmeden önce seçilen id li todo : ",todo)
       
     // İlk todo öğesini alalım. Eğer bir seçim yapılacaksa bu daha dinamik hale getirilebilir.
     const todoTitle = todo?.title ; // Dizinin boş olup olmadığını kontrol et.
     const todoDescription =todo?.description ; // Dizinin boş olup olmadığını kontrol et.
 
     console.log("seçilen todoTitle: ", todoTitle)
     console.log("seçilen todoDescription: ", todoDescription)
     console.log("todo değeri: ",todo)
     const handleDeleteTodo = (id: number, event: GestureResponderEvent): void => {
        console.log("todo'nun değeri: ",todo)
        const filteredTodos = todos.filter((todo) => todo.id !== id);
        setTodos(filteredTodos);
        navigation.navigate("HomeScreen", { todos: filteredTodos, setTodos });
    };

    console.log("todo yeni değer: ", todo)
    console.log("todos yeni değer: ", todos)
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
                            onPress={() => navigation.navigate('EditTodo', { todos, setTodos ,todoId})}>
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
                    <Text style={styles.titleText}>{todoTitle}</Text>
                ) : ( // Eğer todo yoksa bir mesaj göster
                    <Text style={styles.alertText}>Henüz bir todo yok</Text>
                )}
                {todoDescription ? ( // Eğer todo varsa açıklmayı görüntüle
                    <Text style={styles.descriptionText}>{todoDescription}</Text>
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