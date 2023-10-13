import { useEffect, useState } from "react";
import localStorageService from "../services/localStorage.service";
import bebidas from "../assets/bebidas.json"
import "../assets/confirmarCompra.css"
import calcular from "../assets/calculo";

function ConfirmarCompra(){
    
    const [cantidades, setCantidades] = useState(localStorageService.get())
    console.log("cantidades",cantidades)

    function eliminar(id){
        localStorageService.eliminarUno(id)
        setCantidades(localStorageService.get())
    }

    //Cálculo del total
    const [total,setTotal] = useState(calcular())
    useEffect(()=>{
        setTotal(calcular())
    })

    return <>
        <img className="carrito-bg" src="/img/carrito.jpg"></img>
        <div className="carrito">

            {localStorageService.esVacio() ? 
                <div style={{textAlign:"center"}}>Agregue una bebida al carrito!</div> : 
                <>
                    {bebidas.map((bebida, key)=>{
                    let cantidad = cantidades[bebida.id].cantidad
    
                    if (cantidad > 0){
                        return <div key={key} className="carrito-bebida">
                        <p className="carrito-bebida-nombre">{bebida.nombre}</p>
                        <img className="carrito-bebida-imagen" src={bebida.imagen}></img>
                        <p className="carrito-bebida-cantidad">{"Unidades: "+ cantidad + ` (USD ${cantidad*bebida.precio}) `}</p>
                        {cantidad>0 ? <button className="carrito-bebida-button" onClick={(e)=>eliminar(bebida.id)}>Eliminar una unidad del carrito</button>:null}
                        </div>
                    }
    
                    })}
                    <div className="carrito-total">{"Total: "+total}</div>
                </>
            }
            
        </div>
    </>
}

export default ConfirmarCompra;