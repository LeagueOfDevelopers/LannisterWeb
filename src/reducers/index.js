import {combineReducers} from 'redux';
import {NavigationActions} from 'react-navigation';

import {AppNavigator} from '../components/AppNavigator';

const firstAction = AppNavigator.router.getActionForPathAndParams('Main');
const initialNavState = AppNavigator.router.getStateForAction(firstAction);

function nav(state = initialNavState, action) {
    let nextState;
    switch (action.type) {
    case 'Login':
        nextState = AppNavigator.router.getStateForAction(
            NavigationActions.back(),
            state
        );
        break;
    default:
        nextState = AppNavigator.router.getStateForAction(action, state);
        break;
    }

    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
}

const AppReducer = combineReducers({
    nav,
});

export default AppReducer;
