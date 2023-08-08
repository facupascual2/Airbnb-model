import styles from "./Card.module.css"
export function Card(props){
    return(
        <div className={styles.card}>
            <img className={styles.cardImage} src={props.image}></img >
            <div className={styles.cardStats}>
                <img className={styles.cardStar} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Golden_star_2.svg/1070px-Golden_star_2.svg.png" />
                <h3>{props.name}</h3>
            </div>
            <p>{props.paragraph}</p>
            <p><strong>{props.price}</strong> / person</p>
        </div>
    )

}
