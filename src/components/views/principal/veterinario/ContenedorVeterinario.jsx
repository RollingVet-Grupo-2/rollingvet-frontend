import { Col, Row } from "react-bootstrap";
import CardVeterinario from "./CardVeterinario";
import imgVeterinario1 from "../../../../assets/img/Principal/CardVeterinario/veterinario1.jpg"
import imgVeterinario2 from "../../../../assets/img/Principal/CardVeterinario/veterinario2.jpg"

const ContenedorVeterinario = () => {
  return (
    <Row xs={1} md={1} lg={2} className="g-3">
      <Col>
        <CardVeterinario 
          nombreVeterinario={"Dra. Ana González"}
          servicioVeterinario1={"Cirugía veterinaria"}
          servicioVeterinario2={"Consultas especializadas"}
          experienciaVeterinario={"12 años de práctica veterinaria"}
          descripcionVeterinario={
            "Es especialista en consultas veterinarias especializadas, ofreciendo diagnósticos precisos y planes de tratamiento para garantizar la salud y bienestar de tus mascotas. Además, es experta en cirugías y procedimientos quirúrgicos, brindando atención segura y efectiva para resolver diversas afecciones en animales."
          }
          imgVeterinario={imgVeterinario1}></CardVeterinario>
      </Col>
      <Col>
        <CardVeterinario
          nombreVeterinario={"Dr. Juan Pérez"}
          servicioVeterinario1={"Vacunación y control"}
          servicioVeterinario2={"Asesoramiento nutricional"}
          experienciaVeterinario={"10 años de práctica veterinaria."}
          descripcionVeterinario={
            "Su enfoque proactivo garantiza que tus animales estén protegidos y en óptimas condiciones de salud. Además, el Dr. Ramírez ofrece asesoramiento nutricional personalizado para asegurar que tus mascotas reciban una alimentación balanceada y adecuada para mantenerse sanas y felices."
          }
          imgVeterinario={imgVeterinario2}></CardVeterinario>
      </Col>
    </Row>
  );
};

export default ContenedorVeterinario;
