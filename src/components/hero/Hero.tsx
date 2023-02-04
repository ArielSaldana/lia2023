import styles from './Hero.module.css'

export default function Hero() {
    return (
        <div className={styles.hero}>
            <h1>Lia's 25th Birthday</h1>
            <div className={styles.scrollDown}>
                <div>
                    <p>Scroll Down</p>
                </div>
            </div>
        </div>
    )
}
