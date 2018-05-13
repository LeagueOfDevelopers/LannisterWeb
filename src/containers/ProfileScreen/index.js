import React from 'react';
import {connect} from 'react-redux';
import {Text, View} from 'react-native';

import styles from './styles';

const ProfileScreen = () => (
    <View style={styles.container}>
        <Text style={styles.welcome}>
            Profile Screen
        </Text>
    </View>
);

ProfileScreen.navigationOptions = {
    title: 'Profile Screen',
};

export default connect()(ProfileScreen);
