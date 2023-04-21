import React, { Component } from 'react';

import Constants from 'expo-constants';
import Welcomescreen from './screens/Welcomescreen';
import Menuscreen from './screens/Menuscreen';
//import Rectangle from './screens/Rectangle';
//import Rectanglef from './formula/Rectanglef';
import { Lobster_400Regular } from '@expo-google-fonts/lobster';
import {Ubuntu_500Medium } from '@expo-google-fonts/ubuntu';
import BottomTabNavigator from './components/BottomTabNavigator';

import * as Font from 'expo-font';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false,
    };
  }

  async loadFonts() {
    await Font.loadAsync({
      Lobster_400Regular: Lobster_400Regular,
      Ubuntu_500Medium: Ubuntu_500Medium
    });
    this.setState({ fontLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
  }

  render() {
    const { fontLoaded } = this.state;
    if (fontLoaded) {
      return <AppContainer />;
    }
    return null;
  }
}

// var AppNavigator = createSwitchNavigator({
//   Welcomescreen: Welcomescreen,
//   Menuscreen: Menuscreen,
//   Rectangle:Rectangle,
//   Rectanglef:Rectanglef

// });














const AppSwitchNavigator = createSwitchNavigator(
  {
    Dashboard: {
      screen: Welcomescreen
    },
    Contents:{
      screen:Menuscreen
    },
   BottomTab:{
      screen:BottomTabNavigator
    },
   

    // Rectangle:{
    //   screen:Rectangle
    // },
    //  Formulaone:{
    //    screen: Rectanglef
    //  }
  },
  {
    initialRouteName: "Dashboard"
  }
)

const AppContainer = createAppContainer(AppSwitchNavigator);






