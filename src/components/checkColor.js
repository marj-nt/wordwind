const gradientBlue = ['#4C39A1', '#000C87'];
const gradientGreen = ['green', 'white'];
const gradientOrange = ['#DBA652', '#D89218'];
const gradientPurple = ['#8A578F', '#421543'];
const gradientBlack = ['#4F4F4F', '#000000'];

export function checkColor(number) {

    var propNum = number

    // Default color
    var list = gradientBlue;
    
    switch (propNum) {
        case 1:
          list = gradientBlue
          break;
        case 2:
          list = gradientOrange
          break;
        case 3:
          list = gradientPurple
          break;
        case 4:
          list = gradientBlack
          break;
      }
    return list;
}