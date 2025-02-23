/* eslint-disable @typescript-eslint/no-require-imports */
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList, Screens } from "../types";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { setTodos } from "../redux/todoSlice";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, Screens.Details>
type DetailTodoProps = {
    route: any;
}

const DetailTodo:React.FC<DetailTodoProps>= ({ route }) => {
    const navigation = useNavigation<NavigationProp>()
    const todoId = route.params?.todoId
    const todos = useSelector((state: RootState) => state.todo)
    const dispatch = useDispatch()
    const todoNew = todos.todos.find((t) => t.id === todoId);
    const todoTitle = todoNew?.title; // Dizinin boş olup olmadığını kontrol et.
    const todoDescription = todoNew?.description; // Dizinin boş olup olmadığını kontrol et.
    const handleDeleteTodo = (id: number): void => {
        const filteredTodos = todos.todos.filter((todo) => todo.id !== id);
        dispatch(setTodos(filteredTodos));
        navigation.navigate(Screens.Home);
    };

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.solokTouchable}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        // eslint-disable-next-line @typescript-eslint/no-require-imports
                        source={require('../assets/images/backSpace.png')}
                        style={styles.solokImage}
                    />
                </TouchableOpacity>
                <View style={styles.secondContainer}>
                    <View
                        style={styles.transactions}
                    >
                        <TouchableOpacity>
                            <Image
                                // eslint-disable-next-line @typescript-eslint/no-require-imports
                                source={require('../assets/images/timer.png')}
                                style={styles.deadlineImage}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate(Screens.Edit, { todoId })}>
                            <Image
                                source={require('../assets/images/edit.png')}
                                style={styles.editImage}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleDeleteTodo(todoId!)}>
                            <Image
                                source={require('../assets/images/bin.png')}
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