import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div>
          <h1 className={styles.navbar__brand}>Grand Theater</h1>
        </div>
        <div>
          <ul className={styles.navbar__list}>
            <li className={styles.navbar__item}><Link to={"/"}>Home</Link></li>
            <li className={styles.navbar__item}><Link to={"/movies/create"}>Add Movie</Link></li>
            <li className={styles.navbar__item}><Link to={'/movies/popular'}>Popular</Link></li>
            <li className={styles.navbar__item}><Link to={'/movies/now-playing'}>Now Playing</Link></li>
            <li className={styles.navbar__item}><Link to={'/movies/top-rated'}>Top Rated</Link></li>
          </ul>
        </div>
      </nav>
    </div> 
  )
}
