import React from "react";
import { Dimensions, View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import CountDown from 'react-native-countdown-component';

import { withNavigation } from 'react-navigation'

import { shuffleWord as shuffleWord } from '@components/wordShuffle.js';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import {gameStyles as gameStyles, gameColors as gameColors} from '@styles/game.js';

var TimerMixin = require('react-timer-mixin');


const gradientBlue = ['#4C39A1', '#000C87'];
const gradientGreen = ['green', 'white'];
const gradientBottom = ['#B8EBFC', '#E3E1FF']

var randomWord = shuffleWord();
var initScore = 0;

const MAXTIME = 5000;
var second = 0;

var countdown;

function startCount() {
    second = 0;
    countdown = setInterval(function() {
        second += 1;
        console.log(second * 1000)
    }, 1000);
}


function startStop() {
    clearInterval(countdown);
    return second * 1000;
}

export default class GameComponent extends React.Component { 

    intervalID = 0;

    constructor(props) {
        super(props);
        this.state = {
          randomWord: randomWord,
          score: initScore,

          background1: String(gradientBlue[0]),
          background2: String(gradientBlue[1]),
          seconds: 0,
          fill: 0,
          timer: null,
        };
        this.resetTimer = this.resetTimer.bind(this)
        this.increaseTimer = this.resetTimer.bind(this)
    }

    // Swipe handlers
    onSwipeLeft(gestureState) {
    this.setState({
        randomWord: shuffleWord(),
        score: this.state.score + 1,
    });
    }
    
    onSwipeRight(gestureState) {
    this.setState({
        randomWord: shuffleWord(),
        score: this.state.score + 1,
    });
    }

    increaseTimer = () => {
        // this.setState({
        //     timer:setInterval(function() {
        //         console.log('hi')
        //     }, 1000)
        // }) = 
        // startCount();
    }

    resetTimer = () => {
        // var stored 
        // stored = startStop();
        // this.setState({seconds: stored});
        // console.log(this.state.seconds)

    }

    render() { 

        const config = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
          };        
          var circleInterval = MAXTIME / 100;

          

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
                    until={10}
                    onFinish={() => {
                        alert('Round finished!')
                        this.props.navigation.navigate('Score', {
                            finalScore: this.state.score
                        })
                    }
                    }
                    size={20}
                    timeToShow={['S']}
                    timeLabels={[]}
                    digitStyle={{backgroundColor: ''}}
                    digitTxtStyle={'white'}
                    />

                    {/* DISPLAY WORD */}
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
                    fill={this.state.fill}
                    duration={MAXTIME}
                    tintColor="#00e0ff"
                    onAnimationComplete={() => console.log('onAnimationComplete')}
                    backgroundColor="#3d5875" />

                    <TouchableOpacity style={gameStyles.recButton} onPress={this.onButtonPress}
                    onPressIn={this.increaseTimer.bind(this)} onPressOut={this.resetTimer.bind(this)}>
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