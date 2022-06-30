if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/service-worker.js")
        .then(registration => console.log("Service worker says hi!"))
        .catch(error => console.log("epic fail", error));
    })
}

manageAutocomplete("root1", "movieSearch1", "Challenger 1", "MovieList1", "render1", "left");
manageAutocomplete("root2", "movieSearch2", "Challenger 2", "MovieList2", "render2", "right");