import { Link } from 'react-router-dom';
import styles from '../Movies/Movies.module.css';

export default function Movie({ movie }) {
    const { id, title, poster_path, release_date } = movie;
    return (
        <div className={styles.movie}>
            <Link className='decoration_none' to={`/movie/${id}`}>
                <div className={styles.movie__image_container}>
                    <img
                        className={styles.movie__image}
                        src={'https://media.themoviedb.org/t/p/w440_and_h660_face' + poster_path}
                        alt=""
                    />
                </div>
                <h3 className={styles.movie__title}>{title}</h3>
                <p className={styles.movie__date}>{release_date}</p>
            </Link>
        </div>
    )
}
