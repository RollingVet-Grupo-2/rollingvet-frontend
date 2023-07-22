import CardMarca from "./CardMarca";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import "../../../css/Filtros.css"
import imgMarca1 from "../../../assets/Principal/CardMarca/marcas_Eukanuba_gris.png";
import imgMarca2 from "../../../assets/Principal/CardMarca/marcas_RoyalCanin_gris.png";
import imgMarca3 from "../../../assets/Principal/CardMarca/marcas_Whiskas.png";
import imgMarca4 from "../../../assets/Principal/CardMarca/marcas_Scrumbles_gris.png";
import imgMarca5 from "../../../assets/Principal/CardMarca/marcas_Dreamies_gris.png";
import imgMarca6 from "../../../assets/Principal/CardMarca/marcas_Bravo.svg";

const SliderMarcas = () => {
  return (
    <Swiper className="desvanecer px-5"
      modules={[Autoplay]}
      loop={true}
      slidesPerView={1}
      spaceBetween={16}
      allowTouchMove={false}
      autoplay={{
        delay: 500,
        disableOnInteraction: false,
      }}
      speed={10000}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
      }}>
      <SwiperSlide className="my-auto">
        <CardMarca nombreMarca={"Marca 1"} imgMarca={imgMarca1}></CardMarca>
      </SwiperSlide>
      <SwiperSlide className="my-auto">
        <CardMarca nombreMarca={"Marca 2"} imgMarca={imgMarca2}></CardMarca>
      </SwiperSlide>
      <SwiperSlide className="my-auto">
        <CardMarca nombreMarca={"Marca 3"} imgMarca={imgMarca3}></CardMarca>
      </SwiperSlide>
      <SwiperSlide className="my-auto">
        <CardMarca nombreMarca={"Marca 4"} imgMarca={imgMarca4}></CardMarca>
      </SwiperSlide>
      <SwiperSlide className="my-auto">
        <CardMarca nombreMarca={"Marca 5"} imgMarca={imgMarca5}></CardMarca>
      </SwiperSlide>
      <SwiperSlide className="my-auto">
        <CardMarca nombreMarca={"Marca 6"} imgMarca={imgMarca6}></CardMarca>
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderMarcas;