import { StyleSheet, Dimensions } from 'react-native';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export const optionsColors = {
  periwinkle: '#B0B5FF',
  lightpurple: '#E1E3FF',
}

export const gradientBlue = ['#4C39A1', '#000C87'];
export const gradientOrange = ['#DBA652', '#D89218'];
export const gradientPurple = ['#8A578F', '#421543'];
export const gradientBlack = ['#4F4F4F', '#000000'];

export const optionsStyles = StyleSheet.create({
  mainBackground: {
    left: 0,
    top: 0,
    right: 0,
    width: width,
    height: height,
    justifyContent: 'center',
  },
  titleFont: {
    position: 'absolute',
    top: 40,
    fontFamily: 'CaviarDreamsBold',
    fontSize: 36,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 15,
    marginTop: 15,
  },
  toggleButtons: {
    width: 100,
    height: 40,
    backgroundColor: 'grey',
  },
  colorSwatches: {
    width: 36,
    height: 36,
    borderRadius: 8,
    marginRight: 30,
  },
  durationButtons: {
    width: 76,
    height: 35,
    borderRadius: 18,
    backgroundColor: optionsColors.lightpurple,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 1,
  },
  outerWrapper: {
    height: 400,
    alignSelf: 'center',
    justifyContent: 'center',
  },  
  imgGear: {
    alignSelf: 'center',
    top: 50,
    zIndex: 2,
  },
  whiteBackground: {
    width: 290,
    height: 450,
    backgroundColor: '#F8F8F8',
    borderRadius: 20,
    alignSelf: 'center',
    padding: 20,
    paddingTop: 75,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 1,
    alignItems: 'baseline',
  },
  labelText: {
    fontFamily: 'Avenir Next Condensed',
    fontSize: 20,
  },
  buttonText: {
    fontFamily: 'Avenir Next Condensed',
    fontSize: 18,
  },
  hideText: {
    color: 'transparent',
  },  
  switchDistance: {
    marginLeft: 30,
  },
  check: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    position: 'absolute',
    top: 5,
  },  
});