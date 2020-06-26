import React from "react";
import { Dimensions, View, Text, Button, Image, TouchableOpacity } from "react-native";
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {StackNavigator} from 'react-navigation';

import { homeStyles as homeStyles } from '@styles/home.js'

const gradientBlueGreen = ['#70FAA8', '#A2B0FF'];

const pathTitle = '../assets/ww-title.png';
const pathIcon1 = '../assets/home-play-icon.png';
const pathIcon2 = '../assets/home-tutorial-icon.png';
const pathIcon3 = '../assets/home-options-icon.png';

export default class HomeComponent extends React.Component { 
    render() { 
      return (
        <View>
        <LinearGradient style={homeStyles.mainBackground} colors={gradientBlueGreen}>
        <Image style={homeStyles.title} source={require(pathTitle)}/>
        <TouchableOpacity style={[homeStyles.buttonShape, homeStyles.playButton]}>
          <Image style={homeStyles.icons} source={require(pathIcon1)}/>
          <Text style={homeStyles.buttonText}>PLAY</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[homeStyles.buttonShape, homeStyles.tutorialButton]}>
          <Image style={homeStyles.icons} source={require(pathIcon2)}/>
          <Text style={homeStyles.buttonText}>TUTORIAL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[homeStyles.buttonShape, homeStyles.optionsButton]}>
          <Image style={homeStyles.icons} source={require(pathIcon3)}/>
          <Text style={homeStyles.buttonText}>OPTIONS</Text>
        </TouchableOpacity>
        </LinearGradient>
        </View>
      );
    }
  }
