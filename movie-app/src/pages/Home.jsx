import CreateMovieForm from "../components/CreateMovieForm/CreateMovieForm"
import Hero from "../components/Hero/Hero"
import Movies from "../components/Movies/Movies"

export default function Home({movies, setMovies}) {
    
    return (
        <>
            <Hero />
            <Movies movies={movies} />
            <CreateMovieForm moviesState={[movies, setMovies]}/>
        </>
    )
}
