function compareMovies(movie1, movie2) {
    //compare IMDb ratings
    const movie1IMDbRating = parseFloat(movie1.imdbRating);
    const movie2IMDbRating = parseFloat(movie2.imdbRating);

    if (Number.isNaN(movie1IMDbRating) && Number.isNaN(movie2IMDbRating)) {
        const elements = document.getElementsByClassName("card imdb-rating");
        for (let element of elements) {
            element.classList.add("tie");
        }
    }
    else if (Number.isNaN(movie1IMDbRating)) {
        const leftElements = document.getElementsByClassName("card imdb-rating left");
        const rightElements = document.getElementsByClassName("card imdb-rating right");
        leftElements[0].classList.add("looser");
        rightElements[0].classList.add("winner");
    }
    else if (Number.isNaN(movie2IMDbRating)) {
        const leftElements = document.getElementsByClassName("card imdb-rating left");
        const rightElements = document.getElementsByClassName("card imdb-rating right");
        leftElements[0].classList.add("winner");
        rightElements[0].classList.add("looser");
    }
    else if (movie1IMDbRating === movie2IMDbRating) {
        const elements = document.getElementsByClassName("card imdb-rating");
        for (let element of elements) {
            element.classList.add("tie");
        }
    }
    else if (movie1IMDbRating < movie2IMDbRating) {
        const leftElements = document.getElementsByClassName("card imdb-rating left");
        const rightElements = document.getElementsByClassName("card imdb-rating right");
        leftElements[0].classList.add("looser");
        rightElements[0].classList.add("winner");
    }
    else {
        const leftElements = document.getElementsByClassName("card imdb-rating left");
        const rightElements = document.getElementsByClassName("card imdb-rating right");
        leftElements[0].classList.add("winner");
        rightElements[0].classList.add("looser");
    }
    
    //compare metascore
    const movie1Metascore = parseFloat(movie1.Metascore);
    const movie2Metascore = parseFloat(movie2.Metascore);

    if (Number.isNaN(movie1Metascore) && Number.isNaN(movie2Metascore)) {
        const elements = document.getElementsByClassName("card metascore");
        for (let element of elements) {
            element.classList.add("tie");
        }
    }
    else if (Number.isNaN(movie1Metascore)) {
        const leftElements = document.getElementsByClassName("card metascore left");
        const rightElements = document.getElementsByClassName("card metascore right");
        leftElements[0].classList.add("looser");
        rightElements[0].classList.add("winner");
    }
    else if (Number.isNaN(movie2Metascore)) {
        const leftElements = document.getElementsByClassName("card metascore left");
        const rightElements = document.getElementsByClassName("card metascore right");
        leftElements[0].classList.add("winner");
        rightElements[0].classList.add("looser");
    }
    else if (movie1Metascore === movie2Metascore) {
        const elements = document.getElementsByClassName("card metascore");
        for (let element of elements) {
            element.classList.add("tie");
        }
    }
    else if (movie1Metascore < movie2Metascore) {
        const leftElements = document.getElementsByClassName("card metascore left");
        const rightElements = document.getElementsByClassName("card metascore right");
        leftElements[0].classList.add("looser");
        rightElements[0].classList.add("winner");
    }
    else {
        const leftElements = document.getElementsByClassName("card metascore left");
        const rightElements = document.getElementsByClassName("card metascore right");
        leftElements[0].classList.add("winner");
        rightElements[0].classList.add("looser");
    }

    //compare box office
    const movie1BoxOffice = parseInt(movie1.BoxOffice.replace(/\$/g, "").replace(/,/g, ""));
    const movie2BoxOffice = parseInt(movie2.BoxOffice.replace(/\$/g, "").replace(/,/g, ""));

    if (Number.isNaN(movie1BoxOffice) && Number.isNaN(movie2BoxOffice)) {
        const elements = document.getElementsByClassName("card box-office");
        for (let element of elements) {
            element.classList.add("tie");
        }
    }
    else if (Number.isNaN(movie1BoxOffice)) {
        const leftElements = document.getElementsByClassName("card box-office left");
        const rightElements = document.getElementsByClassName("card box-office right");
        leftElements[0].classList.add("looser");
        rightElements[0].classList.add("winner");
    }
    else if (Number.isNaN(movie2BoxOffice)) {
        const leftElements = document.getElementsByClassName("card box-office left");
        const rightElements = document.getElementsByClassName("card box-office right");
        leftElements[0].classList.add("winner");
        rightElements[0].classList.add("looser");
    }
    else if (movie1BoxOffice === movie2BoxOffice) {
        const elements = document.getElementsByClassName("card box-office");
        for (let element of elements) {
            element.classList.add("tie");
        }
    }
    else if (movie1BoxOffice < movie2BoxOffice) {
        const leftElements = document.getElementsByClassName("card box-office left");
        const rightElements = document.getElementsByClassName("card box-office right");
        leftElements[0].classList.add("looser");
        rightElements[0].classList.add("winner");
    }
    else {
        const leftElements = document.getElementsByClassName("card box-office left");
        const rightElements = document.getElementsByClassName("card box-office right");
        leftElements[0].classList.add("winner");
        rightElements[0].classList.add("looser");
    }

    //compare awards
    const movie1Awards = movie1.Awards.split(" ").reduce((previous, word) => {
        const number = parseInt(word);

        if (Number.isNaN(number)) {
            return previous;
        }
        else {
            return previous + number;
        }
    } , 0)

    const movie2Awards = movie2.Awards.split(" ").reduce((previous, word) => {
        const number = parseInt(word);

        if (Number.isNaN(number)) {
            return previous;
        }
        else {
            return previous + number;
        }
    } , 0)

    if (movie1Awards === movie2Awards) {
        const elements = document.getElementsByClassName("card awards");
        for (let element of elements) {
            element.classList.add("tie");
        }
    }
    else if (movie1Awards < movie2Awards) {
        const leftElements = document.getElementsByClassName("card awards left");
        const rightElements = document.getElementsByClassName("card awards right");
        leftElements[0].classList.add("looser");
        rightElements[0].classList.add("winner");
    }
    else {
        const leftElements = document.getElementsByClassName("card awards left");
        const rightElements = document.getElementsByClassName("card awards right");
        leftElements[0].classList.add("winner");
        rightElements[0].classList.add("looser");
    }
}