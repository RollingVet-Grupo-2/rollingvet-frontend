import { Row } from "react-bootstrap";
import CardServicio from "./CardServicio";

import imgConsulta from "../../../../assets/img/Principal/CardServicio/servicio_Consulta.jpg";
import imgAlimentacion from "../../../../assets/img/Principal/CardServicio/servicio_Alimentacion.jpg";
import imgCirugia from "../../../../assets/img/Principal/CardServicio/servicio_Cirugia.jpg";
import imgVacuna from "../../../../assets/img/Principal/CardServicio/servicio_Vacuna.jpg";

const ContainerServicios = () => {
  return (
    <Row xs={1} md={2} className="g-3">
      <CardServicio
        imgServicio={imgConsulta}
        nombreServicio={"Consultas veterinarias especializadas"}
        descripcionServicio={"Recibe atención veterinaria personalizada y resuelve cualquier duda o problema que tenga tu mascota."}
      />
      <CardServicio
        imgServicio={imgVacuna}
        nombreServicio={"Vacunación y control de enfermedades"}
        descripcionServicio={"Mantén a tu mascota protegida contra enfermedades con nuestro servicio de vacunación."}
      />
      <CardServicio
        imgServicio={imgCirugia}
        nombreServicio={"Cirugías y procedimientos quirúrgicos"}
        descripcionServicio={"Realizamos cirugías con los más altos estándares de cuidado y seguridad."}
      />
      <CardServicio
        imgServicio={imgAlimentacion}
        nombreServicio={"Alimentación y asesoramiento nutricional"}
        descripcionServicio={"Te proporcionamos recomendaciones personalizadas para mantener a tu compañero sano."}
      />
    </Row>
  );
};

export default ContainerServicios;
