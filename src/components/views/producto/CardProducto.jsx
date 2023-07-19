import { Card, Col, Button } from "react-bootstrap";
import imgProducto1 from "../../../assets/CardProducto/producto_Juguete.jpg";
import imgProducto2 from "../../../assets/CardProducto/producto_Peluche.jpg";
import imgProducto3 from "../../../assets/CardProducto/producto_Cesto.jpg";
import imgProducto4 from "../../../assets/CardProducto/producto_Croquetas.jpg";
import imgProducto5 from "../../../assets/CardProducto/producto_Gato.jpg";


const CardProducto = () => {
    return (
        <Col>
            <Card className="rounded-4 overflow-hidden" style={{ height: "20rem" }}>
                <Card.Img src={imgProducto1} alt="Producto 1" className="rounded-4 w-100 h-100 object-fit-cover" />
                <Card.ImgOverlay className="d-flex flex-column justify-content-end p-2">
                    <div className="w-100 mt-auto rounded-4 p-2 text-bg-primary">
                        <Card.Title>Producto 1</Card.Title>
                        <div className="d-flex justify-content-between align-items-center">
                            <Card.Text>
                                Datos del producto
                            </Card.Text>
                            <Button variant="dark fs-1 fw-bold">+</Button>
                        </div>
                    </div>
                </Card.ImgOverlay>
            </Card>
        </Col>
    );
};

export default CardProducto;