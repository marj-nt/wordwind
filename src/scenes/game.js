import React from "react";
import { Dimensions, View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import CountDown from 'react-native-countdown-component';
import { ShakeEventExpo as ShakeEventExpo } from '@components/ShakeEventExpo.js'

import { withNavigation } from 'react-navigation'

import { shuffleWord as shuffleWord } from '@components/wordShuffle.js';
import { checkColor as checkColor } from '@components/checkColor.js';

import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import {gameStyles as gameStyles, gameColors as gameColors} from '@styles/game.js';

var TimerMixin = require('react-timer-mixin');




const gradientBottom = ['#B8EBFC', '#E3E1FF']

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
            randomWord: shuffleWord(this.props.route.params.category, this.props.route.params.savedSyllable),
            wordColor: 'white',
            score: initScore,
            duration: this.props.route.params.savedDuration,

            seconds: 0,
            fill: 0,
            timer: null,

            bg: checkColor(this.props.route.params.savedColor),
        };
        this.resetTimer = this.resetTimer.bind(this)
        this.increaseTimer = this.resetTimer.bind(this)
    }

    async UNSAFE_componentWillMount() {
        ShakeEventExpo.addListener(() => {
          //add your code here
          this.noPoint();
        });
       }

    UNSAFE_componentWillUnmount() {
        ShakeEventExpo.removeListener();
     }

    addPoint(gestureState) {
        this.setState({
            wordColor: gameColors.correctGreen,
            score: this.state.score + 1,
        })
        setTimeout(() => {
            this.setState({
                wordColor: 'white',
                randomWord: shuffleWord(this.props.route.params.category, this.props.route.params.savedSyllable),
            })
        }, 200);
    }

    noPoint() {
        this.setState({
            wordColor: 'red',
        })
        setTimeout(() => {
            this.setState({
                wordColor: 'white',
                randomWord: shuffleWord(this.props.route.params.category, this.props.route.params.savedSyllable),
            })
        }, 800);
    }

    // Swipe handlers
    onSwipeLeft(gestureState) {
        this.addPoint(gestureState)
    }
    
    onSwipeRight(gestureState) {
        this.addPoint(gestureState)
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
          
      return (
        <View>

            {/* TOP CONTAINER */}

            <GestureRecognizer
            onSwipeLeft={(state) => this.addPoint(state)}
            onSwipeRight={(state) => this.addPoint(state)}
            config={config}
            >
                <LinearGradient style={gameStyles.topContainer} colors={this.state.bg}>

                    {/* TIMER */}
                    <CountDown
                    style={gameStyles.timerFont}
                    until={5}
                    onFinish={() =>
                        this.props.navigation.navigate('Score', {
                            finalScore: this.state.score,
                            savedCategory: this.props.route.params.category,
                            outcome: 'success'
                        })
                    }
                    size={20}
                    timeToShow={['S']}
                    timeLabels={[]}
                    digitStyle={{backgroundColor: 'transparent'}}
                    digitTxtStyle={{color: 'white'}}
                    />

                    {/* DISPLAY WORD */}
                    <Text style={[gameStyles.wordFont, {color: this.state.wordColor}]}>{this.state.randomWord}</Text>

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