import { useNavigate, useParams } from "react-router-dom";
import bebidas from "../assets/bebidas.json"
import "../assets/bebidasDetail.css"
import localStorageService from "../services/localStorage.service"
import { useState } from "react";

function SeleccionarBebida(){

    let {id} = useParams()
    const bebida = bebidas[id]
    const navigate = useNavigate()
    const [item,setItem] = useState(localStorageService.getItem(id))


    
    async function agregar(){
        localStorageService.agregarUno(id)
        navigate("/")
    }
    return <>
        
            <img className="bebida-bg" src={bebida.bg}></img>
            <div className="bebida-data-container">
                <img className="bebida-imagen"src={bebida.imagen}></img>
                <p className="bebida-precio">{"USD " +bebida.precio}</p>
                <button onClick={(e)=>agregar()}className="bebida-button">Agregar una unidad al carrito</button>
            </div>
            
        
        
    </>
}

export default SeleccionarBebida;