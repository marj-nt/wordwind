import React from 'react';
import HomeComponent from '@screens/home.js';
import CategoriesComponent from '@screens/categories.js';
import GameComponent from '@screens/game.js';

import MainStackNavigator from './src/navigations/MainStackNavigation'

export default function App() {
  return <MainStackNavigator />
}

// class App extends React.Component {

//   render() {
//     return (
//       <GameComponent/>
//     )
// }
// }

 
// export default App;

