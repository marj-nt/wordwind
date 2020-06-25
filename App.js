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
import HomeComponent from 'src/scenes/home.js';
import CategoriesComponent from 'src/scenes/categories.js';
import GameComponent from 'src/scenes/game.js';
import TestComponent from 'src/components/organisms/gestureHandler.js'
import Swipeable from 'react-native-gesture-handler/Swipeable';


// import Navigator from '@navigations';

// const App = () => <Navigator />;

class App extends React.Component {

 render() {
    return (
      /*
      <Swipeable on
            renderLeftActions={()=>console.log('Swiped Left')}
      onSwipeableRightOpen={()=>console.log('Swiped right')}>
      <View style={{height: 500, backgroundColor: 'lightblue'}}>
      </View>
      </Swipeable>
      */
     <GameComponent/>
    )
  }
}

class SomeComponent extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      myText: 'I\'m ready to get swiped!',
      gestureName: 'none',
      backgroundColor: '#fff'
    };
  }
 
  onSwipeUp(gestureState) {
    this.setState({myText: 'You swiped up!'});
  }
 
  onSwipeDown(gestureState) {
    this.setState({myText: 'You swiped down!'});
  }
 
  onSwipeLeft(gestureState) {
    this.setState({myText: 'You swiped left!'});
  }
 
  onSwipeRight(gestureState) {
    this.setState({myText: 'You swiped right!'});
  }
 
  onSwipe(gestureName, gestureState) {
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    this.setState({gestureName: gestureName});
    switch (gestureName) {
      case SWIPE_UP:
        this.setState({backgroundColor: 'red'});
        break;
      case SWIPE_DOWN:
        this.setState({backgroundColor: 'green'});
        break;
      case SWIPE_LEFT:
        this.setState({backgroundColor: 'blue'});
        break;
      case SWIPE_RIGHT:
        this.setState({backgroundColor: 'yellow'});
        break;
    }
  }
 
  render() {
 
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };
 
    return (
      <GestureRecognizer
        onSwipe={(direction, state) => this.onSwipe(direction, state)}
        onSwipeUp={(state) => this.onSwipeUp(state)}
        onSwipeDown={(state) => this.onSwipeDown(state)}
        onSwipeLeft={(state) => this.onSwipeLeft(state)}
        onSwipeRight={(state) => this.onSwipeRight(state)}
        config={config}
        style={{
          flex: 1,
          backgroundColor: this.state.backgroundColor
        }}
        >
        <Text>{this.state.myText}</Text>
        <Text>onSwipe callback received gesture: {this.state.gestureName}</Text>
      </GestureRecognizer>
    );
  }
}
 
export default App;

