const palindromes = function (string) {
    let newString = string.replace(/\W/g, "").toLowerCase();
    let reverseString = newString.split("").reverse().join("");
    // let c = b.reverse();
    // let d = c.join("");
    if(newString == reverseString){
        return(true);
    }else{
        return(false);
    }
};

// Do not edit below this line
module.exports = palindromes;
