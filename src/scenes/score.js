import React from 'react'
import { View, Text } from 'react-native'
import { withNavigation } from 'react-navigation'

class ScoreComponent extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{this.props.route.params.finalScore}</Text>
        </View>
      );
    }
  }

export default ScoreComponent;