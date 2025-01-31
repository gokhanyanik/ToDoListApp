import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { RootStackParamList, Screens } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { setTodos } from "../redux/todoSlice";
import { RootState } from "../redux/store";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, Screens.Edit>

const EditTodo = ({ route }: { route: any }) => {
    const navigation = useNavigation<NavigationProp>();
    const todos = useSelector((state: RootState) => state.todo.todos)
    const dispatch = useDispatch()
    const todoId = route.params?.todoId

    const todo = todos.find((t) => t.id === todoId);
    const todoTitle = todo?.title; // Dizinin boş olup olmadığını kontrol et.
    const todoDescription = todo?.description;

    const [showPicker, setShowPicker] = useState(false)
    const [deadline, setDeadLine] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const onChange = (event: any, selectedDate?: Date): void => {
        const currentDate = selectedDate || deadline.toLocaleString();
        setShowPicker(false);  // Picker'ı kapat
        setDeadLine(currentDate.toLocaleString());  //Seçilen tarihi state'e kaydet
    };
    const handleEditTodo = (): void => {
        const updatedTodos = todos.map(todo =>
            todo.id === todoId
                ? { ...todo, title, description, deadline: deadline.toString() }
                : todo
        );
        dispatch(setTodos(updatedTodos));
        navigation.navigate(Screens.Home);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.titleInput}
                placeholder={` ${todos.length > 0 ? todoTitle : "No todos"}`} // İlk todo'nun başlığı gösterilir.
                placeholderTextColor="white"
                value={title}
                onChangeText={(text) => setTitle(text)}
            />
            <TextInput
                style={styles.descriptionInput}
                placeholder={` ${todos.length > 0 ? todoDescription : "No todos"}`}
                placeholderTextColor="white"
                value={description}
                onChangeText={(text) => setDescription(text)}
                textAlignVertical="top"
            />
            <View style={styles.deadlineView}>
                <Text style={styles.deadlineText}>  {todo?.deadline?.toString()}</Text>
                {/*Deadline seçimi butonu */}
                <TouchableOpacity style={styles.buttonDeadline} onPress={() => setShowPicker(true)}>
                    <Image
                        source={require('../assets/images/deadLine.png')}
                    />
                </TouchableOpacity>
                {/*Tarih seçici(picker) */}
                {showPicker && (
                    <DateTimePicker
                        value={new Date(deadline)} // Başlangıç tarihi
                        mode="date"  //sadece tarih seçilecek
                        display="default"  // Platforma bağlı olarak tarih seçici görünümü
                        onChange={onChange} // tarih seçildiğinde çağırılacak fonksiyon
                    />
                )}
            </View>
            <View style={styles.deadlineView}>
                <Text style={styles.deadlineText}>Add Image(Optional)</Text>
                {/*Image seçimi butonu */}
                <TouchableOpacity style={styles.buttonDeadline} onPress={() => console.log("image eklenicek")}>
                    <Image
                        source={require('../assets/images/image.png')}
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.addTodoClick} onPress={handleEditTodo}>
                <Text style={styles.editClick}>EDİT TO DO</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FF8A80',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    titleInput: {
        width: 370,
        height: 50,
        borderColor: 'white',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 15,
        margin: 15,
        fontSize: 25,
    },
    descriptionInput: {
        width: 370,
        height: 400,
        borderColor: 'white',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 15,
        margin: 15,
        fontSize: 25,
        justifyContent: "flex-start"
    },
    addTodoClick: {
        width: 370,
        height: 50,
        borderColor: 'white',
        borderWidth: 1,
        marginBottom: 15,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        backgroundColor: "white",
        margin: 15,
    },
    deadlineView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        backgroundColor: '#FF8A80',
        width: 375,
        height: 50,
        borderRadius: 15,
        borderColor: "white",
        borderWidth: 1,
        margin: 7
    },
    deadlineText: {
        fontSize: 18,
        color: "white"
    },
    buttonDeadline: {
        padding: 15,
        borderRadius: 10,
        margin: 5,
    },
    editClick: {
        color: "#FF8A80",
        fontSize: 20
    },
})

export default EditTodo;