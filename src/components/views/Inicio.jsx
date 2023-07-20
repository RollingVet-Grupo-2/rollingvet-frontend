import { Container, Button } from "react-bootstrap";
import ContainerServicios from "./servicio/ContainerServicios";
import SliderProducto from "./producto/SliderProducto";
import SliderMarcas from "./marca/SliderMarcas";
import BannerMarca from "./marca/BannerMarca";

const Inicio = () => {
  return (
    <>
      <Container fluid className="text-bg-secondary py-5">
        <h1 className="display-1 p-3 text-center">Cuida a tus mascotas con RollingVet</h1>
        <h2 className="h2 px-3 px-md-5 py-2">
          La forma más sencilla de cuidar a tus mascotas. Dales a tus compañeros el cuidado que merecen!
        </h2>
        <div className="d-flex justify-content-center gap-2 gap-md-5 p-3">
          <Button variant="primary">Reservar Turno</Button>
          <Button variant="outline-primary">Contactanos</Button>
        </div>
      </Container>
      <Container className="py-3">
        <h2 className="display-2 px-3 px-md-5 py-2">Nuestros Servicios</h2>
          <ContainerServicios></ContainerServicios>
      </Container>
      <Container className="py-3">
        <h2 className="display-2 px-3 px-md-5 py-2">Productos Destacados</h2>
        <SliderProducto></SliderProducto>
      </Container>
      <Container fluid className="py-3">
        <Container>
        <h2 className="display-2 px-3 px-md-5 py-2">Las Marcas que ofrecemos</h2>
        <SliderMarcas></SliderMarcas>
        </Container>
        <BannerMarca></BannerMarca>
      </Container>
    </>
  );
};

export default Inicio;
