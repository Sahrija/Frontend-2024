import styles from '../Movies/Movies.module.css';

export default function Movie({movie}) {
    let { title, poster, year } = movie;
    return (
        <div className={styles.movie}>
            <img
                className={styles.movie__image}
                src={poster}
                alt=""
            />
            <h3 className={styles.movie__title}>{title}</h3>
            <p className={styles.movie__date}>{year}</p>
        </div>
    )
}
