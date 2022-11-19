import { FC } from "react"
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { BASE_PALETTE } from "../../palette/base_palette";

type CustomButtonProps = {
    onPress: () => void
    label: string;
}

export const CustomButton: FC<CustomButtonProps> = ({ onPress, label }) => {
    return (
        <TouchableOpacity style={CustomButtonsStyles.cover} onPress={onPress}>
            <Text style={CustomButtonsStyles.text}>
                {label}
            </Text>
        </TouchableOpacity>
    );
}

const CustomButtonsStyles = StyleSheet.create({
    cover: {
        backgroundColor: BASE_PALETTE.primary,
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        
        elevation: 3,
    },
    text: {
        color: BASE_PALETTE.positive,
        fontWeight: "700",
        textTransform: "uppercase",
        fontSize: 18,
        textAlign: "center",
    }
})