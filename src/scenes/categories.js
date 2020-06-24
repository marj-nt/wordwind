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
})

export default class CategoriesComponent extends React.Component { 
    render() { 
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <LinearGradient style={categoriesStyles.mainBackground} colors={gradientBlueGreen}>
        <Text>Categories Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate({routeName: 'HomeScreen'})}
        />
        </LinearGradient>
      </View>
      );
    }
  }