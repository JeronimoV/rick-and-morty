import { useSelector, useDispatch } from "react-redux";
import style from "./favorite.module.css";
import { Link } from "react-router-dom";
import { filterCards, orderCards } from "../../redux/actions";


const Favorites = () => {
    const dispatch = useDispatch();
    const { myFavorites } = useSelector(state => state);

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return(
            <div>
                <div className={style.categorias}>
                <select name="order" onChange={handleOrder}>
                    <option selected="true" disabled="disabled">Order By</option>
                    <option value="All">All</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select name="filter" onChange={handleFilter}>
                    <option selected="true" disabled="disabled">Filter By</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="Unknown">Unknown</option>
                </select>
                </div>
            {
                myFavorites.map(char => {
                    return(
                        <div className={style.card}>
                            <div className={style.front} >
                            <img className={style.foto1} src={char.image} alt={char.name} />
                            <img className={style.foto2} src="https://images3.alphacoders.com/812/thumb-1920-812062.png" alt="" />
                            </div>

                            <div className={style.back} >
                                <div>
                                    <Link to={`/detail/${char.id}`} className={style.link} >
                                        <h2 className={style.name}>{char.name}</h2>
                                    </Link>
                                </div>

                                <div className={style.species} >
                                    <h2>Specie: {char.species}</h2>
                                    <h2>Gender: {char.gender}</h2>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Favorites;