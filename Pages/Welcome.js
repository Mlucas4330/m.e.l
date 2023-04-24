import { StyleSheet, Text, View, Image } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { facebook, twitter, whatsapp } from '../assets/svg.js';

export default function Welcome({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.bem_vindo}>Seja {"\n"} bem-vindo</Text>

            <Image style={styles.logo} source={require('../assets/logo.png')} />

            <View style={styles.buttons_container}>
                <Text onPress={() => { navigation.navigate('Login') }} style={styles.button} >Já tenho uma conta!</Text>
                <Text onPress={() => { navigation.navigate('Register') }} style={styles.button} >Quero criar uma conta!</Text>
            </View>

            <View>
                <View style={styles.redes_sociais}>
                    <SvgXml xml={facebook} width="50" height="50" />
                    <SvgXml xml={whatsapp} width="50" height="50" />
                    <SvgXml xml={twitter} width="50" height="50" />
                </View>
                <Text style={styles.label}>Quero logar com...</Text>
            </View>


        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fcb615',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    bem_vindo: {
        color: '#211612',
        fontSize: 60,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    logo: {
        width: 150,
        height: 150,
    },
    buttons_container: {
        gap: 30,
        width: '80%',
    },
    button: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: '#211612',
        color: '#fff',
        padding: 20,
        borderRadius: 25,
        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    redes_sociais: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
    },
    label: {
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});