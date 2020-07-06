import React from "react";
import { Animated, Dimensions, View, Text, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import CountDown from 'react-native-countdown-component';
import { ShakeEventExpo as ShakeEventExpo } from '@components/ShakeEventExpo.js';
import * as Animatable from 'react-native-animatable';

import { withNavigation } from 'react-navigation'

import { shuffleWord as shuffleWord } from '@components/wordShuffle.js';
import { checkColor as checkColor } from '@components/checkColor.js';
import { SoundComponent as SoundComponent } from '@components/SoundComponent.js';

import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import {gameStyles as gameStyles, gameColors as gameColors} from '@styles/game.js';
import {optionsStyles as optionsStyles } from '@styles/options.js';

import playButtonGrey from '@assets/play-button-grey.png';
import playButtonGreen from '@assets/play-button-green.png';

var TimerMixin = require('react-timer-mixin');

function timerStyle(duration) {
    var display = ['S']
    if(duration > 30) {
        display = ['M', 'S']
    }
    return display;
}


const gradientBottom = ['#B8EBFC', '#E3E1FF']

const MAXTIME = 5000;

export default class GameComponent extends React.Component { 

    intervalID = 0;

    constructor(props) {
        super(props);
        this.state = {
            randomWord: shuffleWord(this.props.route.params.category, this.props.route.params.savedSyllable),
            wordColor: 'white',
            score: 0,
            duration: this.props.route.params.savedDuration,
            clockStyle: timerStyle(this.props.route.params.savedDuration),

            second: 0,
            fill: 0,

            recTouchDisabled: false,
            recText: 'REC',
            playTouchDisabled: true,
            playImg: playButtonGrey,
            recColor: gameColors.gradientRec[0],
            barDisplays: 'none',

            playWidthValue : new Animated.Value(90),
            playTopValue : new Animated.Value(0),
            playViewState : true,

            bg: checkColor(this.props.route.params.savedColor),

            timerID: 0,
        };
        this.handlePlay = this.handlePlay.bind(this)
        this.playCheck = this.playCheck.bind(this)
        this.resetScore = this.resetScore.bind(this)
    }

    UNSAFE_componentWillMount() {
        ShakeEventExpo.addListener(() => {
          //add your code here
          this.noPoint();
        });
       }

    UNSAFE_componentWillUnmount() {
        ShakeEventExpo.removeListener();
     }

     onStart = () => {
        this._interval = setInterval(() => {
         this.setState({
           second: (this.state.second + 1),
        })
     }, 1);
   }

   _interval: any;

   resetScore = () => {
    this.setState({
        score: 0,
      });
   }

   onReset = () => {
    this.setState({
      second: 0,
    });
    clearInterval(this._interval);
    }

   onPause = () => {
    clearInterval(this._interval);
    }

    addPoint(gestureState) {
        this.setState({
            wordColor: gameColors.correctGreen,
            score: this.state.score + 1,
        })
        // SoundComponent.playSound();
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

    handlePlay() {
        
        if(this.state.playViewState == true){
            Animated.timing(this.state.playWidthValue, {
                toValue : 50,
                timing : 1500
            }).start(()=>{
                this.setState({playViewState : false})
            });
            Animated.timing(this.state.playTopValue, {
                toValue : -10,
                timing : 1500
            }).start(()=>{
                this.setState({playViewState : false})
            });

                this.setState({
                    recColor: 'lightgrey',
                    recTouchDisabled: true,
                    playImg: playButtonGrey,
                    barDisplays: 'flex-start',
                })
            
        }
        else{
            Animated.timing(this.state.playWidthValue, {
            toValue : 100,
            timing : 1500
            }).start(this.setState({playViewState: true})
            );
            Animated.timing(this.state.playTopValue, {
                toValue : 0,
                timing : 1500
                }).start(this.setState({playViewState: true})
                );

                this.setState({
                    recColor: gameColors.gradientRec[0],
                    recTouchDisabled: false,
                    playImg: playButtonGreen,
                    barDisplays: 'none',
                })
            
            
        }

        
        
    }

    resetPlay() {
        this.setState({
            playTouchDisabled: true,
            playImg: playButtonGrey,
        })
    }

    playCheck() {
        this.setState({
            playTouchDisabled: false,
            playImg: playButtonGreen,
        })
    }

    render() { 

        const config = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
          };     

          const animatedStyle = {
            width : this.state.playWidthValue,
            top: this.state.playTopValue,
          }

          const grow = {
            from: {
              height: 10,
              top: 30,
            },
            to: {
              height: 30,
              top: 50,
            },
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
                    id={this.props.route.params.id}
                    style={gameStyles.timerFont}
                    // until={this.props.route.params.savedDuration}
                    until={5}
                    onFinish={() => {
                        this.props.navigation.navigate('Score', {
                            finalScore: this.state.score,
                            savedCategory: this.props.route.params.category,
                            savedDuration: this.props.route.params.savedDuration,
                            id: this.props.route.params.id,
                        })
                        this.resetScore()
                    }}
                    size={20}
                    timeToShow={this.state.clockStyle}
                    timeLabels={[]}
                    separatorStyle={{color: 'white'}}
                    digitStyle={{backgroundColor: 'transparent'}}
                    digitTxtStyle={{color: 'white'}}
                    showSeparator
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
                    prefill={0}
                    fill={0}
                    duration={MAXTIME}
                    tintColor="#00e0ff"
                    // onAnimationComplete={}
                    backgroundColor="#3d5875"
                    ref={(ref) => this.circularProgress = ref}
                     />

                    <TouchableOpacity style={[gameStyles.recButton, {backgroundColor: this.state.recColor}]} disabled={this.state.recTouchDisabled}
                    onPressIn={() => {
                        this.circularProgress.animate(100, 5000);
                        this.onReset()
                        this.onStart()
                        this.resetPlay()
                        
                    }}
                    onPressOut={() => {
                        this.circularProgress.animate(0, 1);
                        this.onPause()
                        this.setState({recText: 'REDO',})
                        this.playCheck()
                    }}>
                        <Text style={gameStyles.recFont}>{this.state.recText}</Text>
                    </TouchableOpacity>

                </View>

                

                <TouchableOpacity onPress={() => {
                    this.handlePlay();
                    //Timeout for testing only
                    setTimeout(() => {this.handlePlay()}, this.state.second * 20); 
                }} 
                disabled={this.state.playTouchDisabled}>
                <View style={gameStyles.recContainer}>
                
                    <Animated.Image style={[gameStyles.playButtonImg, animatedStyle]}
                    source={this.state.playImg}>
                    </Animated.Image>

                    <View style={[gameStyles.animatedContainer, {display: this.state.barDisplays}]}>
                    <Animatable.View style={gameStyles.animatedSound} animation={grow} duration={500} iterationCount={'infinite'} direction="alternate">
                    </Animatable.View>
                    <Animatable.View style={gameStyles.animatedSound} animation={grow} duration={500} iterationCount={'infinite'} direction="alternate">
                    </Animatable.View>
                    <Animatable.View style={gameStyles.animatedSound} animation={grow} duration={500} iterationCount={'infinite'} direction="alternate">
                    </Animatable.View>
                    </View>

                </View>
                </TouchableOpacity>
                    
            </View>


            </LinearGradient>
      </View>
      );
    }
  }