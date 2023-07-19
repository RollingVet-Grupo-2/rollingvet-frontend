import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { ArrowRight, ArrowLeft } from "react-bootstrap-icons";
import CardProducto from "./CardProducto";

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
      <Row xs={2} md={3} lg={4} className="g-3">
        <CardProducto></CardProducto>
        <CardProducto></CardProducto>
        <CardProducto></CardProducto>
        <CardProducto></CardProducto>
        <CardProducto></CardProducto>
      </Row>
    </Container>
  );
};

export default SliderProducto;
