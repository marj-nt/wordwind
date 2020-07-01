import React from "react";
import { Dimensions, View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { withNavigation } from 'react-navigation'
import * as Animatable from 'react-native-animatable';

import { homeStyles as homeStyles } from '@styles/home.js'

const gradientBlueGreen = ['#70FAA8', '#A2B0FF'];

const pathTitle = '../assets/ww-title.png';
const pathIcon1 = '../assets/home-play-icon.png';
const pathIcon2 = '../assets/home-tutorial-icon.png';
const pathIcon3 = '../assets/home-options-icon.png';

class HomeComponent extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

  return (
    <View>
        <LinearGradient style={homeStyles.mainBackground} colors={gradientBlueGreen}>

        <Animatable.View animation='tada' duration={2000} iterationCount={"infinite"} iterationDelay={1000}>
          <Image style={homeStyles.title} source={require(pathTitle)}/>
        </Animatable.View>

          <Animatable.View animation='fadeInUp'>
            <TouchableOpacity style={[homeStyles.buttonShape, homeStyles.playButton]}
            onPress={() => this.props.navigation.navigate('Categories', {
              savedColor: this.props.route.params.savedColor,
              savedDuration: this.props.route.params.savedDuration,
              savedSyllable: this.props.route.params.savedSyllable,
              savedSfx: this.props.route.params.savedSfx,
            })}>
              <Image style={homeStyles.icons} source={require(pathIcon1)}/>
              <Text style={homeStyles.buttonText}>PLAY</Text>
            </TouchableOpacity>
          </Animatable.View>

          <Animatable.View animation='fadeInLeft'>
            <TouchableOpacity style={[homeStyles.buttonShape, homeStyles.tutorialButton]}
            onPress={() => this.props.navigation.navigate('Tutorial')}>
              <Image style={homeStyles.icons} source={require(pathIcon2)}/>
              <Text style={homeStyles.buttonText}>TUTORIAL</Text>
            </TouchableOpacity>
          </Animatable.View>

          <Animatable.View animation='fadeInRight'>
            <TouchableOpacity style={[homeStyles.buttonShape, homeStyles.optionsButton]}
            onPress={() => this.props.navigation.navigate('Options')}>
              <Image style={homeStyles.icons} source={require(pathIcon3)}/>
              <Text style={homeStyles.buttonText}>OPTIONS</Text>
            </TouchableOpacity>
          </Animatable.View>

        </LinearGradient>
        </View>
  )
  }
}

export default HomeComponent;
