import React, { useState } from 'react';
import {

    TouchableOpacity,
    View,
    Text
} from 'react-native';

import { useNavigation } from "@react-navigation/native";
import Popup from '../../Components/popup';



const home = () => {
    const [popupToggle, setPopUpToggle] = useState(false)
    const navigation = useNavigation()

    return (

        <View style={{ flex: 1, justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => navigation.navigate('CameraScreen')}>
                <View style={{ justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 30, marginHorizontal: 100, padding: 20 }}>
                    <Text>
                        {'Camera'}
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setPopUpToggle(!popupToggle)}>
                <View style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 30, marginHorizontal: 100, padding: 20 }}>
                    <Text>
                        {'Pop Up'}
                    </Text>
                </View>
            </TouchableOpacity>

            <Popup modalShown={popupToggle} closeModal={() => setPopUpToggle(!popupToggle)} />
        </View>

    );
};



export default home;
