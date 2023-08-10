import { Button, Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import 'swiper/css/navigation';
import NavegacionSlider from "./NavegacionSlider";
import CardProducto from "./CardProducto";
import imgProducto1 from "../../../../assets/img/Principal/CardProducto/producto_Abrigo.png";
import imgProducto2 from "../../../../assets/img/Principal/CardProducto/producto_Cama.png";
import imgProducto3 from "../../../../assets/img/Principal/CardProducto/producto_ComidaRoyalCanin.png";
import imgProducto4 from "../../../../assets/img/Principal/CardProducto/producto_JugueteGato.png";
import imgProducto5 from "../../../../assets/img/Principal/CardProducto/producto_JugueteHuesos.png";
import imgProducto6 from "../../../../assets/img/Principal/CardProducto/producto_Plato.png";
import imgProducto7 from "../../../../assets/img/Principal/CardProducto/producto_AlimentoGato.png";
import { ChevronDoubleRight } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
const SliderProducto = () => {
  const navegacion = useNavigate();
  const verTodosNavegacion = () =>{
    navegacion("*")
  }
  return (
    <Container>
      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        navigation={{
          nextEl: ".plan-swiper-button-next",
          prevEl: ".plan-swiper-button-prev",
        }}
        modules={[Navigation]}
        breakpoints={{
          576: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}>
        <div slot="container-start" className="w-100 d-flex gap-2 justify-content-between align-items-center py-3">
          <Button variant="outline-dark" className="px-3 py-2 rounded-4 fw-bold" onClick={verTodosNavegacion}>Ver Todos<ChevronDoubleRight className="ms-2 fs-4 d-none d-md-inline-block"/></Button>
          <NavegacionSlider></NavegacionSlider>
        </div>
        <SwiperSlide>
          <CardProducto nombreProducto={"Abrigo impermeable"} precioProducto={5940} imgProducto={imgProducto1} categoriaProducto={"Perro, Indumentaria"}></CardProducto>
        </SwiperSlide>
        <SwiperSlide>
          <CardProducto nombreProducto={"Cama Cucha para Perro"} precioProducto={4670} imgProducto={imgProducto2} categoriaProducto={"Perro, Camas y Cuchas"}></CardProducto>
        </SwiperSlide>
        <SwiperSlide>
          <CardProducto nombreProducto={"Alimento Royal Canin 3kg"} precioProducto={6964.5} imgProducto={imgProducto3} categoriaProducto={"Perro, Alimento"}></CardProducto>
        </SwiperSlide>
        <SwiperSlide>
          <CardProducto nombreProducto={"Rascador Torre para Gato"} precioProducto={15600} imgProducto={imgProducto4} categoriaProducto={"Gato, Juguetes"}></CardProducto>
        </SwiperSlide>
        <SwiperSlide>
          <CardProducto nombreProducto={"Combo Huesos de Goma"} precioProducto={2670} imgProducto={imgProducto5} categoriaProducto={"Perro, Juguetes"}></CardProducto>
        </SwiperSlide>
        <SwiperSlide>
          <CardProducto nombreProducto={"Plato Comedero Plástico"} precioProducto={1923} imgProducto={imgProducto6} categoriaProducto={"Perro, Comederos y Bebederos"}></CardProducto>
        </SwiperSlide>
        <SwiperSlide>
          <CardProducto nombreProducto={"Alimento Royal Canin Feline"} precioProducto={1248} imgProducto={imgProducto7} categoriaProducto={"Gato, Alimento"}></CardProducto>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default SliderProducto;
