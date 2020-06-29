import React from "react";
import { Animated, Dimensions, View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { MyTooltip } from '@components/MyTooltip.js'
import * as Animatable from 'react-native-animatable';
import ProgressBarAnimated from 'react-native-progress-bar-animated';

import { withNavigation } from 'react-navigation'

import {tutorialStyles as tutorialStyles, tutorialColors as tutorialColors} from '@styles/tutorial.js';
import { msgArray as msgArray, dirArray as dirArray, disTopArray as disTopArray, disBotArray as disBotArray, 
    wordArray as wordArray, wordPosArray as wordPosArray, topArray as topArray, leftArray as leftArray } from '@components/tutorialArrays.js'

import overlay from '@assets/overlay.png';
import tutorialShake from '@assets/tutorial-shake.png';
import tutorialSwipe from '@assets/tutorial-swipe.png';

const gradientBlue = ['#4C39A1', '#000C87'];
const gradientBottom = ['#B8EBFC', '#E3E1FF'];
const gradientProgress = ['#FFFFFF', '#C1E4EF', '#45AFCF'];

var width = Dimensions.get('screen').width; //full width
var height = Dimensions.get('screen').height; //full width

const barWidth = Dimensions.get('screen').width / msgArray.length;;

const shakeAnim = {
    from: {
      transform: [{rotate: '-10deg'}],
    },
    to: {
      transform: [{rotate: '10deg'}],
    },
  };

const swipeAnim = {
    from: {
      left: 50,
    },
    to: {
      left: 200,
    },
  };


export default class TutorialComponent extends React.Component { 

    constructor(props) {
        super(props)
        this.state = {
            
            currentProgress: 0,
            //For progress bar
            barProgress: 2,
            barWidth: barWidth,
 
            word: wordArray[0],
            msg: msgArray[0],
            direction: dirArray[0],
            displayTop: disTopArray[0],
            displayBottom: disBotArray[0],

            wordPos: wordPosArray[0],
            top: topArray[0],
            left: leftArray[0],

            shakeDisplay: 'none',
            swipeDisplay: 'none',

            animationValue : new Animated.Value(barWidth),
            viewState : true

        }
        this.handlePress = this.handlePress.bind(this);
        this.nextScreen = this.nextScreen.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }

    handlePress() {
        this.toggleAnimation()
        this.handleNext()
    }

    toggleAnimation=()=>{

        if(this.state.viewState == true){
        Animated.timing(this.state.animationValue, {
          toValue : barWidth * this.state.barProgress,
          timing : 1500
        }).start(()=>{
          this.setState({viewState : false})
        });
        }
        else{
          Animated.timing(this.state.animationValue, {
            toValue : barWidth * this.state.barProgress,
            timing : 1500
          }).start(this.setState({viewState: true})
          );
        }
      }

    handleNext() {
        if(this.state.currentProgress < msgArray.length - 1) {
            this.increase.bind(this, 'progress', 20)
            this.nextScreen(this.state.currentProgress + 1)
        } else {
            this.props.navigation.navigate('Home');
        }
    }

    increase = (key, value) => {
        this.setState({
          [key]: this.state[key] + value,
        });
      }

    nextScreen(currentProgress) {
        if(currentProgress === 7) {
            this.setState({
                shakeDisplay: 'flex',
            })
        } else if(currentProgress === 8) {
            this.setState({
                shakeDisplay: 'none',
                swipeDisplay: 'flex',
            })
        } else if(currentProgress === 9) {
            this.setState({
                swipeDisplay: 'none',
            })
        }
        this.setState({
            msg: msgArray[currentProgress],
            direction: dirArray[currentProgress],
            displayTop: disTopArray[currentProgress],
            displayBottom: disBotArray[currentProgress],
            word: wordArray[currentProgress],

            wordPos: wordPosArray[currentProgress],
            top: topArray[currentProgress],
            left: leftArray[currentProgress],

            barProgress: this.state.barProgress + 1,
            currentProgress: this.state.currentProgress + 1,
        })
    }

    render() { 

        const animatedStyle = {
            width : this.state.animationValue,
          }

      return (
        <View>

        

            <TouchableOpacity activeOpacity={0.95} onPress={this.handlePress}>

            {/* TOP CONTAINER */}

                <LinearGradient style={tutorialStyles.topContainer} colors={gradientBlue}>

                <MyTooltip 
                    direction={this.state.direction} 
                    left={this.state.left} 
                    top={this.state.top} 
                    msg={this.state.msg}
                    displayTop={this.state.displayTop}
                    displayBottom={this.state.displayBottom}
                    />

                    {/* DISPLAY WORD */}
                    
                    <Text style={[tutorialStyles.wordFont, {zIndex: this.state.wordPos}]}>{this.state.word}</Text>
                 
                    <Image style={tutorialStyles.shadowOverlay} source={overlay}/>

                    <Animatable.Image style={[tutorialStyles.tutorialGestures, {display: this.state.shakeDisplay}]} 
                    source={tutorialShake} animation={shakeAnim} iterationCount={'infinite'} direction="alternate"
                    duration={150}>
                    </Animatable.Image>

                    <Animatable.Image style={[tutorialStyles.tutorialGestures, {display: this.state.swipeDisplay}]} 
                    source={tutorialSwipe} animation={swipeAnim} iterationCount={'infinite'}
                    duration={1250}>
                    </Animatable.Image>
                    
                </LinearGradient>

                

            {/* BOTTOM CONTAINER */}

            <LinearGradient style={tutorialStyles.bottomContainer} colors={tutorialColors.gradientBottom}>
            <View style={tutorialStyles.row}>
                <View style={tutorialStyles.recContainer}>

                    <TouchableOpacity style={[tutorialStyles.recButton, {zIndex: 2}]} onPress={this.onButtonPress}>
                        <Text>REC</Text>
                    </TouchableOpacity>

                </View>
                <View style={tutorialStyles.recContainer}>

                </View>
            </View>
            
            <Image style={tutorialStyles.shadowOverlay} source={overlay}/>
            
            </LinearGradient>
            
            <Animated.View style={[tutorialStyles.animatedBox, animatedStyle]} >
                <LinearGradient colors={gradientProgress}><Text style={{color: 'transparent',}}>''</Text></LinearGradient>
            </Animated.View>

            </TouchableOpacity>

      </View>
      );
    }
  }