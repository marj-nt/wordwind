import React from "react";
import { Dimensions, View, Text, Button, Image, TouchableOpacity } from "react-native";
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {StackNavigator} from 'react-navigation';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { shuffleWord } from '../components/organisms/wordShuffle';

const gradientBlueGreen = ['#70FAA8', '#A2B0FF'];
const gradientBottom = ['#B8EBFC', '#E3E1FF'];
const gradientRec = ['#E7442E', '#E7442E'];
const shadowYellow = '#F8E71C';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const topHeight = height * 0.7
const bottomHeight = height * 0.3

const gradientBlue = ['#4C39A1', '#000C87'];

const gameStyles = StyleSheet.create({
  topContainer: {
    height: topHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    height: bottomHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wordFont: {
    fontFamily: 'Avenir Next Condensed',
    color: 'white',
    fontSize: 60,
    letterSpacing: 5,
    shadowColor: shadowYellow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.75,
    shadowRadius: 2,
    elevation: 1,
  },
  timerFont: {
    fontFamily: 'Avenir Next Condensed',
    color: 'white',
    fontSize: 25,
    position: 'absolute',
    top: 20,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  recButton: {
      backgroundColor: gradientRec[0],
      borderRadius: 100,
      width: 90,
      height: 90,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 20
  },
  recContainer: {
    width: 140,
    height: 140,
    borderWidth: 4,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  animatedCircle: {
    position: 'absolute',
    top: 5
  }
})



export default class GameComponent extends React.Component { 

    

    render() { 


      return (
        <View>

            {/* TOP CONTAINER */}

            <LinearGradient style={gameStyles.topContainer} colors={gradientBlue}>
                <Text style={gameStyles.timerFont}>30</Text>

                <Text style={gameStyles.wordFont}>Hello</Text>
            </LinearGradient>

            {/* BOTTOM CONTAINER */}

            <LinearGradient style={gameStyles.bottomContainer} colors={gradientBottom}>
            <View style={gameStyles.row}>
                <View style={gameStyles.recContainer}>
                    <AnimatedCircularProgress style={gameStyles.animatedCircle}
                    size={120}
                    width={10}
                    fill={100}
                    tintColor="#00e0ff"
                    onAnimationComplete={() => console.log('onAnimationComplete')}
                    backgroundColor="#3d5875" />

                    <TouchableOpacity style={gameStyles.recButton}>
                        <Text>REC</Text>
                    </TouchableOpacity>

                </View>
                <View style={gameStyles.recContainer}>
                    <AnimatedCircularProgress style={gameStyles.animatedCircle}
                    size={120}
                    width={10}
                    fill={100}
                    tintColor="#00e0ff"
                    onAnimationComplete={() => console.log('onAnimationComplete')}
                    backgroundColor="#3d5875" />

                    <TouchableOpacity style={gameStyles.recButton}>
                        <Text>REC</Text>
                    </TouchableOpacity>

                </View>
            </View>


            </LinearGradient>
      </View>
      );
    }
  }