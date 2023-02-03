function getJoke() {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        const joke = data.joke;
        document.write(joke);
    });
}

getJoke();
