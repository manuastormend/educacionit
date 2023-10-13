import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link, useNavigate } from 'react-router-dom';

function GridCards({peliculas}) {
    const navigate = useNavigate()
    function onclick(id){
        navigate(`/movie/${id}`)
    }
  return (
    <Row xs={1} md={2} className="g-4">
      {peliculas.map((_, idx) => (
        <Col key={idx}>
            
                <Card onClick={(e)=>onclick(_.id)}>
                    <Card.Img className="card-imagenmovie" variant="top" src={"img/" + _.imagen} />
                    <Card.Body className="card-bodymovie">
                    <Card.Title>{_.titulo}</Card.Title>
                    <Card.Text>
                        {_.descripcioncorta}
                    </Card.Text>
                    <Card.Text>
                        {"Género: "+ _.genero}
                    </Card.Text>
                    <Card.Text>
                        {"Duración: "+ _.duracion}
                    </Card.Text>
                    </Card.Body>
                </Card>
            
          
        </Col>
      ))}
    </Row>
  );
}

export default GridCards;