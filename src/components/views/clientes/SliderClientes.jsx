import { Container } from 'react-bootstrap';
import CardCliente from './CardCliente';
import imgCliente1 from "../../../assets/CardCliente/clientes/cliente1.png"
import imgMascotaCliente1 from "../../../assets/CardCliente/mascotas/cliente_mascota_Perro1.jpg"

const SliderClientes = () => {
    return (
        <Container className="py-3">
            <CardCliente nombreCliente={"María Rodriguez"} imgCliente={imgCliente1} nombreMascota={"Luna"} especieMascota={"Bulldog"} imgMascotaCliente={imgMascotaCliente1} comentarioCliente={`Gracias a RollingVet, la salud de Luna ha mejorado significativamente. La facilidad para reservar
              citas y la atención personalizada que recibimos han hecho que confiemos plenamente en este servicio.
              ¡Recomendaría RollingVet a todos los dueños de mascotas sin dudarlo!`}></CardCliente>
        </Container>
    );
};

export default SliderClientes;