import { StyleSheet, Dimensions } from 'react-native';
import { gradientBlue as gradientBlue } from '@styles/global.js';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const buttonSalmon = '#EF8B8B';
const buttonBlue = '#7E99FF';
const buttonGrey = '#BDBDBD';

export const homeStyles = StyleSheet.create({
  mainBackground: {
    left: 0,
    top: 0,
    right: 0,
    width: width,
    height: height,
  },
  title: {
    marginTop: 125,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  topHalf: {
    height: height * 0.5,
  },
  bottomHalf: {
    height: height * 0.5,
  },
  buttonShape: {
    width: 330,
    height: 60,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 1,
    alignSelf: 'center',
    marginBottom: 50,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Avenir Next Condensed',
    color: 'white',
    fontSize: 36,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 1,
    marginLeft: 40,
  },
  playButton: {
    backgroundColor: buttonSalmon,
    // top: 250,
  },
  tutorialButton: {
    backgroundColor: buttonBlue,
    // top: 300,
  },
  optionsButton: {
    backgroundColor: buttonGrey,
    // top: 350,
  },
  icons: {
    left: 24,
    position: 'absolute',
  },
  animatedSound: {
    width: 10,
    height: 50,
    backgroundColor: gradientBlue[0],
    top: 30,
    marginLeft: 7,
    marginRight: 7,
  },
  animatedContainer: {
    flexDirection: 'row', 
    position: 'absolute',
    top: height * 0.30,
    alignSelf: 'center',
    zIndex: 1,
  }
});