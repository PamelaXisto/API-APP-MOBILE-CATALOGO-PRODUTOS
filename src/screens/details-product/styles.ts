import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    contentImage: {
        height: 320,
        width: 393,
        backgroundColor: '#DADADA33',
    },
    thumbnailProduct: {
        height: 300,
        width: 393,
        justifyContent: 'center',
        alignItems: 'center',
    },
    top: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-start",
        padding: 10,
    },
    contentDescription: {
        height: '100%',
        width: '90%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 20
    },
    contentRowList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
      fontSize: 25,
      fontWeight: "bold",
      paddingTop: 8,              
      borderTopColor: "#000",
    },
    description: {
        fontSize: 16,
        color: "#656565",
        marginTop: 16,
    },
    oldPrice: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#656565",
        textDecorationLine: "line-through",
        marginTop: 10,
    },
    newPrice: {
        fontSize: 24,
        color: "#B20000",
        fontWeight: "bold",
        marginTop: 10,
    },
    priceContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        marginTop: 10,
        gap: 15,
    },
})