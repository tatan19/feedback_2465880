//Dependencias necesarias 
import { useState } from 'react'
//data
import Resenias from './data/Resenias'
import ReseniaList from './componentes/ReseniaList'

import Resenia from "./componentes/Resenia"

function App() {

    //Crear estado para arreglo de resenias
    const [listaresenias, setListaresenias] = useState (Resenias)
    return (
        <div className="container">
            <ReseniaList listaresenias={listaresenias} />
        </div>
    )
}

export default App