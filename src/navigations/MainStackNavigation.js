import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeComponent from '@screens/home.js'
import CategoriesComponent from '@screens/categories.js'
import GameComponent from '@screens/game.js'
import ScoreComponent from '@screens/score.js'
import OptionsComponent from '@screens/options.js'
import TutorialComponent from '@screens/tutorial.js'

import SuccessScreen from '@screens/score.js'
import FailScreen from '@screens/score.js'


const Stack = createStackNavigator()

function MainStackNavigator() {
  return (
    <NavigationContainer>
    <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={{headerShown: false}}
        defaultNavigationOptions={{gesturesEnabled: false}}
    >
    <Stack.Screen
      name='Home'
      component={HomeComponent}
      initialParams={{
        color: 1,
        duration: 30,
        syllable: false,
        sfx: true,
      }}
    />
    <Stack.Screen
    name='Tutorial'
    component={TutorialComponent}
  />
    <Stack.Screen
      name='Categories'
      component={CategoriesComponent}
      initialParams={{
        category: 'sports',
        color: 1,
        duration: 30,
        syllable: false,
        sfx: true,
      }}
    />
    <Stack.Screen
      name='Game'
      component={GameComponent}
      initialParams={{ 
        duration: 30,
        bg: 1,
      }}
    />
    <Stack.Screen
      name='Score'
      component={ScoreComponent}
    />
    <Stack.Screen
      name='Options'
      component={OptionsComponent}
    />
    <Stack.Screen
      name='Success'
      component={SuccessScreen}
    />
    <Stack.Screen
      name='Fail'
      component={FailScreen}
    />
  </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigator