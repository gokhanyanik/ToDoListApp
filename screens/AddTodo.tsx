import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList, Todo } from "../types";
import DateTimePicker from '@react-native-community/datetimepicker';
import { setTitle, setDescription, setDeadline, setShowPicker, setTodos } from '../redux/todoSlice';
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";


const AddTodo = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const { title, description, deadline, showPicker, todos } = useSelector((state: RootState) => state.todo)
    const dispatch = useDispatch()

    const onChange = (event: any, selectedDate?: Date): void => {
        const currentDate = selectedDate instanceof Date ? selectedDate : deadline instanceof Date ? deadline : new Date();
        setShowPicker(false);  // Picker'ı kapat
        setDeadline(currentDate);  //Seçilen tarihi state'e kaydet
    };
    const handleAddTodo = (): void => {
        const newTodo: Todo = { title, description, deadline, id: Date.now() };// Todo listesine eklemek için yeni bir obje(todo) tanımlandı
        setTodos([...todos, newTodo]);  //setTodos fonk. güncelleniyor.burada yapılan işlem todos kopyalanıp sonuna yeni obje ilave edilir.
        navigation.navigate('HomeScreen', { todos, setTodos })  //Navigation ile homeScreen ekranına geçiş sağlanır ve todos(dizi) ve setTodos(güncelleme fonksiyonu) parametreleri verilir.
    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.titleInput}
                placeholder="Title"
                placeholderTextColor="white"
                value={title}
                onChangeText={(text) => dispatch(setTitle(text))}
            />
            <TextInput
                style={styles.descriptionInput}
                placeholder="Description"
                placeholderTextColor="white"
                value={description}
                onChangeText={(text) => dispatch(setDescription(text))}
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
                        value={deadline} // Başlangıç tarihi
                        mode="date"  //sadece tarih seçilecek
                        display="default"  // Platforma bağlı olarak tarih seçici görünümü
                        onChange={onChange} // tarih seçildiğinde çağırılacak fonksiyon
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
