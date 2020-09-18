import * as React from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';

import {store} from './config/store'

import Home from "./screens/home/Home";

class Index extends React.Component{
    render() {
        return(
            <Provider store={store} >
            <View>
                <Home />
            </View>
        )
    }
}

export default Index;