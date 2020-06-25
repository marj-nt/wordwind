import React from "react";
import { Dimensions, View, Text, Button, Image, TouchableOpacity } from "react-native";
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {StackNavigator} from 'react-navigation';

const gradientBlueGreen = ['#70FAA8', '#A2B0FF'];
const buttonSalmon = '#EF8B8B';
const buttonBlue = '#7E99FF';
const buttonGrey = '#BDBDBD';

const pathTitle = '../assets/ww-title.png';
const pathIcon1 = '../assets/home-play-icon.png';
const pathIcon2 = '../assets/home-tutorial-icon.png';
const pathIcon3 = '../assets/home-options-icon.png';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const homeStyles = StyleSheet.create({
  mainBackground: {
    left: 0,
    top: 0,
    right: 0,
    width: width,
    height: height,
  },
  title: {
    top: 125,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonShape: {
    width: 330,
    height: 60,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Avenir Next Condensed',
    color: 'white',
    fontSize: 36,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 1,
  },
  playButton: {
    backgroundColor: buttonSalmon,
    top: 250,
  },
  tutorialButton: {
    backgroundColor: buttonBlue,
    top: 300,
  },
  optionsButton: {
    backgroundColor: buttonGrey,
    top: 350,
  },
  icons: {
    left: 24,
    position: 'absolute',
  },
});


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
