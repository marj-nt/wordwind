import React from "react";
import { Dimensions, View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { MyTooltip } from '@components/MyTooltip.js'

import { withNavigation } from 'react-navigation'
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import {tutorialStyles as tutorialStyles, tutorialColors as tutorialColors} from '@styles/tutorial.js';

import overlay from '@assets/overlay.png'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const gradientBlue = ['#4C39A1', '#000C87'];
const gradientBottom = ['#B8EBFC', '#E3E1FF']

const msgArray = ['Welcome to WordWind!\n\nTest your reading skills by having other players guess what you’re saying - backwards!\n\n(tap anywhere to continue)',
                'Let’s start simple: Try to figure out how to say “FUN” backwards!',
                'Let’s start simple Once you’re ready to read out loud, hold the red record button and say NUFFF!',
                'Release when you are done to end the recording',
                'Stumbled and want to try again?\n\nRecord until you get it right!',
                'Once you’re ready, tap the play button to let your friends hear in reverse so it sounds “normal”!',
                'The goal is for everyone to guess the original words before time runs out!',
                'If no one can guess it\n\nSHAKE\n\nthe device for a new word',
                'If someone gets it right\n\nSWIPE either left or right to get a point!',
                'TIPS\n\nThink of breaking up bigger words into syllables!\n\n(Or turn  on syllable help in options)',
                'Don’t be afraid to sound silly and over-pronounce!',
                ]

const dirArray = [
    'up', 'up', 'up', 'down', 'down', 'down', 'down', 'down', 'down', 'down', 'down'
]

const disTopArray = [
    'block', 'block', 'block', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none',
]

const disBotArray = [
    'none', 'none', 'none', 'block', 'block', 'block', 'block', 'block', 'block', 'block'
]

export default class TutorialComponent extends React.Component { 

    constructor(props) {
        super(props)
        this.state = {
            word: 'WORD',
            progress: 0,
            left: width / 3.5,
            top: 271,

            msg: msgArray[0],
            direction: dirArray[0],
            displayTop: disTopArray[0],
            displayBottom: disBotArray[0],

        }
        this.testPrint = this.testPrint.bind(this);
        this.nextScreen = this.nextScreen.bind(this);
    }

    testPrint() {
        if(this.state.progress < msgArray.length - 1) {
            this.nextScreen(this.state.progress + 1)
        } else {
            this.props.navigation.navigate('Home');
        }
    }

    nextScreen(progress) {
        this.setState({
            msg: msgArray[progress],
            direction: dirArray[progress],
            displayTop: disTopArray[progress],
            displayBottom: disBotArray[progress],
            progress: this.state.progress + 1,
        })
    }

    render() { 

      return (
        <View>

            <TouchableOpacity activeOpacity={0.95} onPress={this.testPrint}>

            {/* TOP CONTAINER */}

                <LinearGradient style={tutorialStyles.topContainer} colors={gradientBlue}>

                    {/* DISPLAY WORD */}

                    <MyTooltip 
                    direction={this.state.direction} 
                    left={this.state.left} 
                    top={this.state.top} 
                    msg={this.state.msg}
                    displayTop={this.state.displayTop}
                    displayBottom={this.state.displayBottom}
                    />
                    
                    <Text style={tutorialStyles.wordFont}>{this.state.word}</Text>
                 
                    <Image style={tutorialStyles.shadowOverlay} source={overlay}/>
                    
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

            </TouchableOpacity>
      </View>
      );
    }
  }