import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, BackHandler } from 'react-native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { RootStackParamList, Screens } from "../types";
import { addTodo } from "../database/database";
import Toast from "react-native-toast-message";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'AddTodo'>

const AddTodo = () => {
    const navigation = useNavigation<NavigationProp>();
    useEffect(() => {
        const backAction = () => {
            // Geri tuşuna basıldığında "HomeScreen"e yönlendirme
            navigation.navigate(Screens.Home);
            return true; // Varsayılan geri tuşu davranışını engelle
        };
        const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
        return () => backHandler.remove(); // Component unmount olduğunda listener'ı temizle
    }, [navigation]);
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [deadline, setDeadLine] = useState('')
    const [showPicker, setShowPicker] = useState(false);
    const onChange = (selectedDate?: Date): void => {
        const currentDate = selectedDate ? selectedDate : deadline.toLocaleString();  //deadline date cevirildi
        setShowPicker(false);
        setDeadLine(currentDate.toLocaleString());
    };
    const handleAddTodo = async () => {
        try {
            await addTodo(title, description, deadline); // Kullanıcıyı veritabanına ekle
            Toast.show({
                type: "success",
                text1: "Todo basari ile eklendi",
                text2: "Listeye yönlendirliyorsunuz 👌"
            });
            navigation.navigate(Screens.Home); // Giriş ekranına yönlendir
        } catch (error) {
            Toast.show({
                type: "error",
                text1: "Hata",
                text2: `Todo ekleme işlemi başarisiz: ${error}`
            })
        }
    };

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
                        // eslint-disable-next-line @typescript-eslint/no-require-imports
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
                        // eslint-disable-next-line @typescript-eslint/no-require-imports
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
