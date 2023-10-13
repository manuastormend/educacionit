import { useNavigate } from "react-router-dom";
import bebidas from "../assets/bebidas.json"
import Header from "./Header";
import localStorageService from "../services/localStorage.service";
import { useEffect } from "react";


function Inicio(){
    const navigate = useNavigate()
    function onClick(id){
        navigate(`/bebida/${id}`)
    }
    
    useEffect(()=>{
        if (localStorage.length == 0){
            
                localStorageService.crear()
        }
    })

    return<>
        <Header></Header>
        <div className="inicio-container">
            {bebidas.map((_,key)=>{
                return <img onClick={(e)=>{onClick(_.id)}}className="inicio-bebidas" key={key} src={_.imagen}></img>
            })}

        </div>

    
    </>
}

export default Inicio;