import React from 'react';
import {
  AppRegistry,
  Text,
  Button,
  View,
} from 'react-native';

import ScreenA from './components/screenA';
import ScreenB from './components/screenB';

import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';

class MyHomeScreen extends React.Component {
  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    );
  }
}

const MainNavigator = StackNavigator({
  ScreenA: { screen: ScreenA },
  ScreenB: { screen: ScreenB },
});

const MyApp = DrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Notifications: {
    screen: MainNavigator,
  },
});


AppRegistry.registerComponent('SimpleApp', () => MyApp);
