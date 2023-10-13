import movies from "../assets/json/movies.json"

function CarouselImage({imagen}){

    return <>

    <div className="carousel-image"><img src={"img/" +imagen}></img></div>
    </>
}

export default CarouselImage;