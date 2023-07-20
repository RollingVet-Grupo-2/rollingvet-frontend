import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { ArrowRight, ArrowLeft } from "react-bootstrap-icons";
import CardProducto from "./CardProducto";

import imgProducto1 from "../../../assets/CardProducto/producto_Abrigo.png";
import imgProducto2 from "../../../assets/CardProducto/producto_Cama.png";
import imgProducto3 from "../../../assets/CardProducto/producto_ComidaRoyalCanin.png";
import imgProducto4 from "../../../assets/CardProducto/producto_JugueteGato.png";
import imgProducto5 from "../../../assets/CardProducto/producto_JugueteHuesos.png";
import imgProducto6 from "../../../assets/CardProducto/producto_Plato.png";

const SliderProducto = () => {
  return (
    <Container>
      <div className="w-100 d-flex gap-2 justify-content-between align-items-center">
          <a href="http://">Ver Todos</a>
        <div className="d-flex gap-2 justify-content-end p-3">
          <Button variant="outline-dark">
            <ArrowLeft></ArrowLeft>
          </Button>
          <Button variant="outline-dark">
            <ArrowRight></ArrowRight>
          </Button>
        </div>
      </div>
      <Row xs={1} md={3} lg={4} className="g-3">
        <CardProducto nombreProducto={"Producto 1"} precioProducto={1500} imgProducto={imgProducto1}></CardProducto>
        <CardProducto nombreProducto={"Producto 2"} precioProducto={2000} imgProducto={imgProducto2}></CardProducto>
        <CardProducto nombreProducto={"Producto 3"} precioProducto={5000} imgProducto={imgProducto3}></CardProducto>
        <CardProducto nombreProducto={"Producto 4"} precioProducto={4000} imgProducto={imgProducto4}></CardProducto>
        <CardProducto nombreProducto={"Producto 5"} precioProducto={2401} imgProducto={imgProducto5}></CardProducto>
        <CardProducto nombreProducto={"Producto 6"} precioProducto={5402} imgProducto={imgProducto6}></CardProducto>
      </Row>
    </Container>
  );
};

export default SliderProducto;
