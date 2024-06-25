import styles from './MovieDetail.module.css';
import { useEffect, useRef, useState } from 'react';
import Button from '../Button/Button';
import { useParams } from 'react-router-dom';
import { fetchMovie } from '../../services/moviesApi';


export default function MovieDetail() {
    const { id } = useParams();

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
        }
    }, [isPlaying])

    useEffect(() => {
        fetchMovie(id).then((res) => {
            setMovie(res);
        });
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <div className={styles.container}
            style={{ backgroundImage: `url(${leadingBackdropUrl + movie.backdrop_path})` }}>
            <section className={styles.movie_detail}>

                <div className={styles.movie_detail__right}>
                    <div className={styles.movie_detail__image_container}>
                        <img
                            src={leadingPosterUrl + movie.poster_path}
                            alt=''
                            className={styles.movie_detail__image}
                        />
                    </div>
                </div>

                <div className={styles.movie_detail__left}>
                    <h2 className={styles.movie_detail__title}>{movie.title}</h2>
                    <h3 className={styles.movie_detail__genre}>
                        {genres}
                    </h3>
                    <p className={styles.movie_detail__description}>
                        {movie.overview}
                    </p>
                    <Button
                        onClick={toggleTrailerModal}
                        variant='primary'
                        size='lg'
                    >
                        Watch trailer <img width={10} src="/play.png" alt="" />
                    </Button>
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


            </section>
        </div>
    )
}
