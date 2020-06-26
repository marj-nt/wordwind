import React from 'react';
import HomeComponent from '@screens/home.js';
import CategoriesComponent from '@screens/categories.js';
import GameComponent from '@screens/game.js';
import ScoreComponent from '@screens/score.js'

import MainStackNavigator from './src/navigations/MainStackNavigation'

export default function App() {
  return <MainStackNavigator />
}