import {FC} from "react"
import {TouchableOpacity, Text, View} from "react-native";
import {CustomButtonProps} from './signatures/custom-button-props';
import {CustomButtonsStyles} from "./styles/custom-button.styles";

/**
 * @description custom implementation of {@link TouchableOpacity} for project use
 * @param props {@link CustomButtonProps}
 * @returns typeof {@link FunctionComponent}
 */
export const CustomButton: FC<CustomButtonProps> = ({onPress, label}) => {
    return (
        <TouchableOpacity style={CustomButtonsStyles.cover} onPress={onPress}>
            <View style={CustomButtonsStyles.innerContainer}>
                <Text style={CustomButtonsStyles.text}>
                    {label}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

