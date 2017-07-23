import React from 'react';
import {
  AppRegistry,
  Text,
  StyleSheet,
  Button,
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    );
  }
}

class Chats extends React.Component {
  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Msg', { item: 'item'})}
        title="Go to msg"
      />
    );
  }
}

class Msg extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props.navigation.state)
    return (
      <Text>Msg page {this.props.navigation.state.params.item}</Text>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});

const ChatStack= StackNavigator({
  Chat: {
    screen: Chats,
    navigationOptions: {
     header: null,
    }
  },

  Msg: {
    screen: Msg,
    navigationOptions: ({ navigation}) => ({
      title: `${navigation.state.params.item}`,
      tabBarVisible: false
    })
  },
});

const MyApp = TabNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Chat: {
    screen: ChatStack,
    path: "",
  },
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});


AppRegistry.registerComponent('SimpleApp', () => MyApp);
