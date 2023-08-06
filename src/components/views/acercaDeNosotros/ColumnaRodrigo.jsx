import { Card, Col, ListGroup } from "react-bootstrap";
import ItemRedSocial from "./ItemRedSocial";

const ColumnaRodrigo = ({
    infoRodri,
    rodriImg,
    gitHubIcon,
    correoIcon,
    linkedinIcon,
    youtubeIcon,
    tiktokIcon
}) => {
    return (
        <Col md={6} xl={4} className="mb-4">
            <Card className="border-0">
                <Card.Img
                    variant="top"
                    src={rodriImg}
                    style={{
                        height: "350px",
                        objectFit: "cover",
                    }}
                />
                <Card.Body>
                    <Card.Title className="mb-3 fs-3">
                        {infoRodri.nombre}
                    </Card.Title>
                    <ListGroup className="d-flex flex-column gap-2">
                        <ItemRedSocial
                            iconoRedSocial={gitHubIcon}
                            nombreRedSocial={
                                infoRodri.redesSociales.github.nombre
                            }
                            urlRedSocial={infoRodri.redesSociales.github.url}
                            nombreDesarrollador={infoRodri.nombre}
                        ></ItemRedSocial>
                        <ItemRedSocial
                            iconoRedSocial={correoIcon}
                            nombreRedSocial={
                                infoRodri.redesSociales.correo.nombre
                            }
                            urlRedSocial={infoRodri.redesSociales.correo.url}
                            nombreDesarrollador={infoRodri.nombre}
                        ></ItemRedSocial>
                        <ItemRedSocial
                            iconoRedSocial={linkedinIcon}
                            nombreRedSocial={
                                infoRodri.redesSociales.linkedin.nombre
                            }
                            urlRedSocial={
                                infoRodri.redesSociales.linkedin.url
                            }
                            nombreDesarrollador={infoRodri.nombre}
                        ></ItemRedSocial>
                         <ItemRedSocial
                            iconoRedSocial={youtubeIcon}
                            nombreRedSocial={
                                infoRodri.redesSociales.youtube.nombre
                            }
                            urlRedSocial={
                                infoRodri.redesSociales.youtube.url
                            }
                            nombreDesarrollador={infoRodri.nombre}
                        ></ItemRedSocial>
                        <ItemRedSocial
                            iconoRedSocial={tiktokIcon}
                            nombreRedSocial={
                                infoRodri.redesSociales.tiktok.nombre
                            }
                            urlRedSocial={
                                infoRodri.redesSociales.tiktok.url
                            }
                            nombreDesarrollador={infoRodri.nombre}
                        ></ItemRedSocial>
                    </ListGroup>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ColumnaRodrigo;
