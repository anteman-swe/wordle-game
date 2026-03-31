import type { testTuple } from '../../shared/types.js'

export default function wordCheck (guess: string, secret: string): Array<testTuple> {
   
    let guessSplitted: Array<string> = guess.toUpperCase().split('');
    let secretSplitted: Array<string | null> = secret.toUpperCase().split('');

    const guessLength: number = guessSplitted.length;

    let answerArray: Array<testTuple> = new Array(guessLength).fill(null);

    for(let index = 0; index < guessSplitted.length; index++) {
        if(guessSplitted[index] == secretSplitted[index]) {
            secretSplitted[index] = null;
            answerArray[index] = {letter: guessSplitted[index]!, result: 'correct'};
        }
    }

    for(let index = 0; index < guessSplitted.length; index++) {
        if(!answerArray[index]) {
            const letter: string = guessSplitted[index]!;
            const findIndex:number = secretSplitted.indexOf(letter!);
            if(findIndex !== -1){
                answerArray[index] = {letter: letter, result: 'misplaced'};
                secretSplitted[findIndex] = null;
            } else {
                answerArray[index] = {letter: letter, result: 'incorrect'};
            }
        }
    }

    return answerArray;
}
// Function for checking for difference in length between the words, preparation just in case
// function checkForDiffLength (guessWord, secretWord) {
//     let guessFix = guessWord;
//     let secretFix = secretWord;

//     const anyDiff = guessWord.length - secretWord.length;
    
//     if(anyDiff > 0) {
//         for(let i = 0; i < anyDiff; i++) {
//             secretFix.push(0); // Using number to not get false positive with null and null
//         }
//     }
//     if(anyDiff < 0) {
//         for(let i = 0; i < anyDiff; i++) {
//             guessFix.push(0); // Using number to not get false positive with null and null
//         }
//     }
//     return [guessFix, secretFix];
// }