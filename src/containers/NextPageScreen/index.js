import React from 'react';
import PropTypes from 'prop-types';
import {Button, StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

const NextPageScreen = ({navigation}) => (
    <View style={styles.container}>
        <Button
            onPress={() => navigation.dispatch({type: 'Login'})}
            title="Log out"
        />
    </View>
);

NextPageScreen.propTypes = {
    navigation: PropTypes.object.isRequired, // eslint-disable-line
};

NextPageScreen.navigationOptions = {
    title: 'Log Out',
};

export default NextPageScreen;
