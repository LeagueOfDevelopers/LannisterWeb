import {combineReducers} from 'redux';

import {
    createNavigationReducer,
} from 'react-navigation-redux-helpers';

import {AppNavigator} from '../components/AppNavigator';

const AppReducer = combineReducers({
    nav: createNavigationReducer(AppNavigator),
});

export default AppReducer;
