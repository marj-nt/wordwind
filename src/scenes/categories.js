import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { withNavigation } from 'react-navigation';
import { BackButton } from '@components/BackButton.js';

import catIcon1 from '@assets/cat-1.png';
import catIcon2 from '@assets/cat-2.png';
import catIcon3 from '@assets/cat-3.png';
import catIcon4 from '@assets/cat-4.png';
import catIcon5 from '@assets/cat-5.png';
import catIcon6 from '@assets/cat-6.png';

import { globalStyles as globalStyles } from '@styles/global.js'
import { categoriesStyles as categoriesStyles } from '@styles/categories.js'

const gradientBlueGreen = ['#70FAA8', '#A2B0FF'];

class CategoriesComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fontsLoaded: false,
    }
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
                  savedColor: this.props.route.params.savedColor,
                  savedDuration: this.props.route.params.savedDuration,
                  savedSyllable: this.props.route.params.savedSyllable,
                  savedSfx: this.props.route.params.savedSfx,
                })}
              >
                <Image style={categoriesStyles.shrinkImage} source={catIcon1}/>
                <Text style={categoriesStyles.catLabels}>SPORTS</Text>
              </TouchableOpacity>

              <TouchableOpacity style={categoriesStyles.centerImage}
                onPress={() => this.props.navigation.navigate('Game', {
                  category: 'music',
                  savedColor: this.props.route.params.savedColor,
                  savedDuration: this.props.route.params.savedDuration,
                  savedSyllable: this.props.route.params.savedSyllable,
                  savedSfx: this.props.route.params.savedSfx,
                })}
              >
                <Image style={categoriesStyles.shrinkImage} source={catIcon2}/>
                <Text style={categoriesStyles.catLabels}>MUSIC</Text>
              </TouchableOpacity>
            </View>
  
            <View style={categoriesStyles.row}>
                <TouchableOpacity style={categoriesStyles.centerImage}
                  onPress={() => this.props.navigation.navigate('Game', {
                    category: 'food',
                    savedColor: this.props.route.params.savedColor,
                    savedDuration: this.props.route.params.savedDuration,
                    savedSyllable: this.props.route.params.savedSyllable,
                    savedSfx: this.props.route.params.savedSfx,
                  })}
                >
                <Image style={categoriesStyles.shrinkImage} source={catIcon3}/>
                <Text style={categoriesStyles.catLabels}>FOOD</Text>
              </TouchableOpacity>
              <TouchableOpacity style={categoriesStyles.centerImage}
                onPress={() => this.props.navigation.navigate('Game', {
                  category: 'animals',
                  savedColor: this.props.route.params.savedColor,
                  savedDuration: this.props.route.params.savedDuration,
                  savedSyllable: this.props.route.params.savedSyllable,
                  savedSfx: this.props.route.params.savedSfx,
                })}
              >
                <Image style={categoriesStyles.shrinkImage} source={catIcon4}/>
                <Text style={categoriesStyles.catLabels}>ANIMALS</Text>
              </TouchableOpacity>
            </View>
  
            <View style={categoriesStyles.row}>
            <TouchableOpacity style={categoriesStyles.centerImage}
              onPress={() => this.props.navigation.navigate('Game', {
                category: 'colors',
                savedColor: this.props.route.params.savedColor,
                savedDuration: this.props.route.params.savedDuration,
                savedSyllable: this.props.route.params.savedSyllable,
                savedSfx: this.props.route.params.savedSfx,
              })}
              >
            <Image style={categoriesStyles.shrinkImage} source={catIcon5}/>
            <Text style={categoriesStyles.catLabels}>COLORS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={categoriesStyles.centerImage}
            onPress={() => this.props.navigation.navigate('Game', {
              category: 'kids',
              savedColor: this.props.route.params.savedColor,
              savedDuration: this.props.route.params.savedDuration,
              savedSyllable: this.props.route.params.savedSyllable,
              savedSfx: this.props.route.params.savedSfx,
            })}
            >
            <Image style={categoriesStyles.shrinkImage} source={catIcon6}/>
            <Text style={categoriesStyles.catLabels}>KIDS</Text>
          </TouchableOpacity>
            </View>
            </View>
  
          </LinearGradient>
        </View>
    )
  }
}

export default CategoriesComponent;