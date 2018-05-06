import {TabNavigator} from 'react-navigation';

import screensMap from '../../lib/screens';
import {HOME} from '../../constants/screens';

const tabBarScreens = [HOME];

const routeConfiguration = tabBarScreens.reduce((config, screen) => ({
    ...config,
    [screen.key]: {screen: screensMap.get(screen)},
}), {});

const tabBarConfiguration = {};

export const TabBar = TabNavigator(routeConfiguration, tabBarConfiguration);
