//Dependencias necesarias 
import { useState } from 'react'
//data
import Resenias from './data/Resenias'
import ReseniaList from './componentes/ReseniaList'

import Resenia from "./componentes/Resenia"

function App() {

    //Crear estado para arreglo de resenias
    const [listaresenias, setListaresenias] = useState(Resenias)

    //Metod para borrar una reseña
    const deleteResenia = (id) =>{
        window.confirm("Esta seguro de borrar la resenia")
    }

    return (
        <div className="container">
            
            <ReseniaList deleteResenia={deleteResenia}
                         listaresenias={listaresenias}
                          />
        </div>
    )
}

export default App