import React from "react";
import { View, FlatList, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { money } from "../../utils/money";
import { calculatePercent } from "../../utils/calculate-percent";
import { useDispatch } from "react-redux";
import { setDetailsProduct } from "@/src/store/slices/details-product-slice";
import { router } from "expo-router";

export default function CatalogoPageScreen({ products }) {
  const dispatch = useDispatch();

  const renderItem = ({ item }) => {
    const temDesconto = !!item.discountPercentage;
    const precoComDesconto = temDesconto
      ? calculatePercent(item.price, item.discountPercentage)
      : item.price;

    const handlePressThumbnail = () => {
      dispatch(setDetailsProduct(item));
      router.navigate("/(stacks)/details-product");
    };

    return (
      <View style={styles.card}>
        <TouchableOpacity onPress={handlePressThumbnail}>
          <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
        </TouchableOpacity>

        <View style={styles.borderImage} />

        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>



        {temDesconto ? (
          <View style={styles.priceContainer}>
            <Text style={styles.newPrice}>{money(precoComDesconto)}</Text>
            <Text style={styles.oldPrice}>{money(item.price)}</Text>
          </View>
        ) : (
          <Text style={styles.price}>{money(item.price)}</Text>
        )}
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        numColumns={2}
      />
    </View>
  );
}
