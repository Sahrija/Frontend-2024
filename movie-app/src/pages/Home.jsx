import CreateMovieForm from "../components/CreateMovieForm/CreateMovieForm"
import Hero from "../components/Hero/Hero"
import Movies from "../components/Movies/Movies"

export default function Home() {
    
    return (
        <>
            <Hero />
            <Movies />
            <CreateMovieForm />
        </>
    )
}
