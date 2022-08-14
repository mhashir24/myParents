import React, { useEffect } from 'react';

import {
    View,
} from 'react-native';

import { useNavigation } from "@react-navigation/native";


import CameraComponent from '../../Components/Camera';

const CameraScreen = ({ }) => {
    

    return (

        <View style={{ flex: 1 }}>
            <CameraComponent abcprop={'Hashir'}/>
        </View>

    );
};



export default CameraScreen
