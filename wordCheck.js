export default function wordCheck (guess, secret) {
    const guessUpper = guess.toUpperCase();
    const secretUpper = secret.toUpperCase();
    const guessLength = guess.length();
    let answerArray = new Array.fill(null, 0, guessLength);
}