// import HomeScreen from '../containers/HomeScreen';
import LoginScreen from '../containers/LoginScreen';
import MainScreen from '../containers/MainScreen';
import ProfileScreen from '../containers/ProfileScreen';

import {
    // HOME,
    LOGIN,
    MAIN,
    PROFILE,
} from '../constants/screens';

export default new Map([
    // [HOME, HomeScreen],
    [MAIN, MainScreen],
    [LOGIN, LoginScreen],
    [PROFILE, ProfileScreen],
]);
