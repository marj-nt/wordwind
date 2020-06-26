import React from "react";
import { Dimensions, View, Text, Button, Image, TouchableOpacity } from "react-native";
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {StackNavigator} from 'react-navigation';

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

function CategoriesComponent(props) {
  const { navigation } = props;
  return (
    <View>
        <LinearGradient style={categoriesStyles.mainBackground} colors={gradientBlueGreen}>
          <View style={categoriesStyles.row}>
          <Text>Categories</Text>
          </View>
          <View style={categoriesStyles.row}>
            <TouchableOpacity style={categoriesStyles.centerImage}
            onPress={() => navigation.navigate('Game')}>
              <Image  source={require(catIcon1)}/>
            </TouchableOpacity>
            <TouchableOpacity style={categoriesStyles.centerImage}>
              <Image  source={require(catIcon2)}/>
            </TouchableOpacity>
          </View>
          <View style={categoriesStyles.row}>
              <TouchableOpacity style={categoriesStyles.centerImage}>
              <Image  source={require(catIcon3)}/>
            </TouchableOpacity>
            <TouchableOpacity style={categoriesStyles.centerImage}>
              <Image  source={require(catIcon4)}/>
            </TouchableOpacity>
          </View>
          <View style={categoriesStyles.row}>
          <TouchableOpacity style={categoriesStyles.centerImage}>
          <Image  source={require(catIcon5)}/>
        </TouchableOpacity>
        <TouchableOpacity style={categoriesStyles.centerImage}>
          <Image  source={require(catIcon6)}/>
        </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
  )
}

export default CategoriesComponent;