import { Container, Button } from "react-bootstrap";
import "../../css/seccionPrincipal.css"
import logoRollingVet from "../../assets/rollingVetLogo.svg"
import imgHero from "../../assets/Principal/principal_Hero.png";
import forma1 from "../../assets/Principal/formas/forma1.svg";
import forma3 from "../../assets/Principal/formas/forma3.svg";
import forma7 from "../../assets/Principal/formas/forma7.svg";
import forma6 from "../../assets/Principal/formas/forma6.svg";
import forma10 from "../../assets/Principal/formas/forma10.svg";
import imgSeparadorPerro from "../../assets/Principal/separador/separador_Perro.png";
import imgSeparadorPerro2 from "../../assets/Principal/separador/separador_Perro2.png";
import imgSeparadorGato from "../../assets/Principal/separador/separador_Gato.png";
import ContainerServicios from "./servicio/ContainerServicios";
import SliderProducto from "./producto/SliderProducto";
import SliderMarcas from "./marca/SliderMarcas";
import BannerMarca from "./marca/BannerMarca";
import SliderClientes from "./clientes/SliderClientes";
import ContenedorVeterinario from "./veterinario/ContenedorVeterinario";
import SeparadorCustom from "../common/SeparadorCustom";

const Inicio = () => {
  return (
    <>
      <Container fluid className="seccionHeroFondo position-relative py-5 overflow-hidden z-0">
        <h1 className="display-1 p-3 text-center">Cuida a tus mascotas con <strong>RollingVet</strong></h1>
        <h2 className="h2 px-3 px-md-5 py-4">
          La forma más sencilla de cuidar a tus mascotas. Dales a tus compañeros el cuidado que merecen!
        </h2>
        <div className="w-100 h-100 position-relative z-n1">
          <div className="w-100 position-absolute imgForma1" >
            <img src={forma1} alt="Froma 1" className="w-75" />
          </div>
          <div className="w-100 position-absolute imgForma7" >
            <img src={forma7} alt="Froma 7" className="w-50" />
          </div>
        </div>
        <Container>
          <div className="w-100 text-center imgSeccionHero">
            <img src={imgHero} alt="Perro y Gato" className="w-50 h-50" />
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-center gap-2 gap-md-5 p-5 rounded-4 bg-secondary contenedorBotonesHero">
            <Button variant="primary" className="px-4 py-3 rounded-4">Reservar Turno</Button>
            <Button variant="outline-primary" className="px-4 py-3 rounded-4">Contactanos</Button>
          </div>
        </Container>
      </Container>
      <Container className="py-3">
        <h2 className="display-2 px-3 px-md-5 py-2">Nuestros Servicios</h2>
        <ContainerServicios></ContainerServicios>
      </Container>
      <SeparadorCustom imgSeparador={imgSeparadorPerro} forma={forma3}></SeparadorCustom>
      <Container fluid className="py-3">
        <Container>
          <h2 className="display-2 px-3 px-md-5 py-2">Productos Destacados</h2>
        </Container>
        <SliderProducto></SliderProducto>
      </Container>
      <SeparadorCustom imgSeparador={imgSeparadorGato} forma={forma10}></SeparadorCustom>
      <Container fluid className="py-3">
        <Container>
          <h2 className="display-2 px-3 px-md-5 py-2">Las Marcas que ofrecemos</h2>
          <SliderMarcas></SliderMarcas>
        </Container>
        <BannerMarca></BannerMarca>
      </Container>
      <SeparadorCustom imgSeparador={imgSeparadorPerro2} forma={forma6}></SeparadorCustom>
      <Container className="py-3">
        <h2 className="display-2 px-3 px-md-5 py-2">Clientes felices, Mascotas saludables</h2>
        <SliderClientes></SliderClientes>
      </Container>
      <Container className="py-3">
        <h2 className="display-2 px-3 px-md-5 py-2">Contamos con los mejores Profesionales</h2>
        <ContenedorVeterinario></ContenedorVeterinario>
      </Container>
    </>
  );
};

export default Inicio;
