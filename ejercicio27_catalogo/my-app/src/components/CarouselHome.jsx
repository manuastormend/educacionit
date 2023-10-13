import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage';
import movies from "../assets/json/movies.json"

function CarouselHome({}) {

    const primera = 0;
    const segunda = 2;
    const tercera = 3;

  return (
    <Carousel className='carouselhome'>
      <Carousel.Item>
        <CarouselImage imagen={movies[primera].imagen} />
        <Carousel.Caption>
          <h3 className='carouselhome-h3' >{movies[primera].titulo}</h3>
          <p className='carouselhome-p'>Disponible en nuestra plataforma!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage imagen={movies[segunda].imagen}/>
        <Carousel.Caption>
          <h3 className='carouselhome-h3'>{movies[segunda].titulo}</h3>
          <p className='carouselhome-p'>Las mejores peliculas al mejor precio</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage imagen={movies[tercera].imagen}/>
        <Carousel.Caption>
          <h3 className='carouselhome-h3'>{movies[tercera].titulo}</h3>
          <p className='carouselhome-p'>
            Disfruta buscando tus peliculas favoritas.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;