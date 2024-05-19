import Movie from "../../components/Movie/Movie";
import styles from './Popular.module.css';

export default function Popular({ moviesState }) {
    const [movies] = moviesState;

    return (
        <section className={styles.container}>
            <header className=''>
                Popular
            </header>
            <div className={styles.grid}>
                {movies.map((movie, index) => <Movie key={index} movie={movie} />)}
            </div>
        </section>
    )
}
