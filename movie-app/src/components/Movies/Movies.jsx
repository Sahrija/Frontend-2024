import styles from './Movies.module.css';


import Movie from '../Movie/Movie';

export default function Movies({movies}) {

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
            {/* <button onClick={handleClick}>Add movie</button> */}
        </div>
    );
}

