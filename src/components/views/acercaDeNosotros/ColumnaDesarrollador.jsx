import { Card, Col, ListGroup } from "react-bootstrap";
import ItemRedSocial from "./ItemRedSocial";

const ColumnaDesarrollador = ({
    nombreDesarrollador,
    imagenDesarrollador,
    redesSocialesDesarrollador,
}) => {
    return (
        <Col md={6} xl={4} className="mb-4">
            <Card className="border-0 my-2">
                <Card.Img
                    variant="top"
                    src={imagenDesarrollador}
                    style={{
                        height: "350px",
                        objectFit: "cover",
                        objectPosition:"center"
                    }}
                />
                <Card.Body className="py-4 px-0">
                    <Card.Title className="mb-3 fs-3">
                        {nombreDesarrollador}
                    </Card.Title>
                    <ListGroup className="d-flex flex-column gap-2">
                        {redesSocialesDesarrollador.map((redSocial, indice) => (
                            <ItemRedSocial
                                key={indice}
                                redSocialNombre={redSocial.nombre}
                                redSocialUrl={redSocial.url}
                                redSocialLogo={redSocial.logo}
                                nombreDesarrollador={nombreDesarrollador}
                            ></ItemRedSocial>
                        ))}
                    </ListGroup>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ColumnaDesarrollador;
