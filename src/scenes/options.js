import React from "react";
import { Dimensions, View, Text, TouchableOpacity, Switch } from "react-native";
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { withNavigation } from 'react-navigation'

import { optionsStyles as optionsStyles } from '@styles/options.js'

const gradientPurpleOrange = ['#B0B5FF', '#F4D8A8'];

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
        }
        this.changeColor = this.changeColor.bind(this)
        this.changeDuration = this.changeDuration.bind(this)
        this.toggleSyllable = this.toggleSyllable.bind(this)
        this.toggleSfx = this.toggleSfx.bind(this)
    }

    changeColor = (chosenColor) => {
        this.setState({color: chosenColor})
    }

    changeDuration = (chosenDuration) => {
        this.setState({duration: chosenDuration})
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

        <LinearGradient colors={gradientPurpleOrange}>

        <TouchableOpacity style={optionsStyles.toggleButtons}
                onPress={() => this.props.navigation.navigate('Home', {
                    savedColor: this.state.color,
                    savedDuration: this.state.duration,
                    savedSyllable: this.state.syllable,
                    savedSfx: this.state.sfx,
                }
                )}
              >
          <Text>Back</Text>
        </TouchableOpacity>


            <View style={optionsStyles.mainBackground}>
                <View style={optionsStyles.row}>
                    <Text>Background Color</Text>
                </View>

                <TouchableOpacity style={optionsStyles.toggleButtons} onPress={() => this.changeColor(1)}>
                    <Text>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={optionsStyles.toggleButtons} onPress={() => this.changeColor(2)}>
                    <Text>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={optionsStyles.toggleButtons} onPress={() => this.changeColor(3)}>
                    <Text>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={optionsStyles.toggleButtons} onPress={() => this.changeColor(4)}>
                    <Text>4</Text>
                </TouchableOpacity>

                


                <View style={optionsStyles.row}>
                    <Text>Round Duration</Text>
                    <View style={optionsStyles.row}>
                        <TouchableOpacity style={optionsStyles.toggleButtons} onPress={() => this.changeDuration(30)}>
                            <Text>30</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={optionsStyles.toggleButtons} onPress={() => this.changeDuration(60)}>
                            <Text>60</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={optionsStyles.toggleButtons} onPress={() => this.changeDuration(90)}>
                            <Text>90</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={optionsStyles.row}>
                    <Text>Syllable Help</Text>
                    <View style={optionsStyles.row}>
                    <Switch
                    style={{marginTop:30}}
                    onValueChange = {this.toggleSyllable}
                    value = {this.state.sylSwitchValue}/>
                    </View>
                </View>

                <View style={optionsStyles.row}>
                    <Text>Sound Effects</Text>
                    <Switch
                    style={{marginTop:30}}
                    onValueChange = {this.toggleSfx}
                    value = {this.state.sfxSwitchValue}/>
                </View>
            </View>
        </LinearGradient>
          
        </View>
    )
  }
}

export default OptionsComponent;