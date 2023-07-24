import CardMarca from "./CardMarca";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "../../../../css/principal/Filtros.css";
import imgMarca1 from "../../../../assets/img/Principal/CardMarca/marcas_Eukanuba_Dark.png";
import imgMarca2 from "../../../../assets/img/Principal/CardMarca/marcas_RoyalCanin_Dark.png";
import imgMarca3 from "../../../../assets/img/Principal/CardMarca/marcas_Whiskas_Dark.png";
import imgMarca4 from "../../../../assets/img/Principal/CardMarca/marcas_VitalCan_Dark.png";
import imgMarca5 from "../../../../assets/img/Principal/CardMarca/marcas_Agility_Dark.png";
import imgMarca6 from "../../../../assets/img/Principal/CardMarca/marcas_Pedigree_Dark.png";
import imgMarca7 from "../../../../assets/img/Principal/CardMarca/marcas_Sieger_Dark.png";
import { Container } from "react-bootstrap";

const SliderMarcas = () => {
  return (
    <Container className="desvanecer px-5">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        slidesPerView={1}
        spaceBetween={8}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        speed={10000}
        breakpoints={{
          576: {
            slidesPerView: 1,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 8,
          },
        }}>
        <SwiperSlide className="my-auto px-1 px-md-4">
          <CardMarca nombreMarca={"Marca 1"} imgMarca={imgMarca1}></CardMarca>
        </SwiperSlide>
        <SwiperSlide className="my-auto px-1 px-md-4">
          <CardMarca nombreMarca={"Marca 2"} imgMarca={imgMarca2}></CardMarca>
        </SwiperSlide>
        <SwiperSlide className="my-auto px-1 px-md-4">
          <CardMarca nombreMarca={"Marca 3"} imgMarca={imgMarca3}></CardMarca>
        </SwiperSlide>
        <SwiperSlide className="my-auto px-1 px-md-4">
          <CardMarca nombreMarca={"Marca 4"} imgMarca={imgMarca4}></CardMarca>
        </SwiperSlide>
        <SwiperSlide className="my-auto px-1 px-md-4">
          <CardMarca nombreMarca={"Marca 5"} imgMarca={imgMarca5}></CardMarca>
        </SwiperSlide>
        <SwiperSlide className="my-auto px-1 px-md-4">
          <CardMarca nombreMarca={"Marca 6"} imgMarca={imgMarca6}></CardMarca>
        </SwiperSlide>
        <SwiperSlide className="my-auto px-1 px-md-4">
          <CardMarca nombreMarca={"Marca 7"} imgMarca={imgMarca7}></CardMarca>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default SliderMarcas;
