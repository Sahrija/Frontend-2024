import CreateMovieForm from "../components/CreateMovieForm/CreateMovieForm"
import Hero from "../components/Hero/Hero"
import Movies from "../components/Movies/Movies"
import data from "../../utils/constants/data"
import { useState } from "react";

export default function Home({moviesState}) {

    const [movies, setMovies] = moviesState;
    
    return (
        <>
            <Hero />
            <Movies movies={movies} />
            <CreateMovieForm moviesState={[movies, setMovies]}/>
        </>
    )
}
