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
    maxWidth: "47%", 
  },
  thumbnail: {
    width: "100%",
    height: 140,
    borderRadius: 6,
    resizeMode: "contain",
  },
  borderImage: {
    height: 1,
    backgroundColor: "#D3D3D3",
    width: "100%",
    marginVertical: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
  description: {
    fontSize: 12,
    color: "#656565",
    marginTop: 4,
  },

  price: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 4,
  },

  oldPrice: {
    fontSize: 14,
    color: "#888",
    textDecorationLine: "line-through",
  },

  newPrice: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
  },

  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 8,
    gap: 6,
  },

  listContainer: {
    paddingHorizontal: 8,
    paddingBottom: 16,
    gap: 10,
  },
});
