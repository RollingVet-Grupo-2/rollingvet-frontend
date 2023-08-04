import { Card, Button, Badge, Row, Col } from "react-bootstrap";

const CardVeterinario = ({ nombreVeterinario, servicioVeterinario1, servicioVeterinario2, experienciaVeterinario,
    descripcionVeterinario, imgVeterinario }) => {
    return (
        <Card className="rounded-4 h-100">
            <Card.Body className="h-100">
                <div className="bg-primary p-3 border border-2 border-dark rounded-4">
                    <Row xs={1} md={2} className="g-0">
                        <Col>
                            <Card.Title className="border-bottom border-3 border-dark pb-3 pe-2">{nombreVeterinario}</Card.Title>
                            <div className="d-flex flex-column align-items-start gap-3 py-2 pe-2 w-100">
                                <Badge bg="secondary" className="text-dark border border-2 border-dark px-3 py-2 rounded-3 text-wrap text-start w-100">{servicioVeterinario1}</Badge>
                                <Badge bg="secondary" className="text-dark border border-2 border-dark px-3 py-2 rounded-3 text-wrap text-start w-100">{servicioVeterinario2}</Badge>
                                <Card.Text className="fw-bold">{experienciaVeterinario}</Card.Text>
                            </div>
                        </Col>
                        <Col>
                            <Card.Img alt={nombreVeterinario} src={imgVeterinario} className="rounded-4 border border-2 border-dark"/>   
                        </Col>
                    </Row>
                </div>
                <Card.Text className="p-3">{descripcionVeterinario}</Card.Text>
            </Card.Body>
                <div className="p-3 w-100 text-end">
                    <Button variant="primary" className="">Contactar</Button>
                </div>
        </Card>
    );
};

export default CardVeterinario;