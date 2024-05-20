import { useEffect, useRef, useState } from 'react'
import styles from './Hero.module.css'

export default function Hero() {

    const [isPlaying, setIsPlaying] = useState(false)
    const dialogRef = useRef(null)

    function toggleTrailerModal() {
        setIsPlaying(!isPlaying)
    }

    useEffect(() => {
        if (isPlaying) {
            dialogRef.current.showModal();
        } else {
            dialogRef.current.close();
            
            // TODO: stop the video trailer on dialog close
        }
    }, [isPlaying])

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
                    <button onClick={toggleTrailerModal} className={styles.hero__button}>
                        Watch trailer
                    </button>
                </div>
                <div className={styles.hero__right}>

                    <img
                        className={styles.hero__image}
                        src="https://esports.id/img/content/21320220315070855.jpeg"
                        alt="image"
                    />

                    <dialog ref={dialogRef}>
                        <div onClick={toggleTrailerModal} className={styles.modal_dialog_trailer}>
                            <iframe
                                width="560" height="315"
                                src="https://www.youtube.com/embed/fXmAurh012s?si=3Mu71oLutU117v32"
                                title="YouTube video player"
                                allow=""
                                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </dialog>

                </div>
            </section>
        </div>
    );
}
