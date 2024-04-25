import { useState } from 'react';
import styles from '../styles/Movies.module.css';

import data from '../../utils/constants/data';

import Movie from './Movie';

export default function Movies() {
    const [movies, setMovies] = useState(data);

    function handleClick() {
        setMovies(
            [...movies, { id: '9289382983', title: 'Arcane Season 2', year: 2024, type: 'movie', poster: 'https://i.ytimg.com/vi/7TfnA1PBbSY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBZqh1pkTGeJlmCtka9we0YHL9Bfg' }]
        )
    }

    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>Upcoming</h2>
                <div className={styles.movie__container}>
                    {movies.map((movie) => {
                        return <Movie
                            key={movie.id}
                            title={movie.title}
                            img_url={movie.poster}
                        />
                    })}
                </div>
            </section>
            <button onClick={handleClick}>Add movie</button>
        </div>
    );
}

