import React, { useState } from 'react';
import {

    TouchableOpacity,
    View,
    Text
} from 'react-native';

import { useNavigation } from "@react-navigation/native";
import Modal from 'react-native-modal';

const popup = ({ modalShown, closeModal }) => {
    const navigation = useNavigation()
    return (
        <Modal isVisible={modalShown}>
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#fff' }}>
                <View style={{ flex: 1 }}>
                    <Text onPress={() => closeModal()}>I am the modal content!</Text>
                </View>
            </View>
        </Modal>

    );
};



export default popup;
