import { Text, TextInput, TouchableOpacity, View, ScrollView, KeyboardAvoidingView, Platform } from "react-native"
import { styles } from "./styles"
import { useState } from "react"
import { ButtonCustom } from "../../components/button-custom/button-custom"
import { router } from "expo-router"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Login = () => {
    // Armazenamento de valores
    const [username, setUsername] = useState("");
    const [senha, setSenha] = useState("");
    const [messageError, setMessageError] = useState("");
    const [mostrarSenha, setMostrarSenha] = useState(false);

    //console.log('username', username)

    const authentication = () => {
        if(username.length == 0){
            setMessageError("Campos obrigatórios")
            return;
        };
        if(senha.length == 0){
            setMessageError("Campos obrigatórios")
            return;
        };

        // User fixo
        if (username === "João da Silva" && senha === "123joao") {
            // Rota para ir para próxima pagina (catálogo dos produtos)
            router.push('/(tabs)/product-tabs');
        } else {
            setMessageError("Username ou senha inválidos")
        }

    };

    return (
        // Visualização dos campos com teclado em aberto
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding": undefined}
        style={styles.keyboard}
        >

        <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.container}>
                <View style={styles.contentTop} />
                <View style={styles.contentBottom} />
                <View style={styles.contentAbsolute}>

                    <Text style={styles.title}>Bem-vindo de volta!</Text>
                    <Text style={styles.subTitle}>Insira seus dados para entrar na sua conta.</Text>

                    <TouchableOpacity style={styles.cardInput}>
                        {messageError != "" && (
                            <Text style={styles.messageError}>{messageError}</Text>
                         )}
                         
                        <Text style={styles.styleInput}>Username</Text>
                        <TextInput 
                            style={styles.contentTextInput}
                            onChangeText={setUsername}
                            value={username}
                        />

                        <Text style={styles.styleInput}>Senha</Text>
                        <View style={styles.senhaContainer}>
                            <TextInput 
                                style={styles.contentTextInputSenha}
                                onChangeText={setSenha}
                                value={senha}
                                secureTextEntry={!mostrarSenha}
                            />
                            <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)} style={styles.iconeOlho}>
                                <Icon
                                    name={mostrarSenha ? "eye" : "eye-off"}
                                    size={24}
                                    color="gray"
                                />
                            </TouchableOpacity>
                        </View>

                        <ButtonCustom title="Entrar" onPress={authentication}/>
                    </TouchableOpacity>
                </View>
                </View>
        </ScrollView>
        </KeyboardAvoidingView>
    )
}
