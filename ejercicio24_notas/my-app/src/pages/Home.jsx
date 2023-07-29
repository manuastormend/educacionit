import Header from "../components/Header";
import React from "react";
import {Link,redirect} from "react-router-dom";
import { Modos } from "../utils/Modos";
import BodyNota from "../components/BodyNota";


function Home() {


  let items = []
  for (let i = 0; i < localStorage.length; i++){
    let clave = localStorage.key(i);
    if (clave != "contador")
      items.push(JSON.parse(localStorage.getItem(clave)))
  }

  return <>
    <Header></Header>
    <div className="Home">

        <Link to={`/Nota/${Modos.Agregar}/000`}><button className="Home-agregar">Agregue una nota</button></Link>

        {localStorage.length > 1 ?

            items.map((item,key)=>
              <BodyNota key={key} item={item}></BodyNota>
            )
          : <p style={{color:"white"}}>No se encontraron notas</p>}
    </div>

    </>;
}

export default Home;
