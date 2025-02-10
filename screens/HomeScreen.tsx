import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList, Screens } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setTodos } from "../redux/todoSlice";
import { getTodos } from "../database/database";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;// bu tip tanımlaması aşağıda navigation içerisindeki proplar için

const HomeScreen:React.FC = () => {
    const navigation = useNavigation<NavigationProp>();
    const { todos } = useSelector((state: RootState) => state.todo)  //redux store dan todos değerine ulaşıyoruz.Burada state.todo daki todo storeda reducer'a verilen ad
    const dispatch = useDispatch();
    // Veritabanından verileri çeken fonksiyon
    const fetchTodos = async () => {
        try {
            const todos = await getTodos()
            dispatch(setTodos(todos))  // redux store a veriyi ekle
        } catch (error) {
            console.error("Failed to fetch Todos:", error);
        }
    };
    // Sayfa yüklendiğinde todos listesini getir
    useEffect(() => {
        getTodos().then(data => console.log("SQlite veriler: ", data))
        fetchTodos();
    }, []);

    return (
        <View style={styles.main}>
            <View style={styles.containerFirst}>
                <TouchableOpacity style={styles.touchableStyle} onPress={() => console.log("todolistProfilScreen")}>
                    <Image
                        // eslint-disable-next-line @typescript-eslint/no-require-imports
                        source={require('../assets/images/todolistIcon.png')}
                        style={styles.todolistIkonImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableStyle} onPress={() => navigation.navigate('ProfilScreen')}>
                    <Image
                        // eslint-disable-next-line @typescript-eslint/no-require-imports
                        source={require('../assets/images/settingsIcon.png')}
                        style={styles.optionIkonImage}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.containerSecond}>
                <TouchableOpacity style={styles.touchableContainer} onPress={() => console.log("todolistProfilScreen")}>
                    <Image
                        // eslint-disable-next-line @typescript-eslint/no-require-imports
                        source={require('../assets/images/todo.png')}
                        style={styles.todoImage}
                    />
                    <Image
                        // eslint-disable-next-line @typescript-eslint/no-require-imports
                        source={require('../assets/images/listofIcon.png')}
                        style={styles.listofImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchableStyle} onPress={() => console.log("ayarlarIkonProfilScreen")} disabled={todos.length > 1 ? false : true}>
                    <Image
                        // eslint-disable-next-line @typescript-eslint/no-require-imports
                        source={require('../assets/images/filter.png')}
                        style={styles.filtreImage}
                    />
                </TouchableOpacity>
            </View>
            <FlatList
                data={todos}
                keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.flatlistView}>
                        <TouchableOpacity
                            style={styles.flatlistTouchable}
                            onPress={() => navigation.navigate(Screens.Details, { todoId: item.id })}
                        >
                            <Text style={styles.flatlistTextTitle}>{item.title}</Text>
                            <Text style={styles.flatlistTextDescription}>{item.description}</Text>
                            <Text style={styles.flatlistTextDeadline}> {new Date(item.deadline).toLocaleDateString()}</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
            <TouchableOpacity
                style={styles.ekleTouchableImage}
                onPress={() => navigation.navigate(Screens.Add)}
            >
                <Image
                    // eslint-disable-next-line @typescript-eslint/no-require-imports
                    source={require('../assets/images/add.png')}
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