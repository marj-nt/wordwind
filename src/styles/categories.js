import { Dimensions, StyleSheet } from 'react-native'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export const categoriesStyles = StyleSheet.create({
  mainBackground: {
    left: 0,
    top: 0,
    right: 0,
    width: width,
    height: height,
    justifyContent: 'center',
  },
  titleFont: {
    fontFamily: 'CaviarDreamsBold',
    fontSize: 36,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    width: width * 0.8,
    height: height * 0.8,
    alignSelf: 'center',
  },
  centerImage: {
    
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  shrinkImage: {
    width: 130,
    resizeMode: 'contain',
  },
  catLabels: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    fontFamily: 'Avenir Next Condensed',
    color: 'white',
    fontSize: 24,
    shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 1,
  }
})