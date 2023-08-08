import { Navbar } from "./Navbar.js"
import { Hero } from "./Hero.js"
import { Card } from "./Card.js"
import styles from "./App.module.css"
export function App(){
    return(
        <div>
            <Navbar/>
            <Hero/>
            <div className= {styles.winners}>
                <Card image= "https://trimexico.com/wp-content/uploads/2019/12/Katie-Zaferes.jpg" name= "Katy Johnson" paragraph= "This is Katie winning a medal" price = "17 $"/>
                <Card image = "https://estaticos-cdn.sport.es/clip/85f5c964-b256-4cf3-88e4-87040e21e36a_alta-libre-aspect-ratio_default_0.jpg" name= "Lionel Messi" paragraph= "This is Messi winning with Inter Miami team" price= "1000 $"/>
                <Card image="https://www.infobae.com/new-resizer/6he-luLc0PkIkjb1PgKpB4JHYdU=/arc-anglerfish-arc2-prod-infobae/public/5LZJWZNVZFFZDLEGVCKUD25NTA.jpg" name= "Carlos Alcaraz" paragraph="This is Carlitos explaining how he defeat Djokovic" price= "120 $"/>
            </div>
        </div>
    )
}