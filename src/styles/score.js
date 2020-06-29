import { StyleSheet, Dimensions } from 'react-native'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

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
    fontFamily: 'Avenir Next',
    fontWeight: 'bold',
    marginTop: -40,
    marginBottom: 20,
  },
  failText: {
    color: 'red',
    fontSize: 20,
    fontFamily: 'Avenir Next',
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
  playButtons: {
    width: 200,
    height: 40,
    backgroundColor: 'lightgrey',
    fontFamily: 'Avenir Next',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
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