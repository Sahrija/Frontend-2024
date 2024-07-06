import styles from './Footer.module.css';

export default function Footer() {
    return (
        <div className={styles.container}>
            <footer className={styles.footer}>
                <h2 className={styles.footer__title}>Grand Theater</h2>
                <p className={styles.footer__author}>Created by Ahmad Sahrija</p>
            </footer>
        </div>
    )
}
