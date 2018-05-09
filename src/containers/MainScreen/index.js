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

const MainScreen = ({lal}) => (
    <View style={styles.container}>
        <Button
            onPress={lal}
            title="Пойти нахуй"
        />
    </View>
);

MainScreen.propTypes = {
    lal: PropTypes.func.isRequired, // eslint-disable-line
};

MainScreen.navigationOptions = {
    title: 'Home Screen',
};

const mapDispatchToProps = dispatch => ({
    lal: () =>
        dispatch(NavigationActions.navigate({routeName: 'Login'})),
});

export default connect(null, mapDispatchToProps)(MainScreen);
