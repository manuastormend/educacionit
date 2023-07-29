import {Link,Navigate,redirect, useNavigate} from "react-router-dom";
import FavIcon from "../components/FavIcon";
import { Modos } from "../utils/Modos";
import { useEffect, useState } from "react";


function BodyNota({item}){

    const [click, setClick] = useState(false);
    const navigate = useNavigate();

    let fecha = new Date(item.fecha).toLocaleDateString('en-GB');

    useEffect(()=>{
      if (click){
        navigate(`/Nota/${Modos.Vista}/${item.id}`);
      }

    },[click])

    return <>
      <div className="BodyNota">
        <div className="BodyNota-top">
          <div className="BodyNota-fecha">{fecha}</div>
          <FavIcon i={item}></FavIcon>
        </div>
        <hr/>
        <span onClick={(e)=>setClick(true)}><div className="BodyNota-bottom">{item.nota}</div></span>
      </div>
      
  
    </>
  }

  export default BodyNota;