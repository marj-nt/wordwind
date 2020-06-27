import { foodList, kidsList, colorsList, musicList, animalsList, sportsList } from '@components/wordList.js'
import { foodListSyl, kidsListSyl, colorsListSyl, musicListSyl, animalsListSyl, sportsListSyl } from '@components/wordList.js'

export function shuffleWord(list, syl) {

    var propString = list
    var boolSyl = syl

    console.log(list)

    // Default category
    var list = sportsList;

    console.log(syl)
    

    if(boolSyl) {
      switch (propString) {
        case 'sports':
          list = sportsListSyl
          break;
        case 'music':
          list = musicListSyl
          break;
        case 'food':
          list = foodListSyl
          break;
        case 'animals':
          list = animalsListSyl
          break;
        case 'colors':
          list = colorsListSyl
          break;
        case 'kids':
          list = kidsListSyl
          break;
      }
    } else {
      switch (propString) {
        case 'sports':
          list = sportsList
          break;
        case 'music':
          list = musicList
          break;
        case 'food':
          list = foodList
          break;
        case 'animals':
          list = animalsList
          break;
        case 'colors':
          list = colorsList
          break;
        case 'kids':
          list = kidsList
          break;
      }
    }
    
    var index = Math.floor(Math.random() * (list.length));

    return list[index];
}