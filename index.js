const movieSearch1 = document.querySelector("#movieSearch1");
const movieSearch2 = document.querySelector("#movieSearch2");

const fetchData = async (movieSearch) => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=3995f4a6&s=${movieSearch}`);
    const parsedResponse = await response.json();
    console.log(parsedResponse);
}

const debounce = (callback) => {
    let timeoutID;
    return (...args) => {
        if (timeoutID) {
            clearTimeout(timeoutID);
        }
        timeoutID = setTimeout(() => {
            callback.apply(null, args);
        }, 1000)
    };
};

const onSearch = event => {
    fetchData(event.target.value);
};

movieSearch1.addEventListener("input", debounce(onSearch));

movieSearch2.addEventListener("input", debounce(onSearch));