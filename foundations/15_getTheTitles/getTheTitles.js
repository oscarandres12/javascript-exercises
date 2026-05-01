const getTheTitles = function(books) {
    let titles = [];
    for(let count = 0; count < books.length; count++){
        titles.push(books[count].title);
    }
    return(titles);
};

// Do not edit below this line
module.exports = getTheTitles;
