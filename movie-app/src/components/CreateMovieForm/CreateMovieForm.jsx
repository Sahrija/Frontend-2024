import styles from './CreateMovieForm.module.css'

export default function CreateMovieForm() {
  return (
    <>
      <form className={styles.form} action="">
        <div className={styles.form__left}>
          <label htmlFor="image" className={styles.form__input_file_label}>Image Poster</label>
          <input className={styles.form__input_file_hidden} type="file" accept='image/*' name="" id="image" required/>
        </div>
        <div className={styles.form__right}>
          <div className={styles.form__input_group}>
            <label className={styles.form__label} htmlFor="title">Movie Title</label>
            <input className={styles.form__input} type="text" name="" id="title" required/>
          </div>
          <div className={styles.form__input_group}>
            <label className={styles.form__label} htmlFor="title">Genre</label>
            <input className={styles.form__input} type="text" name="" id="title" required/>
          </div>
          <div className={styles.form__input_group}>
            <label className={styles.form__label} htmlFor="title">Description</label>
            <textarea className={styles.form__input} type="text" name="description" id="title" rows={5} required></textarea>
          </div>
          <button className={styles.form__button} type="submit">Add New Movie</button>
        </div>
      </form>
    </>
  )
}
