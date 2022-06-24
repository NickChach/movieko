let movie1;
let movie2; 

function createAutocomplete(rootElement, movieSearchBarElement, movieSearchBarLabel, movieListID, renderElement, side) {
    const root = document.getElementById(rootElement);
    const movieSearchBar = document.createElement("div");
    movieSearchBar.innerHTML = `
    <form action="">
    <label for="${movieSearchBarElement}">${movieSearchBarLabel}</label>
    <input type="text" name="${movieSearchBarElement}" id="${movieSearchBarElement}" size="50" placeholder="Search for a movie">
    <ul id="${movieListID}"></ul>
    </form>
    <div class="results" id="${renderElement}"></div>
    `;
    root.appendChild(movieSearchBar);

    const onMovieSelect = async movie => {
        const response = await fetch(`https://www.omdbapi.com/?apikey=d498fb83&i=${movie.imdbID}`);
        const parsedResponse = await response.json();
    
        document.getElementById(renderElement).innerHTML = renderMovie(parsedResponse);

        if (side === "left") {
            movie1 = parsedResponse;
        }
        else {
            movie2 = parsedResponse;
        }

        if (movie1 && movie2) {
            compareMovies(movie1, movie2);
        }
    };

    const renderMovie = movieDetails => {
        return `
        <article>
            <div class="grid">
                <img src="${movieDetails.Poster}" alt="Poster of ${movieDetails.Title} film." />
                <section>
                    <h2>${movieDetails.Title} (${movieDetails.Year})</h2>
                    <h3>${movieDetails.Genre}</h3>
                    <p>
                        ${movieDetails.Plot}
                    </p>
                </section>
            </div>
            <section>
                <p class="card awards ${side}">Awards: ${movieDetails.Awards}</p>
                <p class="card box-office ${side}">Box Office: ${movieDetails.BoxOffice}</p>
                <p class="card imdb-rating ${side}">IMDb Rating: ${movieDetails.imdbRating}</p>
                <p class="card metascore ${side}">Metascore: ${movieDetails.Metascore}</p>
            </section>
        </article>
        `;
    };

    const populateMovieList = (movies) => {
        for (let movie of movies) {
            const li = document.createElement("li");
            li.innerHTML = `
            <img src="${movie.Poster}" alt="" />
            <span>${movie.Title} (${movie.Year})</span>
            `;
            document.querySelector(`#${movieListID}`).appendChild(li);
    
            li.addEventListener("click", () => {
                document.getElementById(movieListID).innerHTML = "";
                document.getElementById(movieSearchBarElement).value = `${movie.Title} (${movie.Year})`;
                onMovieSelect(movie);
            })
        }
    }

    const onSearch = async event => {
        const movies = await fetchMovieSearchData(event.target.value);
        document.querySelector(`#${movieListID}`).innerHTML = "";
        const movieList = populateMovieList(movies);
    };

    movieSearchBar.addEventListener("input", debounce(onSearch));

    document.addEventListener("click", event => {
        if(!document.getElementById(movieListID).contains(event.target)) {
            document.getElementById(movieListID).innerHTML = "";
        }
    });
}