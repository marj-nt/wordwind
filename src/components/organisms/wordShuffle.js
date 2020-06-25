import { foodList, kidsList, colorsList, musicList, animalList, sportsList } from '../organisms/wordList.js';

export function shuffleWord() {
    
    var index = Math.floor(Math.random() * (foodList.length));

    return foodList[index];
}