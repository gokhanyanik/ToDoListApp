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

            <View style={{flexDirection:"row",width:"100%",height:40,backgroundColor:"white", justifyContent:"space-between",margin:10}}>
                <TouchableOpacity style={{ backgroundColor: "white"}} onPress={() => console.log("todolistProfilScreen")}>
                    <Image
                        source={require('../assets/images/todolistProfilScreen.png')}
                        style={{ width: 83, height: 18, margin: 10 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: "white"}} onPress={() => console.log("ayarlarIkonProfilScreen")}>
                    <Image
                        source={require('../assets/images/ayarlarIkonProfilScreen.png')}
                        style={{ width: 22, height: 22, margin:10   }}
                    />
                </TouchableOpacity>

            </View>

            <View style={{ backgroundColor: "blue", height: 300, width: "100%", top: 70 }}>
                <Text>asf</Text>
            </View>
            <View style={{ backgroundColor: "orange", height: 130, width: "100%", top: 120 }}>
                <Text>asf</Text>
            </View>
            <View style={{ backgroundColor: "black", height: 40, width: "100%", top: 160 }}>
                <Text>asf</Text>
            </View>
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
    }
})

export default ProfilScreen;