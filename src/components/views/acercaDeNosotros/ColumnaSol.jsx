
import { Card, Col, ListGroup } from "react-bootstrap";
import ItemRedSocial from "./ItemRedSocial";

const ColumnaSol = ({
    infoSol,
    solImg,
    gitHubIcon,
    correoIcon,
}) => {
    return (
        <Col md={6} xl={4} className="mb-4">
            
                    <Card className="border-0">
                        <Card.Img
                            variant="top"
                            src={solImg}
                            style={{
                                height: "350px",
                                objectFit: "cover",
                            }}
                        />
                        <Card.Body>
                            <Card.Title className="mb-3 fs-3">
                                {infoSol.nombre}
                            </Card.Title>
                            <ListGroup className="d-flex flex-column gap-2">
                                <ItemRedSocial
                                    iconoRedSocial={gitHubIcon}
                                    nombreRedSocial={
                                        infoSol.redesSociales.github.nombre
                                    }
                                    urlRedSocial={
                                        infoSol.redesSociales.github.url
                                    }
                                    nombreDesarrollador={infoSol.nombre}
                                ></ItemRedSocial>
                                <ItemRedSocial
                                    iconoRedSocial={correoIcon}
                                    nombreRedSocial={
                                        infoSol.redesSociales.correo.nombre
                                    }
                                    urlRedSocial={
                                        infoSol.redesSociales.correo.url
                                    }
                                    nombreDesarrollador={infoSol.nombre}
                                ></ItemRedSocial>
                            </ListGroup>
                        </Card.Body>
                    </Card>
           
        </Col>
    );
};

export default ColumnaSol;
