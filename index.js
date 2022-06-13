const movieSearch1 = document.querySelector("#movieSearch1");
const movieSearch2 = document.querySelector("#movieSearch2");

const autocomplete = document.querySelector(".autocomplete");

const fetchData = async (movieSearch) => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=3995f4a6&type=movie&s=${movieSearch}`);
    const parsedResponse = await response.json();
    const data = await parsedResponse.Search;

    if (parsedResponse.Error) {
        console.log(parsedResponse.Error);
        return [];
    }

    return data;
}

const onMovieSelect = async movie => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=3995f4a6&i=${movie.imdbID}`);
    const parsedResponse = await response.json();
    console.log(parsedResponse);

    document.querySelector("#render").innerHTML = renderMovie(parsedResponse);
};

const renderMovie = movieDetail => {
    return `
    <article>
        <figure>
            <p>
                <img src="${movieDetail.Poster}" alt"Poster of ${movieDetail.Title} film." />
            </p>
        </figure>
        <section>
            <h2>${movieDetail.Title} (${movieDetail.Year})</h2>
            <h3>${movieDetail.Genre}</h3>
            <p>
                ${movieDetail.Plot}
            </p>
        </section>
        <section>
            <p>${movieDetail.Awards}</p>
            <p>${movieDetail.BoxOffice}</p>
            <p>${movieDetail.Metascore}</p>
            <p>${movieDetail.imdbRating}</p>
            <p>${movieDetail.imdbVotes}</p>
        </section>
    </article>
    `;
};

const populateMovieList = (movies) => {
    for (let movie of movies) {
        const li = document.createElement("li");
        li.innerHTML = `
        <img src="${movie.Poster}" alt="Poster of ${movie.Title} film." />
        <span>${movie.Title} (${movie.Year})</span>
        `;
        document.querySelector("#movieList1").appendChild(li);

        li.addEventListener("click", event => {
            autocomplete.innerHTML = "";
            movieSearch1.value = `${movie.Title} (${movie.Year})`;
            onMovieSelect(movie);
        })
    }
}

const onSearch = async event => {
    const movies = await fetchData(event.target.value);
    document.querySelector("#movieList1").innerHTML = "";
    movieList = await populateMovieList(movies);
};

movieSearch1.addEventListener("input", debounce(onSearch));
movieSearch2.addEventListener("input", debounce(onSearch));

document.addEventListener("click", event => {
    if(!autocomplete.contains(event.target)) {
        autocomplete.innerHTML = "";
    }
});