import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
card: {
  flex: 1,
  margin: 8,
  backgroundColor: "#fff",
  borderRadius: 8,
  padding: 10,
  elevation: 4,
  borderWidth: 1,        
  borderColor: "#BDBDBD",     
},
  thumbnail: {
    width: "100%",
    height: 200,
    borderRadius: 6,
},
    title: {
      fontSize: 23,
      fontWeight: "bold",
      marginTop: 8,
      paddingTop: 8,              
      borderTopWidth: 1,          
      borderTopColor: "#BDBDBD",
},
  
  description: {
    fontSize: 16,
    color: "#656565",
    marginTop: 4,
},
  price: {
    fontWeight: "bold",
},
  oldPrice: {
    fontSize: 20,
    color: "#888",
    textDecorationLine: "line-through",
    marginRight: 8,
},
  newPrice: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
},
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 8,
    gap: 8,
},
  listContainer: {
    paddingHorizontal: 8,
    paddingBottom: 16,
  },
});
