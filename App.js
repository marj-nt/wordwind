// import * as React from 'react';
// import { Platform, StyleSheet, Text, View, Button } from 'react-native';
// import styles from '@styles/home.js';
// import HomeComponent from '@screens/home.js';
// import CategoriesComponent from '@screens/categories.js';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import {StackNavigator} from 'react-navigation';

// const instructions = Platform.select({
//   ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
//   android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
// });

// const Main = StackNavigator({
//   HomeScreen: {
//     screen: HomeComponent
//   },
//   CategoriesScreen: {
//     screen: CategoriesComponent
//   },
// })

// // const Stack = createStackNavigator();



// export default App;

import React from 'react';
import { View, Text } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import HomeComponent from '@screens/home.js';
import CategoriesComponent from '@screens/categories.js';
import GameComponent from '@screens/game.js';
import Swipeable from 'react-native-gesture-handler/Swipeable';


// import Navigator from '@navigations';

// const App = () => <Navigator />;

class App extends React.Component {

 render() {
    return (
     <GameComponent/>
    )
  }
}
 
export default App;

