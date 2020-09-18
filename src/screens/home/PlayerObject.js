import * as React from 'react';
import {View, Text, Platform, TouchableOpacity, TouchableNativeFeedback} from 'react-native';

import {Icon} from '../../components'
import {colors} from "../../config/colors";

import {playerObjectStyles as styles} from './styles'

class PlayerObject extends React.Component {
    render() {
        const TouchableComponent = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

        const countryName = 'some players';

        return (
            <TouchableComponent style={styles.container}>
                <View style={styles.contentContainer}>
                    <View style={styles.playerFlag}/>
                    <Text style={styles.playerName}>{countryName}</Text>

                    <Icon name='arrow' tintColor={colors.text_color}/>
                </View>
            </TouchableComponent>
        );
    }
}

export default PlayerObject;