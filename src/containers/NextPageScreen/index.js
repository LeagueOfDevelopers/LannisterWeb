import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Button, View} from 'react-native';

import {navigate} from '../../actions/navigation';
import {LOGIN} from '../../constants/screens';
import styles from './styles';

const NextPageScreen = ({dispatch}) => (
    <View style={styles.container}>
        <Button
            onPress={() => dispatch(navigate({route: LOGIN}))}
            title="LOGIN"
        />
    </View>
);

NextPageScreen.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

NextPageScreen.navigationOptions = {
    title: 'NEXT PAGE',
};

export default connect()(NextPageScreen);
