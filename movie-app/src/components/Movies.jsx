import styles from '../styles/Movies.module.css'

function Movie() {
    return (
        <div className={styles.movie}>
            <img
                className={styles.movie__image}
                src="https://i.ytimg.com/vi/7TfnA1PBbSY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBZqh1pkTGeJlmCtka9we0YHL9Bfg"
                alt=""
            />
            <h3 className={styles.movie__title}>Arcane Season 2</h3>
            <p className={styles.movie__date}>coming soon</p>
        </div>
    )
}

export default function Movies() {
    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>Upcoming</h2>
                <div className={styles.movie__container}>
                    <Movie />
                    <Movie />
                    <Movie />
                    <Movie />
                    <Movie />
                    <Movie />
                    <Movie />
                    <Movie />
                    <Movie />
                </div>
            </section>
        </div>
    )
}
