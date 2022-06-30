function compareMovies(movie1, movie2) {
    removePreviousColours();

    //compare IMDb ratings
    const movie1IMDbRating = parseFloat(movie1.imdbRating);
    const movie2IMDbRating = parseFloat(movie2.imdbRating);
    compareMovieNumbers(movie1IMDbRating, movie2IMDbRating, "imdb-rating");
    
    //compare metascore
    const movie1Metascore = parseFloat(movie1.Metascore);
    const movie2Metascore = parseFloat(movie2.Metascore);
    compareMovieNumbers(movie1Metascore, movie2Metascore, "metascore");

    //compare box office
    const movie1BoxOffice = parseInt(movie1.BoxOffice.replace(/\$/g, "").replace(/,/g, ""));
    const movie2BoxOffice = parseInt(movie2.BoxOffice.replace(/\$/g, "").replace(/,/g, ""));
    compareMovieNumbers(movie1BoxOffice, movie2BoxOffice, "box-office");

    //compare awards
    const movie1Awards = getTotalAwardsNumber(movie1);
    const movie2Awards = getTotalAwardsNumber(movie2);
    compareMovieNumbers(movie1Awards, movie2Awards, "awards");
}