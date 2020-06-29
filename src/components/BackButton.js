import React from 'react';
import { View, StyleSheet } from 'react-native';

export class Triangle extends React.Component{
    render() {
        return (
          <View style={[styles.triangle, this.props.style]} />
        )
      }
    
}
    
  
  const styles = StyleSheet.create({
    triangle: {
        width: 25,
        height: 25,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 20,
        borderRightWidth: 20,
        borderBottomWidth: 40,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'white',
      },
    triangleLeft: {
      transform: [
          {rotate: '-90deg'}
          ]
      },
  })

  export class BackButton extends React.Component {
        render() {
          return (
            <Triangle style={styles.triangleLeft}/>
          )
        }
  }
   