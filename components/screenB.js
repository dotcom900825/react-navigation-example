import React from 'react';
import {
  Button,
  View,
} from 'react-native';

const ScreenB = ({navigation}) => (
  <View>
    <Button title="go to screenA" onPress={ () => navigation.navigate('ScreenA', { data: "data" }) }/>
  </View>
)

export default ScreenB;
