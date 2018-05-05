// @flow

import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';

import Home from '../../components/home';
import styles from './styles';


const titles = ['jambul', 'ermagambet'];

class HomeScreen extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <Home
                    titles={titles}
                />
            </View>
        );
    }
}

export default connect()(HomeScreen);

