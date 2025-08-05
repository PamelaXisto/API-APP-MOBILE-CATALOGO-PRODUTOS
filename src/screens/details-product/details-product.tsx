import { useNavigation } from "@react-navigation/native";
import { RootState } from "@/src/store";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";

export const DetailsProduct = () => {
  const navigation = useNavigation();
  const detailsProduct = useSelector(
    (state: RootState) => state.detailsProduct.details
  );
  console.log("detailsProduct", detailsProduct);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity
            onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={33} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.contentImage}>
        <Image
          style={styles.thumbnailProduct}
          source={{ uri: detailsProduct?.thumbnail }}
        />
      </View>

      <View style={styles.contentDescription}>
        <Text style={styles.title}>{detailsProduct?.title}</Text>

        {detailsProduct?.discountPercentage ? (
        <View style={styles.priceContainer}>
        <Text style={styles.newPrice}>
            R$ {(detailsProduct.price * (1 - detailsProduct.discountPercentage / 100)).toFixed(2).replace('.',',')}
        </Text>
        <Text style={styles.oldPrice}>R$ {detailsProduct.price.toFixed(2).replace('.',',')}</Text>
        </View>
    ) : (
        <Text>R$ {detailsProduct?.price.toFixed(2)}</Text>
    )}

        <Text style={styles.description}>{detailsProduct?.description}</Text>


      </View>
    </View>
  );
};
