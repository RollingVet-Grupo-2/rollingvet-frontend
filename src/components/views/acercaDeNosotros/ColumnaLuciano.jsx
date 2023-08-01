import { Card, Col, ListGroup } from "react-bootstrap";
import ItemRedSocial from "./ItemRedSocial";

const ColumnaSol = ({
    infoLuciano,
    tamanoPantalla,
    lucianoImg,
    gitHubIcon,
    correoIcon,
    linkedinIcon,
}) => {
    return (
        <Col md={6} xl={4} className="mb-4">
            <Card className="border-0">
                <Card.Img
                    variant="top"
                    src={lucianoImg}
                    style={{
                        height: "350px",
                        objectFit: "cover",
                    }}
                />
                <Card.Body>
                    <Card.Title className="mb-3 fs-3">
                        {infoLuciano.nombre}
                    </Card.Title>
                    <ListGroup className="d-flex flex-column gap-2">
                        <ItemRedSocial
                            iconoRedSocial={gitHubIcon}
                            nombreRedSocial={
                                infoLuciano.redesSociales.github.nombre
                            }
                            urlRedSocial={infoLuciano.redesSociales.github.url}
                            nombreDesarrollador={infoLuciano.nombre}
                        ></ItemRedSocial>
                        <ItemRedSocial
                            iconoRedSocial={correoIcon}
                            nombreRedSocial={
                                infoLuciano.redesSociales.correo.nombre
                            }
                            urlRedSocial={infoLuciano.redesSociales.correo.url}
                            nombreDesarrollador={infoLuciano.nombre}
                        ></ItemRedSocial>
                        <ItemRedSocial
                            iconoRedSocial={linkedinIcon}
                            nombreRedSocial={
                                infoLuciano.redesSociales.linkedin.nombre
                            }
                            urlRedSocial={
                                infoLuciano.redesSociales.linkedin.url
                            }
                            nombreDesarrollador={infoLuciano.nombre}
                        ></ItemRedSocial>
                    </ListGroup>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ColumnaSol;
