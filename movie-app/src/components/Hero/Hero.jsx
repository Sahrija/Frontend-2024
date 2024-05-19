import { useRef, useState } from 'react'
import styles from './Hero.module.css'

export default function Hero() {

    const [isPlaying, setIsPlaying] = useState(false)
    const videoRef = useRef(null)

    function toggleTrailer() {
        setIsPlaying(!isPlaying)
        if (isPlaying) {
            videoRef.current.pause()
        } else {
            videoRef.current.play()
        }
    }

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
                    <button onClick={toggleTrailer} className={styles.hero__button}>
                        Watch trailer
                    </button>
                </div>
                <div className={styles.hero__right}>




                    {/* {isPlaying ? */}
                        <video className={styles.hero__image}
                        ref={videoRef} poster='https://esports.id/img/content/21320220315070855.jpeg'
                            autoPlay
                            src="https://imdb-video.media-imdb.com/vi2863252249/1434659607842-pgv4ql-1632715153328.mp4?Expires=1716139824&Signature=K7ptCNu6QT9yVorz6jYrbSoRjaV4pOdDfyNtRyRA3scKrEe1LXZAFs56o-nEYtlUcG71HVI7hZCyhTRCTv3Lum1-vMQQPH2MA-HGy0m6Egvt~W-HHs4UBdYjlVd1L6~xA6qNt0Qoqn17q8NYUzLFs84~~l19fR31PE16ftYE3Lm8T0Md-z89ai-Vi4xM6X4VEvyU45nw33lwlT2ueSjmFVyj9Oxkiixz4EycgXREdDy68gw8oLuVpfk7J1FdSCkBUiUrM2~I4sIsxg-dumNersp7c0ADNdonhZ8DUpb~Nze6ubw2PVT~ncZuGLUZd93ylpp0I3LywwXPJn5qFy6Fnw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
                        ></video>

                         {/* :
                        <img
                            className={styles.hero__image}
                            src="https://esports.id/img/content/21320220315070855.jpeg"
                            alt="image"
                        />
                    } */}

                </div>
            </section>
        </div>
    );
}
