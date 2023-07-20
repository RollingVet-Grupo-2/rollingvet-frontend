import { Card, Col, Button } from "react-bootstrap";
import imgConsulta from "../../../assets/CardServicio/servicio_Consulta.jpg";
import "../../../css/CardServicio.css";

const CardServicio = () => {
  return (
    <Col>
      <Card className="rounded-4 overflow-hidden" style={{ height: "30rem"}}>
        <Card.Img src={imgConsulta} alt="Consultas veterinarias especializadas" className="rounded-4 w-100 h-100 object-fit-cover" />
        <Card.ImgOverlay className="d-flex flex-column justify-content-end p-2">
          <div className="w-100 mt-auto">
            <Card.Title className="rounded-4 p-2 text-bg-primary">Consultas veterinarias especializadas</Card.Title>
            <div className="rounded-4 p-2 text-bg-dark d-flex flex-column flex-lg-row justify-content-between">
              <Card.Text className="">
                Obtén acceso a consultas veterinarias de calidad con profesionales altamente capacitados.
              </Card.Text>
              <Button variant="outline-light">Ver Más</Button>
            </div>
          </div>
        </Card.ImgOverlay>
      </Card>
    </Col>
  );
};

export default CardServicio;