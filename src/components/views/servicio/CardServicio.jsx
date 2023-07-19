import { Card, Col, Button } from "react-bootstrap";
import imgConsulta from "../../../assets/CardServicio/servicio_Consulta.jpg";
import "../../../css/CardServicio.css";


const CardServicio = () => {
    return (
        <Col>
            <Card className="bg-dark text-white rounded-4">
                <Card.Img src={imgConsulta} alt="Consultas veterinarias especializadas" className="rounded-4" />
                <Card.ImgOverlay className="d-flex flex-column justify-content-end">
                    <Card.Title className="rounded-4 p-2 text-bg-primary">Consultas veterinarias especializadas</Card.Title>
                    <div className="rounded-4 p-2 text-bg-dark d-flex flex-column flex-lg-row justify-content-between">
                        <Card.Text className="">
                            Obtén acceso a consultas veterinarias de calidad con profesionales altamente capacitados.
                        </Card.Text>
                        <Button variant="outline-light">Ver Más</Button>
                    </div>
                </Card.ImgOverlay>
            </Card>
        </Col>
    );
};

export default CardServicio;
