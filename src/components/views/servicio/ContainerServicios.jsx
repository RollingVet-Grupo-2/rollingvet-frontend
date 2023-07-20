import { Row } from "react-bootstrap";
import CardServicio from "./CardServicio";

import imgConsulta from "../../../assets/CardServicio/servicio_Consulta.jpg";
import imgAlimentacion from "../../../assets/CardServicio/servicio_Alimentacion.jpg";
import imgCirugia from "../../../assets/CardServicio/servicio_Cirugia.jpg";
import imgVacuna from "../../../assets/CardServicio/servicio_Vacuna.jpg";

const ContainerServicios = () => {
  return (
      <Row xs={1} md={2} className="g-3">
        <CardServicio imgServicio={imgConsulta} nombreServicio={"Consultas veterinarias especializadas"}></CardServicio>
        <CardServicio imgServicio={imgVacuna} nombreServicio={"Vacunación y control de enfermedades"}></CardServicio>
        <CardServicio imgServicio={imgCirugia} nombreServicio={"Cirugías y procedimientos quirúrgicos"}></CardServicio>
        <CardServicio
          imgServicio={imgAlimentacion}
          nombreServicio={"Alimentación y asesoramiento nutricional"}></CardServicio>
      </Row>
  );
};

export default ContainerServicios;
