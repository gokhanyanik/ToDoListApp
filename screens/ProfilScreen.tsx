import React from "react";
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';

type ProfilScreenScreenNavigationProps = NativeStackNavigationProp<RootStackParamList, 'ProfilScreen'>;

const ProfilScreen = () => {
    const navigation = useNavigation<ProfilScreenScreenNavigationProps>();
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", width: "100%", height: 40, backgroundColor: "white", justifyContent: "space-between", margin: 10 }}>
                <TouchableOpacity style={{ backgroundColor: "white" }} onPress={() => console.log("todolistProfilScreen")}>
                    <Image
                        source={require('../assets/images/todolistProfilScreen.png')}
                        style={{ width: 83, height: 18, margin: 10 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: "white" }} onPress={() => console.log("ayarlarIkonProfilScreen")}>
                    <Image
                        source={require('../assets/images/ayarlarIkonProfilScreen.png')}
                        style={{ width: 22, height: 22, margin: 10 }}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: "white", height: 300, width: "100%", top: 40, justifyContent: "center", alignItems: "center" }}>
                <Image
                    source={require('../assets/images/ProfilScreen.png')}
                    style={{ width: 300, height: 250 }}
                />
            </View>
            <View style={{ backgroundColor: "white", height: 130, width: "100%", top: 70 }}>
                <View style={{ flexDirection: "row", width: "100%", height: 50, justifyContent: "space-between", margin: 5 }}>
                    <Text style={{ fontSize: 22, color: "grey" }}>Full Name </Text>
                    <Text style={{ fontSize: 22, color: "#F79E89", fontWeight: "bold" }}>Devin L.Walker </Text>
                </View>
                <View style={{ flexDirection: "row", width: "100%", height: 50, justifyContent: "space-between", margin: 5 }}>
                    <Text style={{ fontSize: 22, color: "grey" }}>Email </Text>
                    <Text style={{ fontSize: 22, color: "#F79E89" }}>DevinWaller17@gmail.com </Text>
                </View>
                <View style={{ flexDirection: "row", width: "100%", height: 50, justifyContent: "space-between", margin: 5 }}>
                    <Text style={{ fontSize: 22, color: "grey" }}>Password </Text>
                    <Text style={{ fontSize: 22, color: "#F79E89" }}>Change Password </Text>
                </View>
            </View>
            <TouchableOpacity style={[styles.logoutClick, { top: 120 }]} onPress={() => console.log("Log Out a basıldı")}>
                <Text style={{ color: "white", fontSize: 20 }}>LOG OUT</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    logoutClick: {
        width: 370,
        height: 50,
        borderColor: 'white',
        borderWidth: 1,
        marginBottom: 15,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        backgroundColor: "#F79E89",
        margin: 15,
    }
})

export default ProfilScreen;