import style from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { useState } from "react"

const Nav = ({ onSearch }) => {

    const [posicion, setPosicion] = useState("100vw")
    const [transition, setTransition] = useState("20s")


    function cambiarPosicion(){
        setPosicion("-100vw")
        setTimeout(() => {
            setTransition("0s")
            setPosicion("100vw")
        },"22000")
        setTransition("20s")
    }

    setTimeout(cambiarPosicion, "0")
    return(<div>
        <nav className={style.nav} >
            <div className={style.btns}>
                <Link to='/' className={style.about} >LOGOUT</Link>
                <Link to='/about' className={style.about} >About</Link>
                <Link to='/home' className={style.home} >Home</Link>
                <Link to='/favorites' className={style.about} >Favorites</Link>
            </div>

            <SearchBar onSearch={onSearch} />
        </nav>
        <div className={style.contenedor1}>
            <p className={style.texto1} style={{left: posicion, transition: transition}}>La mejor pagina de Henry, perras!</p>
        </div>
    </div>
    )
}

export default Nav;