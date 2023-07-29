// Nota se le pasa el modo (agregar, modificar, eliminar)
import { useParams } from "react-router";
import {Modos} from "../utils/Modos";
import {Link} from "react-router-dom";
import NotaSchema from "./../utils/NotaSchema"
import Formulario from "../components/Formulario";
import Header from "../components/Header";


function ModoTitle(mode){
    let title = ''

    switch (mode) {
        case Modos.Agregar:
            title = 'Escriba la nota'
            break;

        case Modos.Modificar:
            title = 'Modifique la nota'
        break;

        case Modos.Vista:
            title = 'Vista de la nota'
        break;
    
        default:
            break;
    }
    return title
}


function Nota() {

    let {mode,id} = useParams()

    let titulo = ModoTitle(mode);

    function Botones(){
        function Eliminar(id){
            console.log("Eliminando item",id)
            localStorage.removeItem(id)
        }
        return <>
            <div className="Botones">
                <Link to={`/Nota/${Modos.Modificar}/${id}`}><button>Editar</button></Link>
                <Link to={"/"}><button onClick={()=>Eliminar(id)}>Eliminar</button></Link>
            </div>
        </>
    }
    

    return <>

        <Header/>       
        {mode === Modos.Vista ? <Botones></Botones> : null}

        <div className="Nota-container">

            <div className="Nota">
                <p>{titulo}</p>
                <Formulario mode={mode} id={id}></Formulario>
            </div>
            
        </div>


    </>;
  }

  
  export default Nota;
  