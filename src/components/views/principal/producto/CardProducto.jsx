import { Card, Col, Button, Badge } from "react-bootstrap";
import "../../../../css/principal/CardProducto.css"
import { PlusLg } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
const CardProducto = ({nombreProducto, precioProducto, imgProducto, categoriaProducto}) => {
    return (
        <Col>
            <Card className="rounded-4 overflow-hidden fondoCardProducto border-0">
                <Card.Img src={imgProducto} alt={nombreProducto} className="rounded-4 py-4 px-3 px-md-5 object-fit-contain imgProducto" />
                <Card.ImgOverlay className="d-flex flex-column justify-content-end p-2">
                    <div className="w-100 mt-auto rounded-4 p-2 text-dark border border-2 border-dark bg-body">
                        <Card.Title>{nombreProducto}</Card.Title>
                        <div className="d-flex justify-content-between align-items-end">
                            <div>
                            <Card.Text className="small">{categoriaProducto}</Card.Text>
                            <Badge bg="secondary" className="text-dark lead border border-2 border-dark rounded-4 fs-5"><strong>$ {precioProducto}</strong></Badge>
                            </div>
                            <Button variant="primary" className="rounded-4 p-2 lh-1" as={Link} to="*"><PlusLg size={24}></PlusLg>Añadir</Button>
                        </div>
                    </div>
                </Card.ImgOverlay>
            </Card>
        </Col>
    );
};

export default CardProducto;