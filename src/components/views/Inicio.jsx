import { Container, Button } from "react-bootstrap";
import "../../css/principal/seccionPrincipal.css"
import "../../css/principal/Filtros.css"
import logoRollingVet from "../../assets/rollingVetLogo.svg"
import imgHero from "../../assets/img/Principal/principal_Hero.png";
import forma1 from "../../assets/img/Principal/formas/forma1.svg";
import forma3 from "../../assets/img/Principal/formas/forma3.svg";
import forma7 from "../../assets/img/Principal/formas/forma7.svg";
import forma6 from "../../assets/img/Principal/formas/forma6.svg";
import forma10 from "../../assets/img/Principal/formas/forma10.svg";
import imgSeparadorPerro from "../../assets/img/Principal/separador/separador_Perro.png";
import imgSeparadorPerro2 from "../../assets/img/Principal/separador/separador_Perro2.png";
import imgSeparadorPerro3 from "../../assets/img/Principal/separador/separador_Perro3.png";
import imgSeparadorGato from "../../assets/img/Principal/separador/separador_Gato.png";
import ContainerServicios from "./principal/servicio/ContainerServicios";
import SliderProducto from "./principal/producto/SliderProducto";
import SliderMarcas from "./principal/marca/SliderMarcas";
import BannerMarca from "./principal/marca/BannerMarca";
import SliderClientes from "./principal/clientes/SliderClientes";
import ContenedorVeterinario from "./principal/veterinario/ContenedorVeterinario";
import SeparadorCustom from "../common/SeparadorCustom";
import SliderPlanes from "./principal/plan/SliderPlanes";
import FormPlan from "./principal/plan/FormPlan";

const Inicio = () => {
  return (
    <>
      <Container fluid className="seccionHeroFondo position-relative py-5 overflow-hidden z-0">
        <h1 className="display-1 p-3 text-center">Cuida a tus mascotas con <strong>RollingVet</strong></h1>
        <p className="lead px-3 px-md-5 py-4">
          La forma más sencilla de cuidar a tus mascotas. Dales a tus compañeros el cuidado que merecen!
        </p>
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
      <Container className="py-3">
          <h2 className="display-2 px-3 px-md-5 py-2">Productos Destacados</h2>
        <SliderProducto></SliderProducto>
      </Container>
      <SeparadorCustom imgSeparador={imgSeparadorGato} forma={forma10}></SeparadorCustom>
      <Container fluid className="py-3 degradadoFondo">
        <BannerMarca></BannerMarca>
        <Container>
          <h2 className="display-2 px-3 px-md-5 py-2">Las Marcas que ofrecemos</h2>
          <SliderMarcas></SliderMarcas>
        </Container>
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
      <SeparadorCustom imgSeparador={imgSeparadorPerro3} forma={forma3}></SeparadorCustom>
      <Container className="py-3">
        <h2 className="display-2 px-3 px-md-5 py-2">Descubre nuestros planes especiales</h2>
        <p className="lead px-3 px-md-5 py-2">Ofrecemos planes especiales de cuidado para tus mascotas, adaptados a sus diferentes etapas de vida. Elige el plan que corresponda a la edad de tu compañero  y accede a un formulario para obtener más información sobre los servicios y beneficios incluidos en cada plan. ¡Brindamos la atención que tus mascotas merecen en cada etapa de su vida!</p>
        <SliderPlanes></SliderPlanes>
      </Container>
    </>
  );
};

export default Inicio;
