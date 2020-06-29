import React from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet, Dimensions, Image, } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { withNavigation } from 'react-navigation'
import * as Animatable from 'react-native-animatable';

import successPath from '@assets/score-success.png';
import failPath from '@assets/score-fail.png';
import bannerPath from '@assets/score-banner.png';

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

export class SuccessScreen extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    return(
      <View>
      <LinearGradient colors={gradientBlueGreen}>
  
      {/*Animate floating banner*/}
      <Animatable.View animation={upAndDown} iterationCount={'infinite'} direction="alternate">
        <Image style={scoreStyles.imgBanner} source={bannerPath}/>
      </Animatable.View>
  
      <View style={scoreStyles.mainBackground}>
  
        <Animatable.View style={scoreStyles.whiteBackground} animation='fadeInUp' onTransitionEnd={scoreStyles.whiteBackground}>
        
  
          <Image style={scoreStyles.imgMic} source={successPath}/>
  
   
            <Text style={scoreStyles.successText}>Success!</Text>
    
      
            <Text style={scoreStyles.bodyText}>Your quick and skilled reading helped you conquer {this.props.score} words!</Text>
        
  
          <TouchableOpacity style={scoreStyles.playButtons} onPress={() => {this.props.navigation.navigate('Game')}}>
            <Text>Play {this.props.category} again!</Text>
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

export class FailScreen extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    return(
      <View>
      <LinearGradient colors={gradientBlueGreen}>
  
      <View style={scoreStyles.mainBackground}>

      <View style={scoreStyles.shadowOverlay}></View>
  
        <Animatable.View style={scoreStyles.whiteBackground} animation='fadeInUp' onTransitionEnd={scoreStyles.whiteBackground}>
        
          <Image style={scoreStyles.imgMic} source={failPath}/>
  
            <Text style={scoreStyles.failText}>Try Again!!!</Text>
    
            <Text style={scoreStyles.bodyText}>You got through {this.props.score} words.</Text>
            <Text style={scoreStyles.bodyText}>Hint: If you’re stuck, try breaking words down into syllables!</Text>
            <Text style={scoreStyles.bodyText}>(or turn on Syllable help in OPTIONS)</Text>
        
          <TouchableOpacity style={scoreStyles.playButtons} onPress={() => {this.props.navigation.navigate('Game')}}>
            <Text>Try {this.props.category} again!</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={scoreStyles.playButtons} onPress={() => {this.props.navigation.navigate('Categories')}}>
            <Text>Try another category</Text>
          </TouchableOpacity>
  
        </Animatable.View>
      

      </View>
  
      </LinearGradient>
    
    </View>
    );
  }
}

// Default
var screen = <SuccessScreen score={0} category={'sports'}/>;

class ScoreComponent extends React.Component {
  constructor(props) {
    super(props)
  }

    render() {
      if (this.props.route.params.finalScore > 5) {
        screen = <SuccessScreen score={this.props.route.params.finalScore} category={this.props.route.params.savedCategory}
        navigation={this.props.navigation}/>;
      } else {
        screen = <FailScreen score={this.props.route.params.finalScore} category={this.props.route.params.savedCategory}
        navigation={this.props.navigation}/>
      }
      return(
        <View>
          {screen}
        </View>
      )
  }
}
  

export default ScoreComponent;