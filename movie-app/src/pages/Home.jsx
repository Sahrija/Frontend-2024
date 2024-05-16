import CreateMovieForm from "../components/CreateMovieForm/CreateMovieForm"
import Hero from "../components/Hero/Hero"
import Movies from "../components/Movies/Movies"
import data from "../../utils/constants/data"
import { useState } from "react";

export default function Home() {

    const [movies, setMovies] = useState(data);
    
    return (
        <>
            <Hero />
            <Movies movies={movies} />
            <CreateMovieForm moviesState={[movies, setMovies]}/>
        </>
    )
}
