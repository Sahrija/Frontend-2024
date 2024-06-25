export function translateMovies(movies) {
    return movies.map((movie) => {
        const { title, poster_path } = movie
        return {
            title,
            poster: 'https://media.themoviedb.org/t/p/w440_and_h660_face' + poster_path,
            year: new Date(movie.release_date).toLocaleDateString('id-ID', {}),
        }
    })
}
