import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';

import screensMap from '../../lib/screens';
import {addListener} from '../../lib/redux';
import {MAIN, LOGIN, PROFILE} from '../../constants/screens';

const tabBarScreens = [MAIN, LOGIN, PROFILE];

const getRouteConfigForTabBarStacks = (tabScreen) => {
    const routeConfigs = {};
    screensMap.forEach((screen, {key}) => routeConfigs[key] = {screen});
    tabBarScreens.forEach((screen) => {
        if (tabScreen !== screen) { delete routeConfigs[screen.key]; }
    });
    return routeConfigs;
};

const routeConfigForTabBar = {};
tabBarScreens.forEach((screen) => {
    routeConfigForTabBar[screen.key] = createStackNavigator(getRouteConfigForTabBarStacks(screen));
});

export const AppNavigator = createBottomTabNavigator(routeConfigForTabBar);

class AppWithNavigationState extends React.Component {
  static propTypes = {
      dispatch: PropTypes.func.isRequired,
      nav: PropTypes.object.isRequired, // eslint-disable-line
  };

  render() {
      const {dispatch, nav} = this.props;
      return (
          <AppNavigator
              navigation={{
                  dispatch,
                  state: nav,
                  addListener,
              }}
          />
      );
  }
}

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
