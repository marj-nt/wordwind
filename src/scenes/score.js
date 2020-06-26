import React from 'react'
import { View, Text, Button } from 'react-native'
import { withNavigation } from 'react-navigation'

class ScoreComponent extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{this.props.route.params.finalScore}</Text>
        <Button title='Play Food Again!'
        onPress={() => {this.props.navigation.navigate('Game')}}
        >
        </Button>
        <Button title='Play another category'
        onPress={() => {this.props.navigation.navigate('Categories')}}
        >
        </Button>
        </View>
      );
    }
  }

export default ScoreComponent;