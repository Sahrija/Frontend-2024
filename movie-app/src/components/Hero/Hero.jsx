import styles from './Hero.module.css'

export default function Hero() {
    return (

        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>Arcane</h2>
                    <h3 className={styles.hero__genre}>
                        Genre: Action, Drama, Sci-fi
                    </h3>
                    <p className={styles.hero__description}>
                        A movie by League of Legends
                    </p>
                    <button className={styles.hero__button}>Watch</button>
                </div>
                <div className={styles.hero__right}>
                    <img
                        className={styles.hero__image}
                        src="https://esports.id/img/content/21320220315070855.jpeg"
                        alt="image"
                    />
                </div>
            </section>
        </div>
    );
}
