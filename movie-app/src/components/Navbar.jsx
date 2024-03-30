import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

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
            <li className={styles.navbar__item}><Link to={"/create"}>Add Movie</Link></li>
            <li className={styles.navbar__item}>Popular</li>
            <li className={styles.navbar__item}>Now Playing</li>
            <li className={styles.navbar__item}>Top Rated</li>
          </ul>
        </div>
      </nav>
    </div> 
  )
}
