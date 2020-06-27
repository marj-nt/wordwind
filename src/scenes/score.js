import React from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet, Dimensions, Image, } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { withNavigation } from 'react-navigation'

import { scoreStyles as scoreStyles } from '@styles/score.js'

const gradientBlueGreen = ['#70FAA8', '#A2B0FF'];

const iconPath = '../assets/score-mic.png';
const bannerPath = '../assets/score-banner.png';

class ScoreComponent extends React.Component {
    render() {
      return (
        <View>
          <LinearGradient colors={gradientBlueGreen}>

          <Image style={scoreStyles.imgBanner} source={require(bannerPath)}/>

          <View style={scoreStyles.mainBackground}>

            <View style={scoreStyles.whiteBackground}>

              <Image style={scoreStyles.imgMic} source={require(iconPath)}/>

       
                <Text style={scoreStyles.successText}>Success!</Text>
        
          
                <Text style={scoreStyles.bodyText}>Your quick and skilled reading helped you conquer {this.props.route.params.finalScore} words!</Text>
            

              <TouchableOpacity style={scoreStyles.playButtons} onPress={() => {this.props.navigation.navigate('Game')}}>
                <Text>Play {this.props.route.params.savedCategory} again!</Text>
              </TouchableOpacity>

              <TouchableOpacity style={scoreStyles.playButtons} onPress={() => {this.props.navigation.navigate('Categories')}}>
                <Text>Play another category</Text>
              </TouchableOpacity>

            </View>


            

          </View>

          </LinearGradient>
        
        </View>
      );
    }
  }

export default ScoreComponent;