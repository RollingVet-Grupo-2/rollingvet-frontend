import { Container } from "react-bootstrap";
import gatito from '../../assets/pexels-arina-krasnikova-7725999.jpg'
import '../../css/pagContacto.css'


const PaginaContacto = () => {
    return (
        <section className="seccionPrincipal">
            <article className="d-flex w-100 p-3 contenedor_bienvenida">
                <article className="text-center">
                    <div className="card_texto p-5 mt-5 animate__animated animate__fadeInUp">
                        <h2>Aquí encontraras diferentes medios para poder contactarte con nosotros</h2>
                        <hr />
                        <p className="fs-5">En nuestra veterinaria, nos apasiona el cuidado y bienestar de todas las mascotas. Nuestras instalaciones están equipadas con tecnología de vanguardia para diagnosticar y tratar diversas condiciones de salud. En nuestra veterinaria, su compañero peludo será tratado con el mismo cariño y dedicación que brindaríamos a nuestros propios animales.</p>
                        <h5 className="mt-lg-5">Te esperamos en:</h5>
                        <div className="card_direccion float-end p-2 animate__animated animate__jackInTheBox">
                            <i className="fi fi-sr-marker"></i>
                            <p className="pt-2">Gral. Paz 576, T4000 San Miguel de Tucumán, Tucumán</p>
                        </div>
                    </div>
                </article>
                
                <div className="contenedor_gatitos animate__animated animate__fadeInUp">
                    <img className="imagen_gatitos" src={gatito} alt="Imagen gatitos" />
                </div>
            </article>
        </section>
    );
};

export default PaginaContacto;