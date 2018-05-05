import React, {PureComponent} from 'react';
import {
    View,
    ScrollView,
    Text,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform,
    Animated,
    Easing,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Touchable = Platform.select({
    ios: TouchableOpacity,
    android: TouchableNativeFeedback,
});

class Home extends PureComponent {
    static propTypes = {
        titles: PropTypes.arrayOf(PropTypes.string).isRequired,
    }

    state = {
        snippetOffset: new Animated.Value(0),
    }

    render() {
        const {titles} = this.props;
        return (
            <View style={[styles.container]}>
                <ScrollView scrollsToTop >
                    {titles.map(this._renderSnippet)}
                </ScrollView>
            </View>
        );
    }

    _renderSnippet = (title) => {
        const {snippetOffset} = this.state;
        const textColor = snippetOffset.interpolate({
            inputRange: [0, 20, 40],
            outputRange: ['black', 'green', 'red'],
        });
        return (
            <Animated.View style={[styles.snippet, {marginLeft: snippetOffset}]} key={title}>
                <Animated.Text
                    style={[
                        styles.snippetTitle,
                        {
                            marginLeft: snippetOffset,
                            color: textColor,
                        },
                    ]}
                >
                    {title}
                </Animated.Text>
                <Touchable onPress={this._onSnippetPress} >
                    <View style={styles.snippetButton}>
                        <Text style={[styles.snippetButtonTitle]}>
                            button
                        </Text>
                    </View>
                </Touchable>
            </Animated.View>
        );
    }

    _onSnippetPress = () => {
        this._animateSnippet();
    }

    _animateSnippet = () => Animated.spring(this.state.snippetOffset, {
        toValue: 40,
        duration: 300,
        easing: Easing.elastic,
    }).start()
}

export default Home;

