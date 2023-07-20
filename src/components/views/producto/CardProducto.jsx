import { Card, Col, Button } from "react-bootstrap";

const CardProducto = ({nombreProducto, precioProducto, imgProducto}) => {
    return (
        <Col>
            <Card className="rounded-4 overflow-hidden" style={{ height: "25rem", backgroundColor:"#F4B693"}}>
                <Card.Img src={imgProducto} alt={nombreProducto} className="rounded-4 my-auto px-3 object-fit-contain" />
                <Card.ImgOverlay className="d-flex flex-column justify-content-end p-2">
                    <div className="w-100 mt-auto rounded-4 p-2 text-bg-primary">
                        <Card.Title>{nombreProducto}</Card.Title>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                            <Card.Subtitle>Datos del producto</Card.Subtitle>
                            <Card.Text>
                                Precio: ${precioProducto}
                            </Card.Text>
                            </div>
                            <Button variant="dark fs-1 fw-bold">+</Button>
                        </div>
                    </div>
                </Card.ImgOverlay>
            </Card>
        </Col>
    );
};

export default CardProducto;