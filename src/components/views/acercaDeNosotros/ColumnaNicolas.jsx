import { Card, Col, ListGroup } from "react-bootstrap";
import ItemRedSocial from "./ItemRedSocial";

const ColumnaSol = ({
    infoNicolas,
    nicolasImg,
    gitHubIcon,
    correoIcon,
    linkedinIcon,
}) => {
    return (
        <Col md={6} xl={4} className="mb-4">
            <Card className="border-0">
                <Card.Img
                    variant="top"
                    src={nicolasImg}
                    style={{
                        height: "350px",
                        objectFit: "cover",
                    }}
                />
                <Card.Body>
                    <Card.Title className="mb-3 fs-3">
                        {infoNicolas.nombre}
                    </Card.Title>
                    <ListGroup className="d-flex flex-column gap-2">
                        <ItemRedSocial
                            iconoRedSocial={gitHubIcon}
                            nombreRedSocial={
                                infoNicolas.redesSociales.github.nombre
                            }
                            urlRedSocial={infoNicolas.redesSociales.github.url}
                            nombreDesarrollador={infoNicolas.nombre}
                        ></ItemRedSocial>
                        <ItemRedSocial
                            iconoRedSocial={correoIcon}
                            nombreRedSocial={
                                infoNicolas.redesSociales.correo.nombre
                            }
                            urlRedSocial={infoNicolas.redesSociales.correo.url}
                            nombreDesarrollador={infoNicolas.nombre}
                        ></ItemRedSocial>
                        <ItemRedSocial
                            iconoRedSocial={linkedinIcon}
                            nombreRedSocial={
                                infoNicolas.redesSociales.linkedin.nombre
                            }
                            urlRedSocial={
                                infoNicolas.redesSociales.linkedin.url
                            }
                            nombreDesarrollador={infoNicolas.nombre}
                        ></ItemRedSocial>
                    </ListGroup>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ColumnaSol;
