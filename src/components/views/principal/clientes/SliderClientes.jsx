import { Container } from "react-bootstrap";
import CardCliente from "./CardCliente";
import imgCliente1 from "../../../../assets/img/Principal/CardCliente/clientes/cliente1.png";
import imgMascotaCliente1 from "../../../../assets/img/Principal/CardCliente/mascotas/cliente_mascota_Perro1.jpg";
import imgCliente2 from "../../../../assets/img/Principal/CardCliente/clientes/cliente2.png";
import imgMascotaCliente2 from "../../../../assets/img/Principal/CardCliente/mascotas/cliente_mascota_Gato1.jpg";
import imgCliente3 from "../../../../assets/img/Principal/CardCliente/clientes/cliente3.png";
import imgMascotaCliente3 from "../../../../assets/img/Principal/CardCliente/mascotas/cliente_mascota_Perro2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import NavegacionSlider from "../producto/NavegacionSlider";
import "../../../../css/principal/CardCliente.css";

const SliderClientes = () => {
  return (
    <Container className="py-3">
      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        loop={true}
        navigation={{
          nextEl: ".plan-swiper-button-next",
          prevEl: ".plan-swiper-button-prev",
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
      >
        <div
          slot="container-end"
          className="w-100 d-flex justify-content-center gap-2"
        >
          <NavegacionSlider />
        </div>
        <SwiperSlide className="h-auto">
          <CardCliente
            nombreCliente={"María Rodriguez"}
            imgCliente={imgCliente1}
            nombreMascota={"Luna"}
            especieMascota={"Perra"}
            imgMascotaCliente={imgMascotaCliente1}
            comentarioCliente={`Gracias a RollingVet, la salud de Luna ha mejorado significativamente. 
            La facilidad para reservar citas y la atención personalizada que recibimos han hecho que confiemos plenamente en este servicio.
              ¡Recomendaría RollingVet a todos los dueños de mascotas sin dudarlo!`}
          ></CardCliente>
        </SwiperSlide>
        <SwiperSlide className="h-auto">
          <CardCliente
            nombreCliente={"Carlos López"}
            imgCliente={imgCliente2}
            nombreMascota={"Simba"}
            especieMascota={"Gato"}
            imgMascotaCliente={imgMascotaCliente2}
            comentarioCliente={`RollingVet ha sido un verdadero salvavidas para el cuidado de Simba. 
            La comodidad de poder reservar citas desde casa y recibir atención veterinaria de calidad nos ha brindado tranquilidad. 
            Estamos agradecidos por el profesionalismo y el trato amable que siempre recibimos. 
            Simba está más feliz y saludable que nunca`}
          ></CardCliente>
        </SwiperSlide>
        <SwiperSlide className="h-auto">
          <CardCliente
            nombreCliente={"Laura Sánchez"}
            imgCliente={imgCliente3}
            nombreMascota={"Rocky"}
            especieMascota={"Perro"}
            imgMascotaCliente={imgMascotaCliente3}
            comentarioCliente={`RollingVet ha sido una excelente elección para el cuidado de Rocky. 
            Su servicio de consultas veterinarias especializadas fue fundamental para el diagnóstico y tratamiento preciso de mi perro. 
            Además, el programa de vacunación personalizado ha mantenido a Rocky protegido y saludable. 
            ¡Recomiendo a todos los dueños de mascotas este servicio confiable y profesional`}
          ></CardCliente>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default SliderClientes;
