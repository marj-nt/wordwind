import React from "react";
import { Dimensions, View, Text, Button, Image, TouchableOpacity } from "react-native";
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { withNavigation } from 'react-navigation';
import { BackButton } from '@components/BackButton.js';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import catIcon1 from '@assets/cat-1.png';
import catIcon2 from '@assets/cat-2.png';
import catIcon3 from '@assets/cat-3.png';
import catIcon4 from '@assets/cat-4.png';
import catIcon5 from '@assets/cat-5.png';
import catIcon6 from '@assets/cat-6.png';


const customFonts = {
  'CaviarDreams': require('@assets/fonts/CaviarDreams.ttf'),
};

import { globalStyles as globalStyles } from '@styles/global.js'
import { categoriesStyles as categoriesStyles } from '@styles/categories.js'

const gradientBlueGreen = ['#70FAA8', '#A2B0FF'];

class CategoriesComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.route.params.savedColor,
      duration: this.props.route.params.savedDuration,
      syllable: this.props.route.params.savedSyllable,
      sfx: this.props.route.params.savedSfx,

      fontLoaded: true,
    }
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {

    return (
      <View>
          <LinearGradient style={categoriesStyles.mainBackground} colors={gradientBlueGreen}>
            
            <View style={globalStyles.backContainer}>
            <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Home')}
                  >
                    <BackButton/>
            </TouchableOpacity>
            </View>

            <Text style={categoriesStyles.titleFont}>Categories</Text>

            <View style={categoriesStyles.container}>
            
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
                <Image style={categoriesStyles.shrinkImage} source={catIcon1}/>
              </TouchableOpacity>

              <TouchableOpacity style={categoriesStyles.centerImage}
                onPress={() => this.props.navigation.navigate('Game', {
                  category: 'music',
                  savedColor: this.state.color,
                  savedDuration: this.state.duration,
                  savedSyllable: this.state.syllable,
                  savedSfx: this.state.sfx,
                })}
              >
                <Image style={categoriesStyles.shrinkImage} source={catIcon2}/>
              </TouchableOpacity>
            </View>
  
            <View style={categoriesStyles.row}>
                <TouchableOpacity style={categoriesStyles.centerImage}
                  onPress={() => this.props.navigation.navigate('Game', {
                    category: 'food',
                    savedColor: this.state.color,
                    savedDuration: this.state.duration,
                    savedSyllable: this.state.syllable,
                    savedSfx: this.state.sfx,
                  })}
                >
                <Image style={categoriesStyles.shrinkImage} source={catIcon3}/>
              </TouchableOpacity>
              <TouchableOpacity style={categoriesStyles.centerImage}
                onPress={() => this.props.navigation.navigate('Game', {
                  category: 'animals',
                  savedColor: this.state.color,
                  savedDuration: this.state.duration,
                  savedSyllable: this.state.syllable,
                  savedSfx: this.state.sfx,
                })}
              >
                <Image style={categoriesStyles.shrinkImage} source={catIcon4}/>
              </TouchableOpacity>
            </View>
  
            <View style={categoriesStyles.row}>
            <TouchableOpacity style={categoriesStyles.centerImage}
              onPress={() => this.props.navigation.navigate('Game', {
                category: 'colors',
                savedColor: this.state.color,
                savedDuration: this.state.duration,
                savedSyllable: this.state.syllable,
                savedSfx: this.state.sfx,
              })}
              >
            <Image style={categoriesStyles.shrinkImage} source={catIcon5}/>
          </TouchableOpacity>
          <TouchableOpacity style={categoriesStyles.centerImage}
            onPress={() => this.props.navigation.navigate('Game', {
              category: 'kids',
              savedColor: this.state.color,
              savedDuration: this.state.duration,
              savedSyllable: this.state.syllable,
              savedSfx: this.state.sfx,
            })}
            >
            <Image style={categoriesStyles.shrinkImage} source={catIcon6}/>
          </TouchableOpacity>
            </View>
            </View>
  
          </LinearGradient>
        </View>
    )
  }
}

export default CategoriesComponent;