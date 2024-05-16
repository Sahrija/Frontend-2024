import { useState } from 'react';
import { nanoid } from 'nanoid';
import styles from './CreateMovieForm.module.css';

export default function CreateMovieForm({ moviesState }) {

  const [movies, setMovies] = moviesState;

  const [title, setTitle] = useState('');
  const [year, setYear] = useState(0);
  const [posterUrl, setPosterUrl] = useState('');

  

  function submitHandler() {
    event.preventDefault();

    createNewMovie(title, year, posterUrl, movies, setMovies)

    setTitle('');
    setYear(0);
    setPosterUrl('');
  }

  return (
    <>
      <section className={styles.container}>
        <header className={styles.header}>
          <h2>Add Movie</h2>
        </header>
        <form onSubmit={submitHandler} className={styles.form} action="">
          <div className={styles.form__left}>
            <label htmlFor="image" className={styles.form__input_file_label}
            ><img src={posterUrl} alt="image preview" className={styles.form__image_preview} /></label>
            {/* <input className={styles.form__input_file_hidden} type="file" accept='image/*' name="" id="image" /> */}
          </div>
          <div className={styles.form__right}>
            {/* input title */}
            <div className={styles.form__input_group}>
              <label className={styles.form__label} htmlFor="title">Movie Title</label>
              <input className={styles.form__input} type="text" name="title" id="title" required onChange={(e) => setTitle(e.target.value)} value={title}/>
            </div>
            {/* input year */}
            <div className={styles.form__input_group}>
              <label className={styles.form__label} htmlFor="year">Year</label>
              <input className={styles.form__input} type="number" name="year" id="year" required onChange={(e) => setYear(e.target.value)} value={year || ''} min={1000} max={4000} />
            </div>
            {/* input posterUrl */}
            <div className={styles.form__input_group}>
              <label className={styles.form__label} htmlFor="posterUrl">Poster Url</label>
              <input className={styles.form__input} type="text" name="posterUrl" id="posterUrl" required onChange={(e) => setPosterUrl(e.target.value)} value={posterUrl} />
            </div>
            <div className={styles.form__input_group}>
              <label className={styles.form__label} htmlFor="title">Description</label>
              <textarea className={styles.form__input} type="text" name="description" id="title" rows={5}></textarea>
            </div>
            <button className={styles.form__button} type="submit">Add New Movie</button>
          </div>
        </form>
      </section>
    </>
  )
}

function createNewMovie(title, year, posterUrl, movies, setMovies) {
  const newMovie = {
    id: nanoid(),
    title: title,
    year: year,
    type: "movie",
    poster:
      posterUrl,
  }

  setMovies(
    [...movies, newMovie]
  )
}
