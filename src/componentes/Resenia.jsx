import React from 'react'
import { useState } from 'react'
// import {FaTimes}  from "react-icons/fa"

const Resenia = ({ resenia, deleteResenia  }) => {

    //Definir estados
    const [rating, setRating] = useState(resenia.rating)
    const [coment, setComent] = useState(resenia.text)

    //Cambiar el estado del rating
    const addNota = () => {
        setRating((prev) => {
            return prev + 1
        })
    }
    const resNota = () => {
        setRating((prev) => {
            return prev - 1
        })
    }

    return (
        <div className='card'>
            <div className='num-display'>
                {rating}
            </div>
            <div className='text-display'>
                {coment}
            </div>
            <button onClick={addNota}>
                Aumentar Nota
            </button>
            <br />
            <button onClick={() =>deleteResenia(resenia.id)} className='close'>
                Eliminar
            </button>
        </div>


    )

}

export default Resenia