import { useState } from "react";
import validation from "./validation";
import style from "./form.module.css" 

const Form = ({ login }) => {

    const [userData, setUserData] = useState({
        username: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        username: '',
        password: ''
    })

    const handleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }
    
    return(
        <div>
        <form className={style.contenedor} onSubmit={handleSubmit}>
            <img className={style.img}  src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png" alt="" />
            <label className={style.label1}  htmlFor="username" style={{ color:'white' }} >Username:</label>
            <input className={style.input1}  type="text" name="username" value={userData.username} onChange={handleInputChange} />
           

            <label className={style.label2}  htmlFor="password" style={{ color:'white' }}>Password:</label>
            <input className={style.input2}  type="password" name="password" value={userData.password} onChange={handleInputChange} />
           

            <button className={style.boton} >LOGIN</button>
        </form>
        <h1 className={style.perra}>Bienvenido a la mejor pagina, perra</h1>
        <img className={style.perra2} src="https://pngimg.com/uploads/rick_morty/rick_morty_PNG11.png" alt="" />
        </div>
    )
}

export default Form;