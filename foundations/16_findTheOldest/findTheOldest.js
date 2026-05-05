const findTheOldest = function(people) {
    return people.map((person) => {
        if('yearOfDeath' in person === false){
            person.yearOfDeath = new Date().getFullYear();
        }
        return person
    }).reduce((accumulator, currentValue) => {
        if(currentValue.yearOfDeath - currentValue.yearOfBirth > accumulator.yearOfDeath - accumulator.yearOfBirth){
            return currentValue;
        }else{
            return accumulator;
        }
    })
}      

// Do not edit below this line
module.exports = findTheOldest;
