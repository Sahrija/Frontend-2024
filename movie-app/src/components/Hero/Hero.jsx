import { useEffect, useRef, useState } from 'react'
import styles from './Hero.module.css'
import HeroImage from '../Home/HeroImage';
import Button from '../Button/Button';

export default function Hero() {

    const [isPlaying, setIsPlaying] = useState(false);
    const dialogRef = useRef(null);

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
                    <Button
                        onClick={toggleTrailerModal}
                        variant='primary'
                    >
                        Watch trailer <img width={10} src="/play.png" alt="" />
                    </Button>
                </div>
                <div className={styles.hero__right}>

                    <HeroImage className={styles.hero__image} />

                    <dialog ref={dialogRef}>
                        <div onClick={toggleTrailerModal} className={styles.modal_dialog_trailer}>
                            {isPlaying ?
                                <iframe
                                    className={styles.modal_trailer_video}
                                    src="https://www.youtube.com/embed/fXmAurh012s?si=3Mu71oLutU117v32"
                                    title="YouTube video player"
                                    allow=""
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                :
                                ""
                            }
                        </div>
                    </dialog>

                </div>
            </section>
        </div>
    );
}
