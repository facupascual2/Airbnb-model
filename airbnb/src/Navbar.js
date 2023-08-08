import styles from "./Navbar.module.css"
export function Navbar(){
    return(
        <div className={styles.navbar}>
            <img className={styles.logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"></img>
        </div>
    )

}
