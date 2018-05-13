import {
    createNavigationReducer,
} from 'react-navigation-redux-helpers';

import {AppNavigator} from '../containers/AppNavigator';

export default createNavigationReducer(AppNavigator);
