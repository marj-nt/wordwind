import React from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet, Dimensions, Image, } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { withNavigation } from 'react-navigation'
import * as Animatable from 'react-native-animatable';

import iconPath from '@assets/score-mic.png'
import bannerPath from '@assets/score-banner.png'

import { scoreStyles as scoreStyles } from '@styles/score.js'

const gradientBlueGreen = ['#70FAA8', '#A2B0FF'];

const upAndDown = {
  from: {
    top: 30,
  },
  to: {
    top: 20,
  },
};

class ScoreComponent extends React.Component {
    render() {
      return (
        <View>
          <LinearGradient colors={gradientBlueGreen}>

          {/*Animate floating banner*/}
          <Animatable.View animation={upAndDown} iterationCount={'infinite'} direction="alternate">
            <Image style={scoreStyles.imgBanner} source={bannerPath}/>
          </Animatable.View>

          <View style={scoreStyles.mainBackground}>

            <Animatable.View style={scoreStyles.whiteBackground} animation='fadeInUp' onTransitionEnd={scoreStyles.whiteBackground}>
            

              <Image style={scoreStyles.imgMic} source={iconPath}/>

       
                <Text style={scoreStyles.successText}>Success!</Text>
        
          
                <Text style={scoreStyles.bodyText}>Your quick and skilled reading helped you conquer {this.props.route.params.finalScore} words!</Text>
            

              <TouchableOpacity style={scoreStyles.playButtons} onPress={() => {this.props.navigation.navigate('Game')}}>
                <Text>Play {this.props.route.params.savedCategory} again!</Text>
              </TouchableOpacity>

              <TouchableOpacity style={scoreStyles.playButtons} onPress={() => {this.props.navigation.navigate('Categories')}}>
                <Text>Play another category</Text>
              </TouchableOpacity>

            
            </Animatable.View>


            

          </View>

          </LinearGradient>
        
        </View>
      );
    }
  }

export default ScoreComponent;