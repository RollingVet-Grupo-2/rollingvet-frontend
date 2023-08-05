import { Card, Col, ListGroup } from "react-bootstrap";
import ItemRedSocial from "./ItemRedSocial";

const ColumnaEsteban = ({
    infoEsteban,
    estebanImg,
    gitHubIcon,
    correoIcon,
    linkedinIcon,
    portfolioIcon
}) => {
    return (
        <Col md={6} xl={4} className="mb-4">
            <Card className="border-0">
                <Card.Img
                    variant="top"
                    src={estebanImg}
                    style={{
                        height: "350px",
                        objectFit: "cover",
                    }}
                />
                <Card.Body>
                    <Card.Title className="mb-3 fs-3">
                        {infoEsteban.nombre}
                    </Card.Title>
                    <ListGroup className="d-flex flex-column gap-2">
                        <ItemRedSocial
                            iconoRedSocial={gitHubIcon}
                            nombreRedSocial={
                                infoEsteban.redesSociales.github.nombre
                            }
                            urlRedSocial={infoEsteban.redesSociales.github.url}
                            nombreDesarrollador={infoEsteban.nombre}
                        ></ItemRedSocial>
                        <ItemRedSocial
                            iconoRedSocial={correoIcon}
                            nombreRedSocial={
                                infoEsteban.redesSociales.correo.nombre
                            }
                            urlRedSocial={infoEsteban.redesSociales.correo.url}
                            nombreDesarrollador={infoEsteban.nombre}
                        ></ItemRedSocial>
                        <ItemRedSocial
                            iconoRedSocial={linkedinIcon}
                            nombreRedSocial={
                                infoEsteban.redesSociales.linkedin.nombre
                            }
                            urlRedSocial={
                                infoEsteban.redesSociales.linkedin.url
                            }
                            nombreDesarrollador={infoEsteban.nombre}
                        ></ItemRedSocial>
                        <ItemRedSocial
                            iconoRedSocial={portfolioIcon}
                            nombreRedSocial={
                                infoEsteban.redesSociales.portfolio.nombre
                            }
                            urlRedSocial={
                                infoEsteban.redesSociales.portfolio.url
                            }
                            nombreDesarrollador={infoEsteban.nombre}
                        ></ItemRedSocial>
                    </ListGroup>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ColumnaEsteban;
