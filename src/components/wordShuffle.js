import { foodList, kidsList, colorsList, musicList, animalList, sportsList } from '@components/wordList.js'

export function shuffleWord() {
    
    var index = Math.floor(Math.random() * (foodList.length));

    return foodList[index];
}