import React from "react";
import { Dimensions, View, Text, Button, Image, TouchableOpacity } from "react-native";
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { withNavigation } from 'react-navigation'

const gradientBlueGreen = ['#70FAA8', '#A2B0FF'];

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const catIcon1 = '../assets/cat-1.png';
const catIcon2 = '../assets/cat-2.png';
const catIcon3 = '../assets/cat-3.png';
const catIcon4 = '../assets/cat-4.png';
const catIcon5 = '../assets/cat-5.png';
const catIcon6 = '../assets/cat-6.png';

const categoriesStyles = StyleSheet.create({
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
  centerImage: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
})

class CategoriesComponent extends React.Component {
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
    console.log('Categories' + 'Syllable' + this.state.syllable)

    return (
      <View>
          <LinearGradient style={categoriesStyles.mainBackground} colors={gradientBlueGreen}>
            <View style={categoriesStyles.row}>
            <Text>Categories</Text>

            <TouchableOpacity style={{backgroundColor: 'white'}}
                onPress={() => this.props.navigation.navigate('Home')}>
              <Text>Back</Text>
            </TouchableOpacity>

            </View>
            
            <View style={categoriesStyles.row}>
              <TouchableOpacity style={categoriesStyles.centerImage}
                onPress={() => this.props.navigation.navigate('Game', {
                  category: 'sports',
                  savedColor: this.state.color,
                  savedDuration: this.state.duration,
                  savedSyllable: this.state.syllable,
                  savedSfx: this.state.sfx,
                })}
              >
                <Image  source={require(catIcon1)}/>
              </TouchableOpacity>
              <TouchableOpacity style={categoriesStyles.centerImage}
                onPress={() => this.props.navigation.navigate('Game', {
                  category: 'music'
                })}
              >
                <Image  source={require(catIcon2)}/>
              </TouchableOpacity>
            </View>
  
            <View style={categoriesStyles.row}>
                <TouchableOpacity style={categoriesStyles.centerImage}
                  onPress={() => this.props.navigation.navigate('Game', {
                    category: 'food'
                  })}
                >
                <Image  source={require(catIcon3)}/>
              </TouchableOpacity>
              <TouchableOpacity style={categoriesStyles.centerImage}
                onPress={() => this.props.navigation.navigate('Game', {
                  category: 'animals'
                })}
              >
                <Image  source={require(catIcon4)}/>
              </TouchableOpacity>
            </View>
  
            <View style={categoriesStyles.row}>
            <TouchableOpacity style={categoriesStyles.centerImage}
              onPress={() => this.props.navigation.navigate('Game', {
                category: 'colors'
              })}
              >
            <Image  source={require(catIcon5)}/>
          </TouchableOpacity>
          <TouchableOpacity style={categoriesStyles.centerImage}
            onPress={() => this.props.navigation.navigate('Game', {
              category: 'kids'
            })}
            >
            <Image  source={require(catIcon6)}/>
          </TouchableOpacity>
            </View>
  
          </LinearGradient>
        </View>
    )
  }
}

export default CategoriesComponent;