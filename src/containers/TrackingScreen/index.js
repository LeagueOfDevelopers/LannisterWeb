import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {StyleSheet, View, Button} from 'react-native';
import {NavigationActions} from 'react-navigation';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

const TrackingScreen = ({goToLogin}) => (
    <View style={styles.container}>
        <Button
            onPress={goToLogin}
            title="Логин"
        />
    </View>
);

TrackingScreen.propTypes = {
    goToLogin: PropTypes.shape.isRequired,
};

TrackingScreen.navigationOptions = {
    title: 'Tracking Screen',
};

const mapDispatchToProps = dispatch => ({
    goToLogin: () =>
        dispatch(NavigationActions.navigate({routeName: 'Next'})),
});

export default connect(null, mapDispatchToProps)(TrackingScreen);
