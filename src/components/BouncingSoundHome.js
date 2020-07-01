import React from "react";
import { View } from 'react-native';

import * as Animatable from 'react-native-animatable';

import { homeStyles as homeStyles } from '@styles/home.js'

const grow = {
    from: {
      height: 30,
      top: 25,
    },
    to: {
      height: 50,
      top: 50,
    },
  };

export default class BouncingSoundHome extends React.Component {

    render() {

        return (
            <View style={homeStyles.animatedContainer}>
                    <Animatable.View style={homeStyles.animatedSound} animation={grow} duration={500} iterationCount={'infinite'} direction="alternate">
                        
                  </Animatable.View>
                  <Animatable.View style={homeStyles.animatedSound} animation={grow} duration={400} iterationCount={'infinite'} direction="alternate">
                        
                  </Animatable.View>
                  <Animatable.View style={homeStyles.animatedSound} animation={grow} duration={800} iterationCount={'infinite'} direction="alternate">
                      
                  </Animatable.View>
                  <Animatable.View style={homeStyles.animatedSound} animation={grow} duration={400} iterationCount={'infinite'} direction="alternate">
                      
                  </Animatable.View>
                  <Animatable.View style={homeStyles.animatedSound} animation={grow} duration={500} iterationCount={'infinite'} direction="alternate">
                       
                  </Animatable.View>
            </View>
        )
    }
}
