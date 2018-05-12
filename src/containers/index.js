// @flow
import React, {PureComponent} from 'react';
import {Provider} from 'react-redux';

import {createStore} from '../lib/store';

import AppWithNavigationState from '../components/AppNavigator';

const store = createStore();

class App extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState/>
            </Provider>
        );
    }
}

export default App;
