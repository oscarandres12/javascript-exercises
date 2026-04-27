const repeatString = function(inputWord, repeatCount) {
    let repeatedWord = '';
    if(repeatCount >= 0){
        for(let count = 0; count < repeatCount; count++){
            repeatedWord += repeatedWord + inputWord;
        }
        return(repeatedWord);
    }else {
        return('ERROR');
    }
}

// Do not edit below this line
module.exports = repeatString;
