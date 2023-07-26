import { Container } from "react-bootstrap";
import gatito from '../../assets/img/paginaContacto/pexels-tranmautritam-2188791.jpg'
import logowsp from '../../assets/img/paginaContacto/wh38f34e-whatsapp-logo-file-whatsapp-svg-wikipedia.png'
import '../../css/pagContacto.css';
import mascotas from '../../assets/img/paginaContacto/pngegg (3).png';
import FormularioContacto from "./FormularioContacto";

const PaginaContacto = () => {
    return (
        <>
            <section className="d-flex flex-column seccionPrincipal text-center">
                <div className="row col-12 mascotas">
                    <img className="imagen_mascotas animate__animated animate__fadeInUp" src={mascotas} alt="Imagen mascotas" />
                </div>
                <article className="row justify-content-center contenedor_bienvenida py-5 ps-md-1 py-md-5">
                    <aside className="col-md-11 col-lg-7 text-center py-4 px-2">
                        <div className="card_texto py-lg-5 mt-md-4 px-3 animate__animated animate__fadeInUp">
                            <h2>Aquí encontraras diferentes medios para poder contactarte con nosotros</h2>
                            <hr />
                            <p className="fs-4 fw-semibold">En nuestra veterinaria, nos apasiona el cuidado y bienestar de todas las mascotas. Nuestras instalaciones están equipadas con tecnología de vanguardia para diagnosticar y tratar diversas condiciones de salud. En nuestra veterinaria, su compañero peludo será tratado con el mismo cariño y dedicación que brindaríamos a nuestros propios animales.</p>
                            <hr/>
                            <h5 className="my-lg-4">Te esperamos en:</h5>
                            <div className="py-4 col-12 col-lg-7 card_direccion float-end p-3 animate__animated animate__jackInTheBox">
                                <i className="fs-4 fi fi-sr-marker"></i>
                                <p><b>Gral. Paz 576, T4000
                                    <br />San Miguel de Tucumán, Tucumán</b></p>
                            </div>
                        </div>
                    </aside>
                    
                </article>
            </section>
            <FormularioContacto></FormularioContacto>
            <section className="canales_contacto text-center py-5 mt-4 row">
                <article className="container row">
                    <h3 className="mb-5">Estamos disponibles las 24 horas, todos los días.</h3>
                    <div className="col-md-4">
                    <i className="fs-4 bi bi-envelope-at"></i>
                        <p>rolling_vet@rolling.com</p>
                    </div>
                    <div className="col-md-4 my-5 my-md-0">
                    <i className="fs-4 bi bi-instagram"></i>
                        <p>@rolling_vet</p>
                    </div>
                    <div className="col-md-4">
                    <i className="fs-4 bi bi-telephone-outbound"></i>
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