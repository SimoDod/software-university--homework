function movies(input) {
    let movies = [];

    input.forEach((el) => {
        if (el.includes('addMovie')) {
            let movie = el.replace('addMovie ', '');
            movies.push({ name: movie })
        } else if (el.includes('directedBy')) {
            let movieInfo = el.split(' directedBy ');
            let movieName = movieInfo[0];
            let director = movieInfo[1];

            movies.forEach(movie => {
                if (movie.name === movieName) {
                    movie.director = director;
                }
            })
        } else if (el.includes('onDate')) {
            let [movieName, date] = el.split(' onDate ');

            movies.forEach(movie => {
                if (movie.name === movieName) {
                    movie.date = date;
                }
            })
        }
    })
    
    movies.forEach(movie => {
        if(movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    })
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
)