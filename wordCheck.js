export default function wordCheck (guess, secret) {
    const guessUpperCase = guess.toUpperCase();
    const secretUpperCase = secret.toUpperCase();
    
    const guessLength = guess.length;

    let answerArray = new Array(guessLength).fill(null);

    let guessSplitted = guessUpperCase.split('');
    let secretSplitted = secretUpperCase.split('');

    for(let index = 0; index < guessSplitted.length; index++) {
        if(guessSplitted[index] == secretSplitted[index]) {
            secretSplitted[index] = null;
            const answerObj = {letter: guessSplitted[index], result: 'correct'}
            answerArray[index] = answerObj;
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