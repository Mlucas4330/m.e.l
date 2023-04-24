import { StyleSheet, TextInput, Text, View, Image } from 'react-native';

const handleLogin = () => {
    alert('Logado com successo!')
}

export default function Login() {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo.png')} />

            <View style={styles.input_container}>
                <TextInput style={styles.input} placeholder="Nome e Sobrenome" />
                <TextInput secureTextEntry={true} style={styles.input} placeholder="Senha" />
            </View>


            <Text onPress={() => { handleLogin() }} style={styles.button} >Pronto!</Text>
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
    logo: {
        width: 150,
        height: 150,
    },
    button: {
        textAlign: 'center',
        width: '60%',
        fontSize: 30,
        fontWeight: 'bold',
        backgroundColor: '#211612',
        color: '#fff',
        padding: 20,
        borderRadius: 25,
        overflow: 'hidden'
    },
    input_container: {
        width: '80%',
        alignItems: 'center',
        gap: 20,
    },
    input: {
        borderColor: '#211612',
        borderRadius: 18,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
        backgroundColor: '#fff',
        width: '80%',
        borderWidth: 5,
    }
});