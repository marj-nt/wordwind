import React, {useState} from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

// FOR QUICK VIEW TESTS
import HomeComponent from '@screens/home.js';
import CategoriesComponent from '@screens/categories.js';
import GameComponent from '@screens/game.js';
import ScoreComponent from '@screens/score.js'
import OptionsComponent from '@screens/options.js'
import TutorialComponent from '@screens/tutorial.js'

import MainStackNavigator from './src/navigations/MainStackNavigation'

const getFonts = () => Font.loadAsync({
  'CaviarDreams': require('@assets/fonts/CaviarDreams.ttf'),
  'CaviarDreamsBold': require('@assets/fonts/CaviarDreams_Bold.ttf'),
})

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded) {
    return <MainStackNavigator/>
  } else {
    return (
      <AppLoading startAsync={getFonts}
    onFinish={() => setFontsLoaded(true)}
    />
    )
  }
  
}