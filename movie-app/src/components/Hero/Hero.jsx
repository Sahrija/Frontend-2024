import { useEffect, useRef, useState } from 'react'
import styles from './Hero.module.css'
import HeroImage from '../Home/HeroImage';
import Button from '../Button/Button';
import axios from 'axios';

export default function Hero() {

    const [isPlaying, setIsPlaying] = useState(false);
    const dialogRef = useRef(null);

    const [movie, setMovie] = useState({})
    const genres = movie.genres && movie.genres.map((genre) => genre.name).join(", ");
    const idTrailer = movie.videos && movie.videos.results[0].key;

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

    useEffect(() => {
        const API_KEY = import.meta.env.VITE_API_KEY;

        async function fetchTrendingMovies() {
            const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
            const response = await axios(url);
            const firstMovie = response.data.results[0];

            return firstMovie;
        }

        async function fetchDetailTrendingMovie() {
            const trendingMovie = await fetchTrendingMovies();
            const id = trendingMovie.id;

            const params = `?api_key=${API_KEY}&append_to_response=videos`;
            const url = `https://api.themoviedb.org/3/movie/${id}${params}`;
            const response = await axios(url);

            setMovie(response.data);
        }

        fetchDetailTrendingMovie();

    }, []);

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
                        size='lg'
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
