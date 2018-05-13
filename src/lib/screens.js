import HomeScreen from '../containers/HomeScreen';
import LoginScreen from '../containers/LoginScreen';
import TrackingScreen from '../containers/TrackingScreen';
import ProfileScreen from '../containers/ProfileScreen';

import {
    HOME,
    LOGIN,
    TRACKING,
    PROFILE,
    NEXTPAGE,
} from '../constants/screens';
import NextPageScreen from '../containers/NextPageScreen';

export default new Map([
    [HOME, HomeScreen],
    [TRACKING, TrackingScreen],
    [LOGIN, LoginScreen],
    [PROFILE, ProfileScreen],
    [NEXTPAGE, NextPageScreen],
]);
