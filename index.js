const movieSearch1 = document.querySelector("#movieSearch1");
const movieSearch2 = document.querySelector("#movieSearch2");

const fetchData = async (movieSearch) => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=3995f4a6&s=${movieSearch}`);
    const parsedResponse = await response.json();
    const data = await parsedResponse.Search;

    if (parsedResponse.Error) {
        console.log(parsedResponse.Error);
        return [];
    }

    return data;
}

const onSearch = async event => {
    const movies = await fetchData(event.target.value);
    for (let movie of movies) {
        const li = document.createElement("li");
        li.innerHTML = `
        <img src="${movie.Poster}" alt="Poster of ${movie.Title} film." />
        <span>${movie.Title} (${movie.Year})</span>
        `;

        document.querySelector("#movieList1").appendChild(li);
    }
    console.log(movies);
};

movieSearch1.addEventListener("input", debounce(onSearch));

movieSearch2.addEventListener("input", debounce(onSearch));