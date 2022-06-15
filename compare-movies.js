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
}