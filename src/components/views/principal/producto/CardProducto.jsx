import { Card, Col, Button } from "react-bootstrap";
import "../../../../css/principal/CardProducto.css"
import { PlusLg } from "react-bootstrap-icons";

const CardProducto = ({nombreProducto, precioProducto, imgProducto, categoriaProducto}) => {
    return (
        <Col>
            <Card className="rounded-4 overflow-hidden fondoCardProducto">
                <Card.Img src={imgProducto} alt={nombreProducto} className="rounded-4 py-4 px-3 px-md-5 object-fit-contain imgProducto" />
                <Card.ImgOverlay className="d-flex flex-column justify-content-end p-2">
                    <div className="w-100 mt-auto rounded-4 p-2 text-dark contenedorDatosProducto">
                        <Card.Title>{nombreProducto}</Card.Title>
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                            <Card.Text className="small">{categoriaProducto}</Card.Text>
                            <Card.Text className="lead"><strong>${precioProducto}</strong></Card.Text>
                            </div>
                            <Button variant="dark" className="rounded-circle p-2 lh-1"><PlusLg size={24}></PlusLg></Button>
                        </div>
                    </div>
                </Card.ImgOverlay>
            </Card>
        </Col>
    );
};

export default CardProducto;