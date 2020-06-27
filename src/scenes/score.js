import React from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'

class ScoreComponent extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{this.props.route.params.finalScore}</Text>

        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Game')}}>
          <Text>Play {this.props.route.params.savedCategory} again!</Text>
        </TouchableOpacity>

        <Button title='Play another category'
        onPress={() => {this.props.navigation.navigate('Categories')}}
        >
        </Button>
        </View>
      );
    }
  }

export default ScoreComponent;