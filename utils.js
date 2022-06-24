const fetchMovieSearchData = async movieSearch => {
    const response = await fetch(`https://www.omdbapi.com/?apikey=d498fb83&type=movie&s=${movieSearch}`);
    const parsedResponse = await response.json();
    const data = await parsedResponse.Search;

    if (parsedResponse.Error) {
        return [];
    }

    return data;
};

function debounce(callback, delay = 500) {
    let timeoutID;
    return (...args) => {
        if (timeoutID) {
            clearTimeout(timeoutID);
        }
        timeoutID = setTimeout(() => {
            callback.apply(null, args);
        }, delay)
    };
}

function getTotalAwardsNumber(movie) {
    const movieAwards = movie.Awards.split(" ").reduce((previous, word) => {
        const number = parseInt(word);
    
        if (Number.isNaN(number)) {
            return previous;
        }
        else {
            return previous + number;
        }
    } , 0)

    return movieAwards;
}

function compareMovieNumbers(movie1Number, movie2Number, numberContext) {
    if (Number.isNaN(movie1Number) && Number.isNaN(movie2Number)) {
        const elements = document.getElementsByClassName(`card ${numberContext}`);
        for (let element of elements) {
            element.classList.add("tie");
        }
    }
    else if (Number.isNaN(movie1Number)) {
        const leftElements = document.getElementsByClassName(`card ${numberContext} left`);
        const rightElements = document.getElementsByClassName(`card ${numberContext} right`);
        leftElements[0].classList.add("looser");
        rightElements[0].classList.add("winner");
    }
    else if (Number.isNaN(movie2Number)) {
        const leftElements = document.getElementsByClassName(`card ${numberContext} left`);
        const rightElements = document.getElementsByClassName(`card ${numberContext} right`);
        leftElements[0].classList.add("winner");
        rightElements[0].classList.add("looser");
    }
    else if (movie1Number === movie2Number) {
        const elements = document.getElementsByClassName(`card ${numberContext}`);
        for (let element of elements) {
            element.classList.add("tie");
        }
    }
    else if (movie1Number < movie2Number) {
        const leftElements = document.getElementsByClassName(`card ${numberContext} left`);
        const rightElements = document.getElementsByClassName(`card ${numberContext} right`);
        leftElements[0].classList.add("looser");
        rightElements[0].classList.add("winner");
    }
    else {
        const leftElements = document.getElementsByClassName(`card ${numberContext} left`);
        const rightElements = document.getElementsByClassName(`card ${numberContext} right`);
        leftElements[0].classList.add("winner");
        rightElements[0].classList.add("looser");
    }
}