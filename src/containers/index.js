// @flow
import React, {PureComponent} from 'react';
import {Provider} from 'react-redux';

import {createStore} from '../lib/store';
import HomeScreen from './HomeScreen';

const store = createStore();

class App extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <HomeScreen/>
            </Provider>
        );
    }
}

export default App;
