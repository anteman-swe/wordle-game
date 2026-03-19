export default function wordCheck (guess, secret) {
    const guessUpperCase = guess.toUpperCase();
    const secretUpperCase = secret.toUpperCase();

    let guessSplitted = guessUpperCase.split('');
    let secretSplitted = secretUpperCase.split('');

    const guessLength = guessSplitted.length;

    let answerArray = new Array(guessLength).fill(null);

    for(let index = 0; index < guessSplitted.length; index++) {
        if(guessSplitted[index] == secretSplitted[index]) {
            secretSplitted[index] = null;
            answerArray[index] = {letter: guessSplitted[index], result: 'correct'};
        }
    }

    for(let index = 0; index < guessSplitted.length; index++) {
        if(!answerArray[index]) {
            const letter = guessSplitted[index];
            const findIndex = secretSplitted.indexOf(letter);
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