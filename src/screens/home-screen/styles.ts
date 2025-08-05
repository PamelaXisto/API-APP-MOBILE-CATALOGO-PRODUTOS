import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    scrollContent: {
        flex: 1,
    },
    keyboard: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    contentTop: {
        width: "100%",
        height: "50%",
        backgroundColor: "#2567E8",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 70,
    },
    contentBottom: {
        width: "100%",
        height: "50%",
        backgroundColor: "#fff",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    contentAbsolute: {
        position: "absolute",
        width: "90%",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        height: '39%',
        color: 'white',
        fontSize: 32,
        fontWeight: 600,
        marginBottom: 18,
    },
    subTitle: {
        height: '19%',
        color: 'white',
        fontSize: 16,
        marginBottom: 35,
    },
    cardInput: {
        height: 306,
        width: 334,
        backgroundColor: 'white',
        borderColor: '#D3D3D3',
        borderWidth: 1,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    styleInput:{
        width: '90%',
        color: 'black',
        fontWeight: 600,
        marginBottom: 8,
        marginTop: 19,
    },
    contentTextInput: {
        height: 40,
        width:'90%',
        borderWidth: 1,
        borderColor: '#D3D3D3',
        borderRadius: 7,
        paddingLeft: 14,
    },
    contentTextInputSenha: {
        height: 40,
        width:'100%',
        borderWidth: 1,
        borderColor: '#D3D3D3',
        borderRadius: 7,
        paddingLeft: 14,
    },
    senhaContainer: {
        position: 'relative',
        width: '90%',
        justifyContent: 'center',
    },
    iconeOlho: {
        position: 'absolute',
        right: 10,
    },
    messageError: {
        color: '#E63535',
        marginTop: 10,
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 14,
        padding: 10,
        borderRadius: 8,
        }
})