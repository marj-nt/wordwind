import { Dimensions } from 'react-native';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export const msgArray = ['Welcome to WordWind!\n\nTest your reading skills by having other players guess what you’re saying - backwards!\n\n(tap anywhere to continue)',
                'Let’s start simple:\nTry to figure out how to say “FUN” backwards!',
                'Let’s start simple:\nOnce you’re ready to read out loud, hold the red record button and say NUFFF!',
                'Release when you are done to end the recording',
                'Stumbled and want to try again?\n\nRecord until you get it right!',
                'Once you’re ready, tap the play button to let your friends hear in reverse so it sounds “normal”!',
                'The goal is for everyone to guess the original words before time runs out!',
                'If no one can guess it\n\nSHAKE\n\nthe device for a new word',
                'If someone gets it right\n\nSWIPE either left or right to get a point!',
                'TIPS\n\nThink of breaking up bigger words into syllables!\n\n(Or turn  on syllable help in options)',
                'Don’t be afraid to sound silly and over-pronounce!',
                ]

export const dirArray = [
    'up', 'up', 'up', 'down', 'down', 'down', 'down', 'down', 'down', 'down', 'down'
]

export const disTopArray = [
    'block', 'block', 'block', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none',
]

export const disBotArray = [
    'none', 'none', 'none', 'block', 'block', 'block', 'none', 'none', 'none', 'none', 'none',
]

export const wordArray = [
    'WORD', 'fun', 'fun', 'fun', 'fun', 'fun', '', '', '', 'en-ve-lope', 'en-ve-lope',
]

export const wordPosArray = [
    0, 2, 2, 2, 0, 0, 0, 0, 0, 2, 0,
]

export const topArray = [
    275, 275, 275, 350, 350, 350, 200, 100, 100, 32, 300,
]

export const leftArray = [
    width / 3.5, width / 3.5, width / 3.5, width / 10, width / 10, width / 2, 0, 0, 0, 0, 0,
]

export const recPosArray = [
    0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0,
]