import {StyleSheet, Dimensions} from 'react-native'
import { withTheme } from 'react-native-elements';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const topHeight = height * 0.7
const bottomHeight = height * 0.3

export const gameColors = {
    gradientBlueGreen: ['#70FAA8', '#A2B0FF'],
    gradientBottom: ['#B8EBFC', '#E3E1FF'],
    gradientRec: ['#E7442E', '#E7442E'],
    shadowYellow: '#F8E71C',
    correctGreen: '#CAFF90',
}

export const gameStyles = StyleSheet.create({
    topContainer: {
      height: topHeight,
      justifyContent: 'center',
      alignItems: 'center',
    },
    bottomContainer: {
      height: bottomHeight,
      justifyContent: 'center',
      alignItems: 'center',
    },
    wordFont: {
      fontFamily: 'Avenir Next Condensed',
      textAlign: 'center',
      color: 'white',
      fontSize: 60,
      letterSpacing: 5,
      shadowColor: gameColors.shadowYellow,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.75,
      shadowRadius: 2,
      elevation: 1,
    },
    readyFont: {
      fontFamily: 'Avenir Next Condensed',
      textAlign: 'center',
      color: 'white',
      fontSize: 20,
      position: 'absolute',
      bottom: 40,
      letterSpacing: 3,
    },
    timerFont: {
      fontFamily: 'Avenir Next Condensed',
      color: 'white',
      fontSize: 25,
      position: 'absolute',
      top: 20,
    },
    row: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    recContainer: {
      top: 30,
      width: 140,
      height: 140,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10,
    },
    recButton: {
        borderRadius: 100,
        borderColor: 'whitesmoke',
        borderWidth: 4,
        width: 90,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 20,
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 1,
    },
    animatedCircle: {
      position: 'absolute',
      top: 5
    },
    playButtonImg: {
      resizeMode: 'contain',
    },
    animatedSound: {
      width: 10,
      height: 50,
      backgroundColor: gameColors.correctGreen,
      top: 30,
      marginLeft: 5,
      marginRight: 5,
    },
    animatedContainer: {
      flexDirection: 'row', 
      position: 'absolute',
      top: 55, 
      alignSelf: 'center',
      zIndex: 1,
    },
    recFont: {
      color: 'white',
      fontFamily: 'Avenir Next',
      letterSpacing: 3,
      fontSize: 20,
    }
  })