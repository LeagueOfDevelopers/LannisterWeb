import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Button, Text, View} from 'react-native';

import {navigate} from '../../actions/navigation';
import {TRACKING} from '../../constants/screens';
import styles from './styles';

const LoginScreen = ({dispatch}) => (
    <View style={styles.container}>
        <Text style={styles.welcome}>
      Screen A
        </Text>
        <Text style={styles.instructions}>
      This is great
        </Text>
        <Button
            onPress={() => dispatch(navigate({route: TRACKING}))}
            title="TRACKING"
        />
    </View>
);

LoginScreen.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

LoginScreen.navigationOptions = {
    title: 'Loging Screen',
};

export default connect()(LoginScreen);
