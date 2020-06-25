import React from "react";
import { Dimensions, View, Text, Button, Image, TouchableOpacity } from "react-native";
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {StackNavigator} from 'react-navigation';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import CountDown from 'react-native-countdown-component';

import { shuffleWord as shuffleWord } from '@components/wordShuffle.js';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import RNShake from 'react-native-shake';

import {gameStyles as gameStyles, gameColors as gameColors} from '@styles/game.js';


const gradientBlue = ['#4C39A1', '#000C87'];
const gradientGreen = ['green', 'white'];
const gradientBottom = ['#B8EBFC', '#E3E1FF']

var randomWord = shuffleWord();



export default class GameComponent extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
          randomWord: randomWord,
          background1: String(gradientBlue[0]),
          background2: String(gradientBlue[1]),
        };
      }

    // Swipe handlers
    onSwipeLeft(gestureState) {
    this.setState({randomWord: shuffleWord()});
    }
    
    onSwipeRight(gestureState) {
    this.setState({randomWord: shuffleWord()});
    }

    render() { 

        const config = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
          };        

          console.log(this.background1)
          console.log(this.background2)

      return (
        <View>

            {/* TOP CONTAINER */}

            <GestureRecognizer
            onSwipeLeft={(state) => this.onSwipeLeft(state)}
            onSwipeRight={(state) => this.onSwipeRight(state)}
            config={config}
            >
                <LinearGradient style={gameStyles.topContainer} colors={gradientBlue}>

                {/* TIMER */}
                <CountDown
                style={gameStyles.timerFont}
                until={30}
                onFinish={() => alert('Round over!')}
                size={20}
                timeToShow={['S']}
                timeLabels={[]}
                digitStyle={{backgroundColor: ''}}
                digitTxtStyle={'white'}
            />

                <Text style={gameStyles.wordFont}>{this.state.randomWord}</Text>
      </LinearGradient>
            </GestureRecognizer>


            {/* BOTTOM CONTAINER */}

            <LinearGradient style={gameStyles.bottomContainer} colors={gameColors.gradientBottom}>
            <View style={gameStyles.row}>
                <View style={gameStyles.recContainer}>
                    <AnimatedCircularProgress style={gameStyles.animatedCircle}
                    size={120}
                    width={10}
                    fill={0}
                    tintColor="#00e0ff"
                    onAnimationComplete={() => console.log('onAnimationComplete')}
                    backgroundColor="#3d5875" />

                    <TouchableOpacity style={gameStyles.recButton}
                    onPress={this.setText}>
                        <Text>REC</Text>
                    </TouchableOpacity>

                </View>
                <View style={gameStyles.recContainer}>

                </View>
            </View>


            </LinearGradient>
      </View>
      );
    }
  }