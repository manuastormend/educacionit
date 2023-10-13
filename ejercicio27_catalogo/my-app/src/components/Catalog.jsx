import { useState, useEffect } from "react";
import GridCards from "./GridCards";
import movies from "../assets/json/movies.json"


function Catalog({}){

    const [peliculas, setPeliculas] = useState([])

    
    useEffect(()=>{
        if (peliculas.length==0){
            setPeliculas(movies)
        }
    })
    return <>
    <div className="catalog">
        <GridCards peliculas={peliculas}></GridCards>
    </div>
   
    </>
}

export default Catalog;