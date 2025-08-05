//import { router } from "expo-router"
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles"


export interface ButtonCustomProps {
  title: string;
  onPress: () => void;
};

export const ButtonCustom = ({title, onPress}: ButtonCustomProps) => {
    return (
        <TouchableOpacity
        onPress={onPress}
        style={styles.button}>
            <Text style={styles.titleButton}>{title}</Text>
        </TouchableOpacity>
    );
};
