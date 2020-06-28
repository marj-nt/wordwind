import React from "react";
import { Dimensions, View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { MyTooltip } from '@components/MyTooltip.js'

import { withNavigation } from 'react-navigation'
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import {tutorialStyles as tutorialStyles, tutorialColors as tutorialColors} from '@styles/tutorial.js';
import { msgArray as msgArray, dirArray as dirArray, disTopArray as disTopArray, disBotArray as disBotArray, 
    wordArray as wordArray, wordPosArray as wordPosArray, topArray as topArray, leftArray as leftArray } from '@components/tutorialArrays.js'

import overlay from '@assets/overlay.png'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const gradientBlue = ['#4C39A1', '#000C87'];
const gradientBottom = ['#B8EBFC', '#E3E1FF']

export default class TutorialComponent extends React.Component { 

    constructor(props) {
        super(props)
        this.state = {
            
            progress: 0,
            
            word: wordArray[0],
            msg: msgArray[0],
            direction: dirArray[0],
            displayTop: disTopArray[0],
            displayBottom: disBotArray[0],

            wordPos: wordPosArray[0],
            top: topArray[0],
            left: leftArray[0],

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
            word: wordArray[progress],

            wordPos: wordPosArray[progress],
            top: topArray[progress],
            left: leftArray[progress],

            progress: this.state.progress + 1,
        })
    }

    render() { 

      return (
        <View>

        

            <TouchableOpacity activeOpacity={0.95} onPress={this.testPrint}>

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