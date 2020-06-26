import { StyleSheet, Dimensions } from 'react-native';

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
    top: 125,
    marginLeft: 'auto',
    marginRight: 'auto',
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
    marginLeft: 'auto',
    marginRight: 'auto',
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
  },
  playButton: {
    backgroundColor: buttonSalmon,
    top: 250,
  },
  tutorialButton: {
    backgroundColor: buttonBlue,
    top: 300,
  },
  optionsButton: {
    backgroundColor: buttonGrey,
    top: 350,
  },
  icons: {
    left: 24,
    position: 'absolute',
  },
});