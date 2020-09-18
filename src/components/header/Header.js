import React from 'react';
import { Text, View } from 'react-native';

import {headerStyles as styles} from "./styles";

class Header extends React.Component{

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.subtitle}>Which type of player do you want?</Text>
                <View style={styles.line}/>
                <Text style={styles.title}>Football Picker</Text>
            </View>
        )
    }
}

export default Header;