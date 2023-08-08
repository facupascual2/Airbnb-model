import styles from "./Hero.module.css"
export function Hero(){
    return(
        <section className={styles.hero}>
            <img className={styles.heroPhoto} src="https://scrimba-react-course.vercel.app/static/media/photo-grid.f4b7f77f.png" />
            <h1 className={styles.heroHeader}>Online Experiences</h1>
            <p className={styles.heroText}>Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}