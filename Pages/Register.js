import { StyleSheet, TextInput, Text, View, Image } from 'react-native';

const handleRegister = () => {
    alert('dados enviados! putao')
}

export default function Register() {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo.png')} />

            <TextInput style={styles.input} placeholder="Nome e Sobrenome" />
            <TextInput style={styles.input} placeholder="E-mail" />
            <TextInput secureTextEntry={true} style={styles.input} placeholder="Senha" />
            <TextInput secureTextEntry={true} style={styles.input} placeholder="Confirme sua senha" />

            <Text onPress={() => { handleRegister() }} style={styles.button} >Pronto!</Text>
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