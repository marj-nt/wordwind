import React from "react";
import Triangle from 'react-native-triangle';
import { View, Text } from 'react-native'
import { tutorialStyles as tutorialStyles } from '@styles/tutorial.js'

export class MyTooltip extends React.Component {
    constructor(props) {
        super(props)
        // this.checkTriangle = this.checkTriangle.bind(this)
    }

    // checkTriangle() {
    //     if(this.props.direction === 'up') {
    //         this.setState({
    //             displayTop: 'block',
    //             displayBottom: 'none'
    //         })
    //     } else if(this.props.direction === 'down') {
    //         this.setState({
    //             displayTop: 'none',
    //             displayBottom: 'block'
    //         })
    //     }
    // }

    render() {
        return(
            <View style={[tutorialStyles.tooltipOuter, {
                top: this.props.top,
                position: 'absolute',
            }]}>
            <Triangle
            style={{
                left: this.props.left,
                display: this.props.displayTop,}}
            width={40}
            height={20}
            color={'white'}
            direction={this.props.direction}
          />
          <View style={tutorialStyles.tooltipBox}>
                <Text style={tutorialStyles.tooltipText}>
                    {this.props.msg}
                </Text>
          </View>
          <Triangle
            style={{
                left: this.props.left, 
                display: this.props.displayBottom,}}
            width={40}
            height={20}
            color={'white'}
            direction={this.props.direction}
          />
          </View>
        )
    }
    
}