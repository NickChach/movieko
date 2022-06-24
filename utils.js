const debounce = (callback, delay = 1000) => {
    let timeoutID;
    return (...args) => {
        if (timeoutID) {
            clearTimeout(timeoutID);
        }
        timeoutID = setTimeout(() => {
            callback.apply(null, args);
        }, delay)
    };
};

const fetchMovieSearchData = async movieSearch => {
    const response = await fetch(`https://www.omdbapi.com/?apikey=d498fb83&type=movie&s=${movieSearch}`);
    const parsedResponse = await response.json();
    const data = await parsedResponse.Search;

    if (parsedResponse.Error) {
        return [];
    }

    return data;
}