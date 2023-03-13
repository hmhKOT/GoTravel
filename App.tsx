/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from 'react';
import type {PropsWithChildren} from 'react';
import Login from './components/login/login';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

export default class App extends Component{
  render(){
  return (
    <View><Login></Login></View>
  );
};
};

