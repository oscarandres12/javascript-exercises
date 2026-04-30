const sumAll = function(inputNumber1, inputNumber2) {
    
    if(inputNumber1 < 0 || inputNumber2 < 0) {
        return('ERROR')
    }else if (Number.isInteger(inputNumber1) && Number.isInteger(inputNumber2)){
        if(inputNumber1 > inputNumber2) {
            let aux = inputNumber1;
            inputNumber1 = inputNumber2;
            inputNumber2 = aux;
        }
    }else {
        return('ERROR')
    }

    let sum = 0;
    while(inputNumber1 <= inputNumber2){
        sum += inputNumber1;
        ++inputNumber1;
    }
    return(sum);
};

// Do not edit below this line
module.exports = sumAll;
