import { useEffect, useState } from "react";
import Movie from "../../components/Movie/Movie";
import styles from './Popular.module.css';
import { Link, useSearchParams } from "react-router-dom";

import { fetchPopularMovies } from "../../services/moviesApi";
import Button from "../../components/Button/Button";

export default function Popular() {
    const [movies, setMovies] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    const page = parseInt(searchParams.get('page') || 1);

    useEffect(() => {
        fetchPopularMovies(page).then((res) => {
            setMovies(res);
        });
    }, [page, setMovies, setSearchParams]);

    return (
        <section className={styles.container}>
            <header className=''>
                Popular
            </header>
            <div className={styles.grid}>
                {movies.map((movie, index) =>
                    <Movie key={index} movie={movie} />
                )}
            </div>
            <Button variant='tertiary'><Link className="button" to={`?page=${page - 1}`}>Prev</Link></Button>
            <Button variant='tertiary'><Link className="button" to={`?page=${page + 1}`}>Next</Link></Button>
        </section>
    )
}
