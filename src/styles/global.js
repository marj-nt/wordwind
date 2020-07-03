import { StyleSheet, Dimensions } from 'react-native';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export const gradientBlue = ['#4C39A1', '#000C87'];
export const gradientOrange = ['#DBA652', '#D89218'];
export const gradientPurple = ['#8A578F', '#421543'];
export const gradientBlack = ['#4F4F4F', '#000000'];

export const globalStyles = StyleSheet.create({
  mainBackground: {
    left: 0,
    top: 0,
    right: 0,
    width: width,
    height: height,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 15,
    marginTop: 15,
  },
  backContainer: {
      width: 50,
      height: 50,
      zIndex: 1,
      position: 'absolute',
    //   borderColor: 'black',
    //   borderWidth: 2,
      top: 40,
      left: 15,
  },
});