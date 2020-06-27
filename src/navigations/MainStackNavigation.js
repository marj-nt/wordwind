import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeComponent from '@screens/home.js'
import CategoriesComponent from '@screens/categories.js'
import GameComponent from '@screens/game.js'
import ScoreComponent from '@screens/score.js'
import OptionsComponent from '@screens/options.js'


const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
    <Stack.Navigator 
        initialRouteName='Options'
        screenOptions={{headerShown: false}}
        defaultNavigationOptions={{gesturesEnabled: false}}
    >
    <Stack.Screen
      name='Home'
      component={HomeComponent}
    />
    <Stack.Screen
      name='Categories'
      component={CategoriesComponent}
    />
    <Stack.Screen
      name='Game'
      component={GameComponent}
    />
    <Stack.Screen
      name='Score'
      component={ScoreComponent}
    />
    <Stack.Screen
      name='Options'
      component={OptionsComponent}
    />
  </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator