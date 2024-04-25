import styles from '../styles/Movies.module.css';

export default function Movie(props) {
    let { title, img_url } = props;
    return (
        <div className={styles.movie}>
            <img
                className={styles.movie__image}
                src={img_url}
                alt=""
            />
            <h3 className={styles.movie__title}>{title}</h3>
            <p className={styles.movie__date}>coming soon</p>
        </div>
    )
}
