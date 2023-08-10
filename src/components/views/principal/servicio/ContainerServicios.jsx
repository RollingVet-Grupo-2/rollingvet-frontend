import CardServicio from "./CardServicio";
import { useEffect, useState } from "react";
import { obtenerServicios } from "../../../helpers/queries";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import "swiper/css/autoplay";
import NavegacionSlider from "../producto/NavegacionSlider";

const ContainerServicios = () => {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    obtenerServicios().then((respuesta) => {
      if (respuesta) {
        setServicios(respuesta);
      } else {
        Swal.fire({
          title: "Oops! Lo siento!",
          text: "No se pudo obtener la lista de servicios. Intente nuevamente más tarde.",
          icon: "error",
          iconColor: "#fb3154",
          background: "#062e32",
          color: "#41e9a6",
          confirmButtonColor: "#41e9a6",
        });
      }
    });
  }, []);
  return (
    <Swiper
    effect={"coverflow"}
    grabCursor={true}
    autoplay={{
      delay: 4000,
      disableOnInteraction: true,
      pauseOnMouseEnter: true,
    }}
    loop={true}
    centeredSlides={true}
    slidesPerView={1}
    spaceBetween={16}
    initialSlide={0}
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
    modules={[EffectCoverflow,Navigation, Autoplay]}
    breakpoints={{
      576: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      }
    }}>
      <div slot="container-end" className="w-100 d-flex gap-2 justify-content-center align-items-center">
        <NavegacionSlider></NavegacionSlider>
      </div>
      {servicios.map((servicio) => (
        <SwiperSlide key={servicio.id}>
          <CardServicio
            key={servicio.id}
            imgServicio={servicio.img_servicio}
            nombreServicio={servicio.nombre_servicio}
            descripcionServicio={servicio.descripcion_servicio}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ContainerServicios;
