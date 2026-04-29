const removeFromArray = function(array) {
    let newArray = [];
    for(let count = 1 ; count < arguments.length; count++){
        for(let count2 = 0 ; count2 < array.length ; count2++){
            if(array[count2] !== arguments[count]){
                newArray.push(array[count2])
            }
        }
        array = [...newArray];
        newArray = [];
    }
    return(array);
};

// Do not edit below this line
module.exports = removeFromArray;
