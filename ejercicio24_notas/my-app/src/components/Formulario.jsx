import { useEffect, useState } from "react";
import { Modos } from "../utils/Modos";
import NotaSchema from "../utils/NotaSchema";
import { Link, Redirect, useNavigate } from "react-router-dom";


function Autonumber() {

    let contador = 1;
    if (localStorage.length!=0){
        contador = JSON.parse(localStorage.getItem("contador")) + 1
    }
    localStorage.setItem("contador",contador)

    return contador;
}


function Formulario({mode,id}){

    let nav = useNavigate();
    let textoInicial = '';
    if (mode != Modos.Agregar){
        let objeto = JSON.parse(localStorage.getItem(id))
        if (objeto!=null)
            textoInicial = objeto.nota;
    }
  

    const [texto, setTexto] = useState(textoInicial);
    const [goHome,setGoHome] = useState(false);
    
    let modificable = false;
    if (mode == Modos.Agregar || mode == Modos.Modificar){
        modificable = true;
    }

    useEffect(() => {
        setTexto(textoInicial);
      },[textoInicial]);




    function Confirmar(){
        //Los modos posibles son: Agregar y Modificar
        
        let item;
        if (mode == Modos.Agregar){
            id = Autonumber();
            let fecha = new Date();
            item = new NotaSchema(id,texto,fecha);

        }else{
            item = JSON.parse(localStorage.getItem(id));
            item.nota = texto;
        }

        localStorage.setItem(id,JSON.stringify(item));
        setTexto('')
        nav("/")
    
    }

    return <>

        {modificable ? <textarea value={texto} onChange={(e)=>setTexto(e.currentTarget.value)} type="text" placeholder="Escriba la nota"/>:<textarea value={texto} type="text"  disabled/>}

        {modificable ? <button onClick={Confirmar}>Confirmar</button>: null}

    </>
}

export default Formulario;