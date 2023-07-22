import { Container } from "react-bootstrap";
import gatito from '../../assets/pexels-arina-krasnikova-7725999.jpg'


const PaginaContacto = () => {
    return (
        <Container className="seccionPrincipal">
        <section>
            <article className="text-center">
            <p>En nuestra veterinaria, nos apasiona el cuidado y bienestar de todas las mascotas. Nuestro equipo de profesionales altamente capacitados está comprometido con brindar atención médica de primera calidad a perros, gatos y otros animales domésticos. Desde exámenes de rutina hasta tratamientos especializados, nuestro enfoque compasivo garantiza que cada paciente se sienta cómodo y seguro. Nuestras instalaciones están equipadas con tecnología de vanguardia para diagnosticar y tratar diversas condiciones de salud, y nos enorgullece establecer una relación cercana con los dueños, para asegurarnos de entender y satisfacer las necesidades individuales de cada mascota. En nuestra veterinaria, su compañero peludo será tratado con el mismo cariño y dedicación que brindaríamos a nuestros propios animales.</p>
            </article>
            <span></span>
            <div>
                <img src={gatito} alt="Imagen gatitos" />
            </div>
        </section>
            
        </Container>
    );
};

export default PaginaContacto;