import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createStackNavigator} from 'react-navigation';

import LoginScreen from '../LoginScreen';
import MainScreen from '../MainScreen';
import ProfileScreen from '../ProfileScreen';
import {addListener} from '../../lib/redux';

export const AppNavigator = createStackNavigator({
    Login: {screen: LoginScreen},
    Main: {screen: MainScreen},
    Profile: {screen: ProfileScreen},
});

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
