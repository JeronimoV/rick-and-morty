import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFavorite, deleteFavorite } from "../../redux/actions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Card({ name, gender, onClose, species, image, id }) {
   const dispatch = useDispatch();
   const { myFavorites } = useSelector(state => state);
   const [ isFav, setIsFav ] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         dispatch(deleteFavorite(id));
      }
      else{
         setIsFav(true);
         dispatch(addFavorite({ name, gender, onClose, species, image, id }));
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.card} >
         {
            isFav ? (
               <button className={style.botonfav} onClick={handleFavorite}>❤️</button>
            ) : (
               <button className={style.botonfav} onClick={handleFavorite}>🤍</button>
            )
         }
         <div className={style.front} >
            <img className={style.foto1} src={image} alt={name} />
            <img className={style.foto2} src="https://images3.alphacoders.com/812/thumb-1920-812062.png" alt="" />
         </div>

         <div className={style.back} >
            <div className={style.contenedor2}>
               <Link to={`/detail/${id}`} className={style.link} >
                  <h2 className={style.name}>{name}</h2>
               </Link>
            </div>
            <div className={style.contenedor}>
               <div className={style.species} >
                  <h3>Specie: {species}</h3>
                  <h3>Gender: {gender}</h3>
               </div>

               <div className={style.btn}>
                  <button className={style.botoncerrad} onClick={onClose}>X</button>
               </div>
            </div>
         </div>
      </div>
   );
}


export default Card;
