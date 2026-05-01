const fibonacci = function(fibonacciNumber) {
    if(fibonacciNumber >= 0){
        let aux1 = 1;
        let aux2 = -1;
        let sum = 0;
        for(let count = 0 ; count <= fibonacciNumber ; count++){
            sum = aux1 + aux2;
            aux2 = aux1;
            aux1 = sum;
        }
        return(sum);
    }else{
        return('OOPS');
    }
};

// Do not edit below this line
module.exports = fibonacci;
