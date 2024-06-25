import styles from './Movies.module.css';


import Movie from '../Movie/Movie';
import { useEffect, useState } from 'react';
import { fetchUpcomingMovies } from '../../services/moviesApi';

export default function Movies() {
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        fetchUpcomingMovies().then((res)=>{
            setMovies(res)
        });
    }, [])

    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>Upcoming</h2>
                <div className={styles.movie__container}>
                    {movies.map((movie) => {
                        return <Movie
                            key={movie.id}
                            movie={movie}
                        />
                    })}
                </div>
            </section>
        </div>
    );
}

