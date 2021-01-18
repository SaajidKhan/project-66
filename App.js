
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomNavigator} from '@react-navigation/bottom-tabs';

import FaceBookScreen from './screens/fb';
import InstaScreen from './screens/in';

export default class App extends React.Component {
      render(){
        return<AppContainer />;
      }
    
    
}
const TabNavigator =createBottomNavigator({
        FaceBook:{screens:FaceBookScreen},
        InstaGram:{screens:InstaScreen}
})



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
