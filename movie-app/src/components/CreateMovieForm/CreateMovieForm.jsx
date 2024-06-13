import { useState } from 'react';
import { nanoid } from 'nanoid';
import styles from './CreateMovieForm.module.css';
import ValidityMessage from '../Form/ValidityMessage';

export default function CreateMovieForm({ moviesState }) {

  const [movies, setMovies] = moviesState;
  const defaultPoster = 'https://dummyimage.com/291.100x435.104/e0e0e0/696969';

  const [inputs, setInputs] = useState(
    {
      title: {
        value: '',
        isValid: true,
      },
      year: {
        value: 0,
        isValid: true,
      },
      genre: {
        value: '',
        isValid: true,
      },
      posterUrl: {
        value: '',
        isValid: true,
      },
    }
  );

  function handleChange(e) {
    const { name, value } = e.target;
    const isValueEmpty = value === ''

    // TODO: check if the image is exist

    setInputs({
      ...inputs,
      [name]: {
        value: value,
        isValid: !isValueEmpty
      }
    })
  }

  function createNewMovie(title, year, genre, posterUrl) {
    const newMovie = {
      id: nanoid(),
      title: title,
      year: year,
      type: genre,
      poster:
        posterUrl,
    }

    setMovies(
      [...movies, newMovie]
    )
  }

  function resetFormInputs() {
    inputs.title.value = '';
    inputs.year.value = 0;
    inputs.posterUrl.value = '';
    inputs.genre.value = '';
  }

  function submitHandler() {
    event.preventDefault();
    const { title, year, genre, posterUrl } = inputs;

    createNewMovie(title.value, year.value, genre.value, posterUrl.value)

    resetFormInputs();
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
            ><img src={inputs.posterUrl.value || defaultPoster} alt="image preview" className={styles.form__image_preview} /></label>
            {/* <input className={styles.form__input_file_hidden} type="file" accept='image/*' name="" id="image" /> */}
          </div>
          <div className={styles.form__right}>
            {/* input title */}
            <div className={styles.form__input_group}>
              <label className={styles.form__label} htmlFor="title">Movie Title</label>
              <input className={styles.form__input} type="text" name="title" id="title" required
                value={inputs.title.value}
                onChange={handleChange}
              />
              <ValidityMessage isValid={inputs.title.isValid}>
                The title is required
              </ValidityMessage>
            </div>
            {/* input year */}
            <div className={styles.form__input_group}>
              <label className={styles.form__label} htmlFor="year">Year</label>
              <input className={styles.form__input} type="number" name="year" id="year" required
                value={inputs.year.value || ''}
                onChange={handleChange}
                min={1000} max={4000} />
              <ValidityMessage isValid={inputs.year.isValid}>
                Year cannot be emtpy
              </ValidityMessage>
            </div>
            {/* input posterUrl */}
            <div className={styles.form__input_group}>
              <label className={styles.form__label} htmlFor="posterUrl">Poster Url</label>
              <input className={styles.form__input} type="text" name="posterUrl" id="posterUrl" required
                value={inputs.posterUrl.value}
                onChange={handleChange}
              />
              <ValidityMessage isValid={inputs.posterUrl.isValid}>
                Image source cannot be found
              </ValidityMessage>
            </div>
            {/* input genre */}
            <div className={styles.form__input_group}>
              <label className={styles.form__label} htmlFor="genre">Genre</label>
              <select
                className={styles.form__input} 
                name="genre" id="genre"
                value={inputs.genre.value}
                onChange={handleChange}
                required
              >
                <option value="">-- select a genre --</option>
                <option value="action">Action</option>
                <option value="adventure">Adventure</option>
                <option value="drama">Drama</option>
                <option value="horor">Horor</option>
                <option value="sci-fi">Sci-fi</option>
                <option value="super hero">Super Hero</option>
              </select>
              <ValidityMessage isValid={inputs.genre.isValid}>
                Genre must be selected
              </ValidityMessage>
            </div>
            <button className={styles.form__button} type="submit">Add New Movie</button>
          </div>
        </form>
      </section>
    </>
  )
}
