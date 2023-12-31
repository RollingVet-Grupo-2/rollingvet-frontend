import { Container, Button } from "react-bootstrap";
import "../../css/principal/SeccionPrincipal.css";
import "../../css/principal/Filtros.css";
import imgHero from "../../assets/img/Principal/principal_Hero.png";
import forma1 from "../../assets/img/Principal/formas/forma1.svg";
import forma3 from "../../assets/img/Principal/formas/forma3.svg";
import forma7 from "../../assets/img/Principal/formas/forma7.svg";
import forma6 from "../../assets/img/Principal/formas/forma6.svg";
import forma10 from "../../assets/img/Principal/formas/forma10.svg";
import forma11 from "../../assets/img/Principal/formas/forma12.svg";
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
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
const Inicio = () => {
  const { scrollYProgress } = useScroll();
  const yForma1 = useTransform(scrollYProgress, [0, 0.5], ["-10%", "200%"]);
  const yForma7 = useTransform(scrollYProgress, [0, 0.5], ["-40%", "50%"]);

  return (
    <>
      <Container
        fluid
        className="seccionHeroFondo position-relative py-5 overflow-hidden z-0 text-light"
      >
        <h1 className="display-1 text-center">
          Cuida a tus mascotas con <strong>RollingVet</strong>
        </h1>
        <p className="fs-2 lead px-3 px-md-5 py-4 mx-auto text-center textoHero text-dark">
          La forma más sencilla de cuidar a tus mascotas. Dales a tus compañeros
          el cuidado que merecen!
        </p>
        <div className="w-100 h-100 position-relative z-n1">
          <motion.div
            className="w-100 position-absolute imgForma1"
            style={{ y: yForma1 }}
          >
            <img src={forma1} alt="Forma 1" />
          </motion.div>
          <motion.div
            className="w-100 position-absolute imgForma7"
            style={{ y: yForma7 }}
          >
            <img src={forma7} alt="Forma 7" />
          </motion.div>
        </div>
        <Container>
          <div className="w-100 text-center imgSeccionHero">
            <img src={imgHero} alt="Perro y Gato" />
          </div>
          <div className="contenedorBotonesHero position-relative">
            <div className="z-n1 formaBotonesHero position-absolute start-50 translate-middle">
              <img src={forma11} alt="Forma 11" />
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-center gap-2 gap-md-5 p-2 p-md-5 botonesHero">
              <Button
                variant="primary"
                className="px-4 py-3 rounded-4 fw-bolder"
                as={Link}
                to={"*"}
              >
                Reservar Turno
              </Button>
              <Button
                variant="primary"
                className="px-4 py-3 rounded-4 bg-primary-subtle"
                as={Link}
                to={"/contacto"}
              >
                Contactanos
              </Button>
            </div>
          </div>
        </Container>
      </Container>
      <Container className="py-3 my-3">
        <h2 className="display-3 px-3 px-md-5 py-2">Nuestros Servicios</h2>
        <ContainerServicios></ContainerServicios>
      </Container>
      <SeparadorCustom
        imgSeparador={imgSeparadorPerro}
        forma={forma3}
      ></SeparadorCustom>
      <Container className="py-3">
        <h2 className="display-3 px-3 px-md-5 py-2">Productos Destacados</h2>
        <SliderProducto></SliderProducto>
      </Container>
      <SeparadorCustom
        imgSeparador={imgSeparadorGato}
        forma={forma10}
      ></SeparadorCustom>
      <Container fluid className="py-3 degradadoFondo">
        <BannerMarca></BannerMarca>
        <Container>
          <h2 className="display-3 px-3 px-md-5 py-2">
            Las Marcas que ofrecemos
          </h2>
          <SliderMarcas></SliderMarcas>
        </Container>
      </Container>
      <SeparadorCustom
        imgSeparador={imgSeparadorPerro2}
        forma={forma6}
      ></SeparadorCustom>
      <Container className="py-3">
        <h2 className="display-3 px-3 px-md-5 py-2">
          Clientes felices, Mascotas saludables
        </h2>
        <SliderClientes></SliderClientes>
      </Container>
      <Container className="py-3">
        <h2 className="display-3 px-3 px-md-5 py-2">
          Contamos con los mejores Profesionales
        </h2>
        <ContenedorVeterinario></ContenedorVeterinario>
      </Container>
      <SeparadorCustom
        imgSeparador={imgSeparadorPerro3}
        forma={forma3}
      ></SeparadorCustom>
      <Container className="py-3 mb-5">
        <h2 className="display-3 px-3 px-md-5 py-2">
          Descubre nuestros planes especiales
        </h2>
        <p className="lead px-3 px-md-5 py-2">
          Ofrecemos <strong>planes especiales</strong> de cuidado para tus
          mascotas, <strong>adaptados a sus diferentes etapas de vida</strong>.
          Elige el plan que corresponda a la edad de tu compañero y{" "}
          <strong>
            accede a un formulario para obtener más información sobre los
            servicios y beneficios
          </strong>{" "}
          incluidos en cada plan.
          <strong>
            {" "}
            ¡Brindamos la atención que tus mascotas merecen en cada etapa de su
            vida!
          </strong>
        </p>
        <SliderPlanes></SliderPlanes>
      </Container>
    </>
  );
};

export default Inicio;
