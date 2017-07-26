import React from 'react';
import {
  Button,
  View,
} from 'react-native';

const ScreenA = ({navigation}) => (
  <View>
    <Button title="go to screenB" onPress={ () => navigation.navigate('ScreenB', { data: "data" }) }/>
  </View>
)

export default ScreenA;
