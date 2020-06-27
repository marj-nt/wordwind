import React from "react";
import { Dimensions, View, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { withNavigation } from 'react-navigation'

const gradientPurpleOrange = ['#B0B5FF', '#F4D8A8'];

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const optionsStyles = StyleSheet.create({
  mainBackground: {
    left: 0,
    top: 0,
    right: 0,
    width: width,
    height: height,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  toggleButtons: {
      width: 100,
      height: 40,
      backgroundColor: 'grey',
      alignItems: 'center',
      justifyContent: 'center',
  }
})

class OptionsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 1,
            duration: 60,
            syllable: 'off',
            sfx: 'on',
        }
        this.changeColor = this.changeColor.bind(this)
        this.changeDuration = this.changeDuration.bind(this)
        this.changeSyllable = this.changeSyllable.bind(this)
        this.changeSfx = this.changeSfx.bind(this)
    }

    changeColor = (chosenColor) => {
        this.setState({color: chosenColor})
    }

    changeDuration = (chosenDuration) => {
        this.setState({duration: chosenDuration})
    }

    changeSyllable = (chosenSyllable) => {
        this.setState({syllable: chosenSyllable})
    }

    changeSfx = (chosenSfx) => {
        this.setState({sfx: chosenSfx})
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

                        <TouchableOpacity style={optionsStyles.toggleButtons} onPress={() => this.changeSyllable('on')}>
                            <Text>ON</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={optionsStyles.toggleButtons} onPress={() => this.changeSyllable('off')}>
                            <Text>OFF</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={optionsStyles.row}>
                    <Text>Sound Effects</Text>
                    <TouchableOpacity style={optionsStyles.toggleButtons} onPress={() => this.changeSfx('on')}>
                            <Text>ON</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={optionsStyles.toggleButtons} onPress={() => this.changeSfx('off')}>
                            <Text>OFF</Text>
                        </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>
          
        </View>
    )
  }
}

export default OptionsComponent;