import { Card, Button, Badge, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const CardVeterinario = ({ nombreVeterinario, servicioVeterinario1, servicioVeterinario2, experienciaVeterinario,
    descripcionVeterinario, imgVeterinario }) => {
    return (
        <Card className="rounded-4">
            <Card.Body>
                <div className="text-bg-primary p-3 rounded-4">
                    <Row xs={1} md={2} className="g-0">
                        <Col>
                            <Card.Title className="border-bottom border-dark pb-3">{nombreVeterinario}</Card.Title>
                            <div className="d-flex flex-column align-items-start gap-1 py-2">
                                <Badge bg="secondary" className="px-3 py-2 rounded-3">{servicioVeterinario1}</Badge>
                                <Badge bg="secondary" className="px-3 py-2 rounded-3">{servicioVeterinario2}</Badge>
                                <Card.Text className="fw-bold">{experienciaVeterinario}</Card.Text>
                            </div>
                        </Col>
                        <Col>
                            <Card.Img alt={nombreVeterinario} src={imgVeterinario} className="rounded-4 border border-1 border-dark"/>
                            
                        </Col>
                    </Row>
                </div>
                <Card.Text className="py-3">{descripcionVeterinario}</Card.Text>
                <div className="w-100 text-end">
                    <Button variant="primary" as={Link} to="*">Contactar</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default CardVeterinario;