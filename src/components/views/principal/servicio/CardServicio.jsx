import { Card, Col, Button } from "react-bootstrap";
import "../../../../css/principal/CardServicio.css";
import { Link } from "react-router-dom";

const CardServicio = ({ imgServicio, nombreServicio, descripcionServicio }) => {
  return (
    <Col>
      <Card className="rounded-4 overflow-hidden border border-2 border-dark cardServicio" style={{ height: "28rem" }}>
        <Card.Img src={imgServicio} alt={nombreServicio} className="w-100 h-100 object-fit-cover imgServicio" />
        <Card.ImgOverlay className="d-flex flex-column justify-content-end p-2">
          <div className="w-100 mt-auto">
            <Card.Title className="rounded-4 border border-2 border-dark p-2 text-dark bg-secondary">{nombreServicio}</Card.Title>
            <Card.Body className="rounded-4 border border-2 border-dark p-2 text-light bg-dark d-flex flex-column flex-lg-row justify-content-between">
              <Card.Text className="pe-2">
                {descripcionServicio}
              </Card.Text>
              <div className="d-flex align-items-center">
                <Button variant="outline-light w-100" as={Link} to={"*"}>Ver Más</Button>
              </div>
            </Card.Body>
          </div>
        </Card.ImgOverlay>
      </Card>
    </Col>
  );
};

export default CardServicio;
