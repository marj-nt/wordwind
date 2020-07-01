import {StyleSheet, Dimensions} from 'react-native'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const topHeight = height * 0.7
const bottomHeight = height * 0.3

export const tutorialColors = {
    gradientBlueGreen: ['#70FAA8', '#A2B0FF'],
    gradientBottom: ['#B8EBFC', '#E3E1FF'],
    gradientRec: ['#E7442E', '#E7442E'],
    shadowYellow: '#F8E71C',
}

export const tutorialStyles = StyleSheet.create({
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
      color: 'white',
      fontSize: 60,
      letterSpacing: 5,
      shadowColor: tutorialColors.shadowYellow,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.75,
      shadowRadius: 2,
      elevation: 1,
    },
    row: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    recButton: {
        backgroundColor: tutorialColors.gradientRec[0],
        borderColor: 'white',
        borderWidth: 4,
        borderRadius: 100,
        width: 90,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        marginTop: height * 0.08,
        left: 60,
        shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 2,
      elevation: 1,
    },
    playButton: {
      position: 'absolute',
      marginTop: height * 0.08,
      right: 60,
    },
    recContainer: {
      width: 140,
      height: 140,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    animatedCircle: {
      position: 'absolute',
      top: 5
    },
    tooltipBox: {
      width: 250,
      backgroundColor: 'white',
      alignItems: 'center',
      padding: 20,
      borderRadius: 20,
    },
    tooltipText: {
      fontFamily: 'Avenir Next',
      textAlign: 'center',
      fontSize: 13,
    },
    tooltipOuter: {
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.75,
      shadowRadius: 2,
      elevation: 1,
      position: 'absolute',
      zIndex: 2,
    },
    shadowOverlay: {
      width: width,
      height: height,
      position: 'absolute',
      top: 0,
      left: 0,
      opacity: 1,
      zIndex: 1,
    },
    tutorialGestures: {
      width: 150,
      resizeMode: 'contain',
      position: 'absolute',
      top: 225,
      zIndex: 2,
    },
    progressBar: {
      height: 20,
      top: height - 20,
      left: 0,
      position: 'absolute',
      zIndex: 2,
    },
    animatedBox:
    {
        position: 'absolute',
        left: 0,
       height: 20,
       top: height - 20,
    },
  })