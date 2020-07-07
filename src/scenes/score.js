import React from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet, Dimensions, Image, } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { withNavigation } from 'react-navigation'
import * as Animatable from 'react-native-animatable';
import AnimateNumber from 'react-native-animate-number';

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

  clickBack = () => {
    this.props.parentBack()
  }

  clickCat = () => {
    this.props.parentCat()
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
  
        <Animatable.View style={scoreStyles.whiteBackground} animation='fadeInUp'>
        
  
          <Image style={scoreStyles.imgMic} source={successPath}/>
  
   
            <Text style={scoreStyles.successText}>Success!</Text>
    
      
            <Text style={scoreStyles.bodyText}>Your quick and skilled reading helped you conquer {''}
            <AnimateNumber 
            style={scoreStyles.successScore}
            value={this.props.score}
            countBy={1}
            timing='easeIn'
            />
            {''} words!</Text>

          <TouchableOpacity style={[scoreStyles.playButtons, scoreStyles.primarySuccessBtn]} onPress={this.clickBack}>
            <Text style={{color: 'white'}}>Play {this.props.category} again!</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={scoreStyles.playButtons} onPress={this.clickCat}>
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

  clickBack = () => {
    this.props.parentBack()
  }

  clickCat = () => {
    this.props.parentCat()
  }

  render() {

    return(
      <View>
      <LinearGradient colors={gradientBlueGreen}>
  
      <View style={scoreStyles.mainBackground}>

      <View style={scoreStyles.shadowOverlay}></View>
  
        <Animatable.View style={scoreStyles.whiteBackground} animation='fadeInUp'>
        
          <Image style={scoreStyles.imgMic} source={failPath}/>
  
            <Text style={scoreStyles.failText}>Try Again!!!</Text>
    
            <Text style={scoreStyles.bodyText}>You got through {''}
            <AnimateNumber 
            style={scoreStyles.failScore}
            value={this.props.score}
            countBy={1}
            timing='easeIn'
            />
            {''} words.</Text>
            <Text style={scoreStyles.bodyText}>Hint: If you’re stuck, try breaking words down into syllables!{'\n'}
            <Text style={scoreStyles.subMessage}>(or turn on Syllable help in OPTIONS)</Text>
            </Text>
        
          <TouchableOpacity style={[scoreStyles.playButtons, scoreStyles.primaryFailBtn]} onPress={this.clickBack}>
            <Text style={{color: 'white'}}>Try {this.props.category} again!</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={scoreStyles.playButtons} onPress={this.clickCat}>
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
    this.navigateBack = this.navigateBack.bind(this);
  }

  navigateBack = () => {
    this.props.navigation.navigate('Game', {
      savedDuration: this.props.route.params.savedDuration,
      id: String(this.props.route.params.id + 1),
    })
  }

  navigateCategory = () => {
    this.props.navigation.navigate('Categories')
  }

    render() {
      if (this.props.route.params.finalScore > 5) {
        screen = <SuccessScreen score={this.props.route.params.finalScore} category={this.props.route.params.savedCategory}
        parentBack={this.navigateBack} parentCat={this.navigateCategory}/>;
      } else {
        screen = <FailScreen score={this.props.route.params.finalScore} category={this.props.route.params.savedCategory}
        parentBack={this.navigateBack} parentCat={this.navigateCategory}/>
      }
      return(
        <View>
          {screen}
        </View>
      )
  }
}
  

export default ScoreComponent;