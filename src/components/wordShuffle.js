import { foodList, kidsList, colorsList, musicList, animalsList, sportsList } from '@components/wordList.js'

export function shuffleWord(list) {

    var propString = list

    // Default category
    var list = sportsList;
    
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

    var index = Math.floor(Math.random() * (list.length));

    return list[index];
}