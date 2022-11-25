import Resenia from "./Resenia";

const ReseniasList = ({ listaresenias, deleteResenia }) => {


    if (!listaresenias || listaresenias.lenght === 0) {
        return <p>No hay reseñas</p>
    } else {

        return (

            //condicional en caso de que no llegue 

            <div className="feedback-list">
                {/*Recorrer la listas resenias */}
                {listaresenias.map((resenia) =>
                (
                    <div className="card">
                       <Resenia 
                       deleteResenia={deleteResenia}
                       key={resenia.id}
                       resenia={resenia}/>
                    </div>
                )
                )
                }
            </div>

        )

    }
}
export default ReseniasList;