export default function wordSelect(wordList: Array<string>, wordLength: number, allowDuplicates: boolean = true) {
    const validWords = wordList.filter(word => {
        if(word.length !== wordLength) return false;

        if(!allowDuplicates) {
            const lettersUnique  = new Set(word.toUpperCase());
            if(lettersUnique.size !== word.length) return false;
        }
        return true;
    });
    if(validWords.length === 0) {
        return null;
    }
    const randomIndex = Math.floor(Math.random() * validWords.length);
    return validWords[randomIndex];
}