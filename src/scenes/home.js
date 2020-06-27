import React from "react";
import { Dimensions, View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { withNavigation } from 'react-navigation'

import { homeStyles as homeStyles } from '@styles/home.js'

const gradientBlueGreen = ['#70FAA8', '#A2B0FF'];

const pathTitle = '../assets/ww-title.png';
const pathIcon1 = '../assets/home-play-icon.png';
const pathIcon2 = '../assets/home-tutorial-icon.png';
const pathIcon3 = '../assets/home-options-icon.png';

class HomeComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.route.params.savedColor,
      duration: this.props.route.params.savedDuration,
      syllable: this.props.route.params.savedSyllable,
      sfx: this.props.route.params.savedSfx,
    }
  }
  render() {
  return (
    <View>
        <LinearGradient style={homeStyles.mainBackground} colors={gradientBlueGreen}>
        <Image style={homeStyles.title} source={require(pathTitle)}/>

        <TouchableOpacity style={[homeStyles.buttonShape, homeStyles.playButton]}
        onPress={() => this.props.navigation.navigate('Categories')}>
          <Image style={homeStyles.icons} source={require(pathIcon1)}/>
          <Text style={homeStyles.buttonText}>PLAY</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[homeStyles.buttonShape, homeStyles.tutorialButton]}>
          <Image style={homeStyles.icons} source={require(pathIcon2)}/>
          <Text style={homeStyles.buttonText}>{this.state.color}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[homeStyles.buttonShape, homeStyles.optionsButton]}
        onPress={() => this.props.navigation.navigate('Options')}>
          <Image style={homeStyles.icons} source={require(pathIcon3)}/>
          <Text style={homeStyles.buttonText}>OPTIONS</Text>
        </TouchableOpacity>
        </LinearGradient>
        </View>
  )
  }
}

export default HomeComponent;
