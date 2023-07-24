import CardPlan from "./CardPlan";
import imgPlanPrimerosPasos from "../../../../assets/img/Principal/CardPlan/plan_PrimerosPasos.jpg";
import imgPlanAdulto from "../../../../assets/img/Principal/CardPlan/plan_Madurando.jpg";
import imgPlanMadurando from "../../../../assets/img/Principal/CardPlan/plan_Adulto.jpg";
import { Button } from "react-bootstrap";
import { ArrowRight, ArrowLeft } from "react-bootstrap-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';


const SliderPlanes = () => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={1}
      spaceBetween={16}
      initialSlide={1}
      coverflowEffect={{
        rotate: 0,
        stretch: 50,
        depth: 150,
        modifier: 1,
        slideShadows: true,
      }}
      navigation={{
        nextEl: ".plan-swiper-button-next",
        prevEl: ".plan-swiper-button-prev",
      }}
      modules={[EffectCoverflow,Navigation]}
      breakpoints={{
        576: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 3
        },
      }}>
        <div slot="container-start" className="d-flex gap-2 justify-content-end p-3">
            <Button variant="outline-dark" type="button" className="rounded-circle p-2 lh-1 plan-swiper-button-prev">
                <ArrowLeft size={24}></ArrowLeft>
            </Button>
            <Button variant="outline-dark" type="button" className="rounded-circle p-2 lh-1 plan-swiper-button-next">
                <ArrowRight size={24}></ArrowRight>
            </Button>
        </div>
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
