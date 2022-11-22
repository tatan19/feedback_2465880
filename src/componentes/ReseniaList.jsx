import Resenia from "./Resenia";

const ReseniasList = ({ listaresenias }) => {


    if (!listaresenias || listaresenias.lenght === 0) {
        return <p>No hay reseñas</p>
    } else {

        return (

            //condicional en caso de que no llegue 

            <div className="feedback-list">
                {/*Recorrer la listasresenias */}
                {listaresenias.map((resenia) =>
                (
                    <div className="card">
                       <Resenia 
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