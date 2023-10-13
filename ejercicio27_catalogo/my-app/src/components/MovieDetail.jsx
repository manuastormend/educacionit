import { useParams } from "react-router";
import movies from "../assets/json/movies.json"
import "../assets/css/detail.css"
function MovieDetail({}){

    let {id} = useParams();
    const movie = movies[id];
    console.log(movie)
    return <>
    <img className="detail-img" src={"/img/"+movie.imagen}></img>
    <div className="detail">
        <h1 className="detail-titulo">{movie.titulo}</h1>
        <p className="detail-data">{"Género: "+ movie.genero + "  Duración: "+ movie.duracion}</p>
        <p className="detail-descripcion">{movie.descripcion}</p>
    </div>
    </>
}

export default MovieDetail;