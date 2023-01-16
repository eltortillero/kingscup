import React, { FC } from "react";
import { Modal, SafeAreaView, StyleSheet, View } from "react-native";
import { EFFECTS } from "../../rules/public-rules.api";
import { CustomButton } from "../primitives/button/custom-button";
import { Rules } from '../components.index';

type RulesModalProps = {
    visibleState: boolean;
    toggleModal: () => void;
}

export const RulesModal: FC<RulesModalProps> = ({ visibleState, toggleModal }) => {
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={visibleState}
            onRequestClose={toggleModal}
        >
            <SafeAreaView style={modalStyles.flex1}>
                <View style={modalStyles.flex1}>
                    <Rules cards={EFFECTS} />
                    <View style={modalStyles.buttonContainer}>
                        <View style={modalStyles.buttonWrapper}>
                         <CustomButton  label="Cerrar lista de reglas" onPress={toggleModal} />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </Modal>
    );
}

const modalStyles = StyleSheet.create({
    flex1: {
        flex: 1
    },
    buttonContainer: {
        display:"flex",
        alignItems:"center"
    },
    buttonWrapper: {
        width:"90%"
    }
})