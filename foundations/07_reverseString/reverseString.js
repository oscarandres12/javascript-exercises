const reverseString = function(word) {
    let reverseString = '';
    let wordSize = word.length-1;
    for( count = 0; count <= wordSize; count ++){
        reverseString += word[wordSize-count];
    }
    return(reverseString);
};
    
// Do not edit below this line
module.exports = reverseString;
