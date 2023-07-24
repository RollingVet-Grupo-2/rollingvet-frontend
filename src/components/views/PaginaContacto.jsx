import { Container } from "react-bootstrap";
import gatito from '../../assets/img/paginaContacto/pexels-tranmautritam-2188791.jpg'
import logowsp from '../../assets/img/paginaContacto/wh38f34e-whatsapp-logo-file-whatsapp-svg-wikipedia.png'
import '../../css/pagContacto.css';
import mascotas from '../../assets/img/paginaContacto/pngegg (3).png';
import FormularioContacto from "./FormularioContacto";

const PaginaContacto = () => {
    return (
        <>
            <Container className="seccionPrincipal text-center">
                <div className="mascotas col-12">
                    <img className="imagen_mascotas animate__animated animate__fadeInUp" src={mascotas} alt="Imagen mascotas" />
                </div>
                <article className="row justify-content-center contenedor_bienvenida  py-5 py-lg-4">
                    <aside className="col-md-11 col-lg-7 text-center">
                        <div className="card_texto p-lg-5 ms-lg-5 mt-lg-5 animate__animated animate__fadeInUp">
                            <h2>Aquí encontraras diferentes medios para poder contactarte con nosotros</h2>
                            <hr />
                            <p className="fs-5 fw-semibold">En nuestra veterinaria, nos apasiona el cuidado y bienestar de todas las mascotas. Nuestras instalaciones están equipadas con tecnología de vanguardia para diagnosticar y tratar diversas condiciones de salud. En nuestra veterinaria, su compañero peludo será tratado con el mismo cariño y dedicación que brindaríamos a nuestros propios animales.</p>
                            <h5 className="mt-lg-3">Te esperamos en:</h5>
                            <div className="col-12 col-lg-7 card_direccion float-end p-2 animate__animated animate__jackInTheBox">
                                <i className="fi fi-sr-marker"></i>
                                <p className="pt-2"><b>Gral. Paz 576, T4000
                                    <br />San Miguel de Tucumán, Tucumán</b></p>
                            </div>
                        </div>
                    </aside>
                    <aside className="col-md-6 col-lg-5 text-center mt-5 contenedor_gatito animate__animated animate__fadeInUp">
                        <img className="img-fluid" src={gatito} alt="Imagen gatito" />
                    </aside>
                </article>
            </Container>
            <FormularioContacto></FormularioContacto>
            <section className="canales_contacto text-light text-center py-5 mt-4 row">
                <article className="container row">
                    <h3 className="mb-5">Estamos disponibles las 24 horas, todos los días.</h3>
                    <div className="col-md-4">
                    <i className="bi bi-envelope-at"></i>
                        <p>rolling_vet@rolling.com</p>
                    </div>
                    <div className="col-md-4 my-5 my-md-0">
                    <i className="bi bi-instagram"></i>
                        <p>@rolling_vet</p>
                    </div>
                    <div className="col-md-4">
                    <i className="bi bi-telephone-outbound"></i>
                        <p>381-6543210</p>
                    </div>
                </article>
            </section>
            <div className="whatsapp">
                <a href="https://api.whatsapp.com/send/?phone=5493813658035" target="blank">
            <img className="logo_wsp" src={logowsp} alt="Logo de wsp" />
                </a>
            </div>
        </>
    );
};

export default PaginaContacto;