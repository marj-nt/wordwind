import { StyleSheet, Dimensions } from 'react-native'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const primaryPurple = '#AB70E3';
const primaryTeal = '#5DA9AB';
const failRed = '#C0694A';

export const scoreStyles = StyleSheet.create({
  mainBackground: {
    left: 0,
    top: 0,
    right: 0,
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteBackground: {
    width: 280,
    backgroundColor: '#F8F8F8',
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    paddingBottom: 20,
    zIndex: 2,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  successText: {
    color: 'green',
    fontSize: 20,
    fontFamily: 'CaviarDreams',
    fontWeight: 'bold',
    marginTop: -40,
    marginBottom: 20,
  },
  failText: {
    color: failRed,
    fontSize: 20,
    fontFamily: 'CaviarDreams',
    fontWeight: 'bold',
    marginTop: -40,
    marginBottom: 20,
  },
  bodyText: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Avenir Next',
    textAlign: 'center',
    marginLeft: 15,
    marginLeft: 15,
    marginBottom: 30,
  },
  successScore: {
    fontWeight: 'bold',
    color: 'green',
  },
  failScore: {
    fontWeight: 'bold',
    color: failRed,
  },
  subMessage: {
    fontSize: 14,
  },  
  playButtons: {
    width: 200,
    height: 40,
    backgroundColor: 'lightgrey',
    fontFamily: 'Avenir Next',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 1,
  },
  primarySuccessBtn: {
    backgroundColor: primaryPurple,
  },
  primaryFailBtn: {
    backgroundColor: primaryTeal,
  },
  imgMic: {
    top: -50,
  },
  imgBanner: {
    top: 20,
  },
  shadowOverlay: {
    width: width,
    height: height,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'black',
    opacity: 0.2,
    zIndex: 0,
  },
});