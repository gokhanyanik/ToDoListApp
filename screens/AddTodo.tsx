import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { setTodos, Todo } from "../redux/todoSlice"
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { RootStackParamList } from "../types";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'AddTodo'>

const AddTodo = () => {
    const navigation = useNavigation<NavigationProp>();
    const todos = useSelector((state: RootState) => state.todo.todos);
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')//burada deadline string olarak tutuluyor ancak aşağıda kullanıldıgında tekrar date' cevirilicek
    const [deadline, setDeadLine] = useState('')
    const [showPicker, setShowPicker] = useState(false);
    const onChange = (selectedDate?: Date): void => {
        const currentDate = selectedDate ? selectedDate : deadline.toLocaleString();  //deadline date cevirildi
        setShowPicker(false);
        setDeadLine(currentDate.toLocaleString());
    };
    const handleAddTodo = (): void => {
        const newTodo: Todo = { title, description, deadline, id: Date.now() };
        dispatch(setTodos([...todos, newTodo]));

        navigation.navigate('HomeScreen');
    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.titleInput}
                placeholder="Title"
                placeholderTextColor="white"
                value={title}
                onChangeText={(t) => setTitle(t)}
            />
            <TextInput
                style={styles.descriptionInput}
                placeholder="Description"
                placeholderTextColor="white"
                value={description}
                onChangeText={(d) => setDescription(d)}
                textAlignVertical="top"
            />
            <View style={styles.deadlineView}>
                <Text style={styles.deadlineText}>Deadline(Optional)</Text>
                {/*Deadline seçimi butonu */}
                <TouchableOpacity style={styles.buttonDeadline} onPress={() => setShowPicker(true)}>
                    <Image
                        source={require('../assets/images/deadLine.png')}
                    />
                </TouchableOpacity>
                {/*Tarih seçici(picker) */}
                {showPicker && (
                    <DateTimePicker
                        value={deadline ? new Date(deadline) : new Date()} // Başlangıç tarihi
                        mode="date"  //sadece tarih seçilecek
                        display="default"  // Platforma bağlı olarak tarih seçici görünümü
                        onChange={(event, selectedDate) => onChange(selectedDate)} // tarih seçildiğinde çağırılacak fonksiyon
                    />
                )}
            </View>
            <View style={styles.deadlineView}>
                <Text style={styles.imageText}>Add Image(Optional)</Text>
                {/*Image seçimi butonu */}
                <TouchableOpacity style={[styles.buttonDeadline, { left: 80 }]} onPress={() => console.log("image eklenicek")}>
                    <Image
                        source={require('../assets/images/image.png')}
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.addTodoClick} onPress={handleAddTodo}>
                <Text style={styles.addText}>ADD TO DO</Text>
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
    addText: {
        color: "#FF8A80",
        fontSize: 20
    },
    deadlineText: {
        right: 70,
        fontSize: 18,
        color: "white"
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF8A80',
        width: 375,
        height: 50,
        borderRadius: 15,
        borderColor: "white",
        borderWidth: 1,
        margin: 7
    },
    buttonDeadline: {
        padding: 15,
        borderRadius: 10,
        margin: 5,
        left: 90
    },
    imageText: {
        right: 60,
        fontSize: 18,
        color: "white"
    }
})

export default AddTodo;
