import React from "react";
import { Dimensions, View, Text, TouchableOpacity, Switch, Image, UIManager } from "react-native";
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { withNavigation } from 'react-navigation';
import * as Animatable from 'react-native-animatable';
import { BackButton } from '@components/BackButton.js';

import { optionsStyles as optionsStyles } from '@styles/options.js';
import { optionsColors as optionsColors } from '@styles/options.js';
import { gradientBlue, gradientOrange, gradientPurple, gradientBlack } from '@styles/options.js';
import { globalStyles as globalStyles } from '@styles/global.js'

import optionsGear from '@assets/options-gear.png';
import optionsCheck from '@assets/options-check.png';

const gradientPurpleOrange = ['#B0B5FF', '#F4D8A8'];

var width = Dimensions.get('screen').width; //full width
var height = Dimensions.get('screen').height; //full width

const checkOffset = 15;

class OptionsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 1,
            duration: 60,
            syllable: false,
            sfx: false,

            sylSwitchValue: false,
            sfxSwitchValue: false,

            checkLeft: 20,
            activeDurationBtn: 1,
        }
        this.changeColor = this.changeColor.bind(this)
        this.changeDuration = this.changeDuration.bind(this)
        this.toggleSyllable = this.toggleSyllable.bind(this)
        this.toggleSfx = this.toggleSfx.bind(this)
    }

    changeColor = (chosenColor, xPos) => {
        this.setState({
            color: chosenColor,
            checkLeft: xPos,
        })
    }


    changeDuration = (chosenDuration, activeBtn) => {
        this.setState({
            duration: chosenDuration,
            activeDurationBtn: activeBtn,
        })
    }

    changeSfx = (chosenSfx) => {
        this.setState({sfx: chosenSfx})
    }

    toggleSyllable = (value) => {
        this.setState({
            sylSwitchValue: value,
            syllable: !this.state.syllable,
            })
    }

    toggleSfx = (value) => {
        this.setState({
            sfxSwitchValue: value,
            sfx: !this.state.sfx,
            })
    }

  render() {

    return (
      <View>

        <LinearGradient style={optionsStyles.mainBackground} colors={gradientPurpleOrange}>

        <View style={globalStyles.backContainer}>
        <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Home', {
                    savedColor: this.state.color,
                    savedDuration: this.state.duration,
                    savedSyllable: this.state.syllable,
                    savedSfx: this.state.sfx,
                })}
              >
                <BackButton/>
        </TouchableOpacity>
        </View>

            <View style={optionsStyles.outerWrapper}>
            
            <Image style={optionsStyles.imgGear} source={optionsGear}/>

            <View style={optionsStyles.whiteBackground}>

                

                <Text style={optionsStyles.labelText}>Background Color</Text>
                
                <View style={optionsStyles.row}>

                <TouchableOpacity onPress={() => this.changeColor(1, 0 + checkOffset)}>
                    <LinearGradient colors={gradientBlue} style={optionsStyles.colorSwatches}>
                    <Text style={optionsStyles.hideText}>1</Text>
                    </LinearGradient>
                    
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.changeColor(2, 66 + checkOffset)}>
                    <LinearGradient colors={gradientOrange} style={optionsStyles.colorSwatches}>
                    <Text style={optionsStyles.hideText}>2</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.changeColor(3, 132 + checkOffset)}>
                    <LinearGradient colors={gradientPurple} style={optionsStyles.colorSwatches}>
                    <Text style={optionsStyles.hideText}>3</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.changeColor(4, 198 + checkOffset)}>
                    <LinearGradient colors={gradientBlack} style={optionsStyles.colorSwatches}>
                    <Text style={optionsStyles.hideText}>4</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <Image style={[optionsStyles.check, {left: this.state.checkLeft}]} source={optionsCheck}/>

                </View>

                    <Text style={optionsStyles.labelText}>Round Duration</Text>
                    <View style={optionsStyles.row}>
                        <TouchableOpacity style={[optionsStyles.durationButtons,
                            this.state.activeDurationBtn === 1 ? {backgroundColor: optionsColors.periwinkle} : {backgroundColor: optionsColors.lightpurple}]} 
                        onPress={() => this.changeDuration(30, 1)}>
                            <Text style={optionsStyles.buttonText}>30</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[optionsStyles.durationButtons,
                            this.state.activeDurationBtn === 2 ? {backgroundColor: optionsColors.periwinkle} : {backgroundColor: optionsColors.lightpurple}]} 
                        onPress={() => this.changeDuration(60, 2)}>
                            <Text style={optionsStyles.buttonText}>60</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[optionsStyles.durationButtons,
                            this.state.activeDurationBtn === 3 ? {backgroundColor: optionsColors.periwinkle} : {backgroundColor: optionsColors.lightpurple}]} 
                        onPress={() => this.changeDuration(90, 3)}>
                            <Text style={optionsStyles.buttonText}>90</Text>
                        </TouchableOpacity>
                    </View>
                
                    <View style={optionsStyles.row}>
                    <Text style={optionsStyles.labelText}>Syllable Help</Text>
                    <Switch
                    style={optionsStyles.switchDistance}
                    trackColor={{ true: "#81b0ff" }}
                    ios_backgroundColor={'lightgrey'}
                    onValueChange = {this.toggleSyllable}
                    value = {this.state.sylSwitchValue}/>
                    </View>
        

                    <View style={optionsStyles.row}>

                    <Text style={optionsStyles.labelText}>Sound Effects</Text>
                    <Switch
                    style={optionsStyles.switchDistance}
                    trackColor={{ true: "#81b0ff" }}
                    ios_backgroundColor={'lightgrey'}
                    onValueChange = {this.toggleSfx}
                    value = {this.state.sfxSwitchValue}/>
                    </View>

                </View>

                </View>

        </LinearGradient>

        
          
        </View>
    )
  }
}

export default OptionsComponent;