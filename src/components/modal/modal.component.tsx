import React, {FC} from "react";
import {Modal, SafeAreaView, StyleSheet, View} from "react-native";
import {EFFECTS} from "../../rules/public-rules.api";
import {CustomButton} from "../primitives/button/custom-button";
import {Rules} from '../components.index';
import {BASE_PALETTE} from "../../palette/base_palette";

type RulesModalProps = {
    visibleState: boolean;
    toggleModal: () => void;
}

export const RulesModal: FC<RulesModalProps> = ({visibleState, toggleModal}) => {
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={visibleState}
            onRequestClose={toggleModal}
        >
            <SafeAreaView style={modalStyles.flex}>
                <View style={modalStyles.flex}>
                    <Rules cards={EFFECTS}/>
                    <View style={modalStyles.buttonContainer}>
                        <View style={modalStyles.buttonWrapper}>
                            <CustomButton label="Close rule list" onPress={toggleModal}/>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </Modal>
    );
}

const modalStyles = StyleSheet.create({
    flex: {
        flex: 1,
        backgroundColor: BASE_PALETTE.background,
    },
    buttonContainer: {
        display: "flex",
        alignItems: "center"
    },
    buttonWrapper: {
        width: "90%"
    }
})