import { useEffect, useRef, useState } from 'react'
import styles from './Hero.module.css'
import Button from '../Button/Button';
import axios from 'axios';

export default function Hero() {

    const [isPlaying, setIsPlaying] = useState(false);
    const dialogRef = useRef(null);

    const [movie, setMovie] = useState({})
    const genres = movie.genres && movie.genres.map((genre) => genre.name).join(", ");
    const idTrailer = movie.videos && movie.videos.results[0].key;

    const leadingBackdropUrl = 'https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces'
    const leadingPosterUrl = 'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/'

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
            console.log('====================================');
            console.log(response.data);
            console.log('====================================');
        }

        fetchDetailTrendingMovie();

    }, []);

    return (

        <div className={styles.container}
            style={{ backgroundImage: `url(${leadingBackdropUrl + movie.backdrop_path})` }}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>{movie.title}</h2>
                    <h3 className={styles.hero__genre}>
                        {genres}
                    </h3>
                    <p className={styles.hero__description}>
                        {movie.overview}
                    </p>
                    <Button
                        onClick={toggleTrailerModal}
                        variant='primary'
                        size='lg'
                        full
                    >
                        Watch trailer <img width={10} src="/play.png" alt="" />
                    </Button>
                </div>
                <div className={styles.hero__right}>

                    <div className={styles.hero__image_container}>
                        <img
                            // src={leadingBackdropUrl + movie.backdrop_path}
                            src={leadingPosterUrl + movie.poster_path}
                            alt=''
                            className={styles.hero__image}
                        />
                    </div>

                    <dialog ref={dialogRef}>
                        <div onClick={toggleTrailerModal} className={styles.modal_dialog_trailer}>
                            {isPlaying ?
                                <iframe
                                    className={styles.modal_trailer_video}
                                    src={`https://www.youtube.com/embed/${idTrailer}?si=3Mu71oLutU117v32`}
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
