import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {View, Button} from 'react-native';
import {navigate} from '../../actions/navigation';
import {NEXTPAGE} from '../../constants/screens';

import styles from './styles';

const TrackingScreen = ({dispatch}) => (
    <View style={styles.container}>
        <Button
            onPress={() => dispatch(navigate({route: NEXTPAGE}))}
            title="NEXT PAGE"
        />
    </View>
);

TrackingScreen.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

TrackingScreen.navigationOptions = {
    title: 'Tracking Screen',
};

export default connect()(TrackingScreen);
