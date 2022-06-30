let movie1;
let movie2; 

function manageAutocomplete(rootElement, movieSearchBarElement, movieSearchBarLabel, movieListID, renderElement, side) {
    const root = document.getElementById(rootElement);
    const movieSearchBar = document.createElement("div");
    movieSearchBar.innerHTML = `
    <form action="">
    <label for="${movieSearchBarElement}">${movieSearchBarLabel}</label>
    <input type="text" name="${movieSearchBarElement}" id="${movieSearchBarElement}" size="50" placeholder="Search for a movie" autocomplete="off">
    <ul id="${movieListID}"></ul>
    </form>
    <div class="results" id="${renderElement}"></div>
    `;
    root.appendChild(movieSearchBar);

    const onMovieSelect = async movie => {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${movie.imdbID}`);
        const parsedResponse = await response.json();
    
        document.getElementById(renderElement).innerHTML = renderMovie(parsedResponse, side);

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

    const populateMovieList = (movies) => {
        if (movies[0] === "network error") {
            const li = document.createElement("li");
            li.innerHTML = "<span>Oops! An unexpected network error occurred! Please check your internet connection.</span>";
            document.querySelector(`#${movieListID}`).appendChild(li);

            li.addEventListener("click", () => {
                document.getElementById(movieListID).innerHTML = "";
            })
        }
        else if (movies.length === 0) {
            const li = document.createElement("li");
            li.innerHTML = "<span>Oops! No movie found! Please try again.</span>";
            document.querySelector(`#${movieListID}`).appendChild(li);

            li.addEventListener("click", () => {
                document.getElementById(movieListID).innerHTML = "";
            })
        }
        else {
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
    }

    const onSearch = async event => {
        document.getElementById(renderElement).innerHTML = "";
        const movies = await fetchMovieSearchData(event.target.value);
        document.querySelector(`#${movieListID}`).innerHTML = "";
        const movieList = populateMovieList(movies);
    };

    movieSearchBar.addEventListener("input", debounce(onSearch));
    movieSearchBar.addEventListener("submit", event => {
        event.preventDefault();
    });

    document.addEventListener("click", event => {
        if(!document.getElementById(movieListID).contains(event.target)) {
            document.getElementById(movieListID).innerHTML = "";
        }
    });
}