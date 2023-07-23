import CardPlan from "./CardPlan";
import imgPlanPrimerosPasos from "../../../../assets/Principal/CardPlan/plan_PrimerosPasos.jpg";
import imgPlanAdulto from "../../../../assets/Principal/CardPlan/plan_Madurando.jpg";
import imgPlanMadurando from "../../../../assets/Principal/CardPlan/plan_Adulto.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SliderPlanes = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={16}
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
      }}>
      <SwiperSlide>
        <CardPlan
          tituloPlan={"Primeros Pasos"}
          descripcionPlan={"Servicios para mascotas de 0 a 5 años"}
          imgPlan={imgPlanPrimerosPasos}
        />
      </SwiperSlide>
      <SwiperSlide>
        <CardPlan
          tituloPlan={"Madurando"}
          descripcionPlan={"Servicios para mascotas de 5 a 10 años"}
          imgPlan={imgPlanMadurando}
        />
      </SwiperSlide>
      <SwiperSlide>
        <CardPlan
          tituloPlan={"Adulto"}
          descripcionPlan={"Servicios para mascotas de más de 10 años"}
          imgPlan={imgPlanAdulto}
        />
      </SwiperSlide>
    </Swiper>
  );
};
export default SliderPlanes;
