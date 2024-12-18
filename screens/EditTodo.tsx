import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList, Todo } from "../types";
import DateTimePicker from '@react-native-community/datetimepicker';

type EditTodoProps = {
    todos: Todo[];  // Burada todosun tipini tanımladık.
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>; //setTodosun tipini tanımladık burada 
};
const EditTodo: React.FC<EditTodoProps> = ({ todos, setTodos }) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    /*deadline için tanımlanan stateler */
    const [deadline, setDeadline] = useState(new Date());  // Başlangıç olarak bugünün tarihini veriyoruz.
    const [showPicker, setShowPicker] = useState(false);  //tarih seçici açık/kapalı state ini başlangıçta kapalı yapıyoruz.
    //Tarih seçildiğinde çağırılacak fonksiyon...
    const onChange = (event: any, selectedDate?: Date): void => {
        const currentDate = selectedDate || deadline;
        setShowPicker(false);  // Picker'ı kapat
        setDeadline(currentDate);  //Seçilen tarihi state'e kaydet
    };
    const handleEditTodo = (): void => {
        const newTodo: Todo = { title, description, deadline: new Date(), id: Date.now() };
        setTodos([...todos, newTodo]);
        navigation.goBack();
    };
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.titleInput}
                placeholder={` ${todos.length > 0 ? todos[0].title : "No todos"}`} // İlk todo'nun başlığı gösterilir.
                placeholderTextColor="white"
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                style={styles.descriptionInput}
                placeholder={` ${todos.length > 0 ? todos[0].description : "No todos"}`}
                placeholderTextColor="white"
                value={description}
                onChangeText={setDescription}
                textAlignVertical="top"
            />
            <View style={styles.deadlineView}>
                <Text style={styles.deadlineText}>  {deadline.toLocaleDateString("tr-TR")} {/* Örneğin, MM/DD/YYYY formatı */}</Text>
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