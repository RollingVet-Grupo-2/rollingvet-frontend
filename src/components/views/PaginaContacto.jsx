import { Container } from "react-bootstrap";
import gatito from '../../assets/img/paginaContacto/pexels-tranmautritam-2188791.jpg'
import '../../css/pagContacto.css'
import mascotas from '../../assets/img/paginaContacto/pngegg (3).png'
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
                            <p className="fs-5">En nuestra veterinaria, nos apasiona el cuidado y bienestar de todas las mascotas. Nuestras instalaciones están equipadas con tecnología de vanguardia para diagnosticar y tratar diversas condiciones de salud. En nuestra veterinaria, su compañero peludo será tratado con el mismo cariño y dedicación que brindaríamos a nuestros propios animales.</p>
                            <h5 className="mt-lg-3">Te esperamos en:</h5>
                            <div className="col-12 col-lg-7 card_direccion float-end p-2 animate__animated animate__jackInTheBox">
                                <i className="fi fi-sr-marker"></i>
                                <p className="pt-2"><b>Gral. Paz 576, T4000
                                    <br />San Miguel de Tucumán, Tucumán</b></p>
                            </div>
                        </div>
                    </aside>
                    <aside className="col-md-6 col-lg-4 text-center mt-lg-5 contenedor_gatito animate__animated animate__fadeInUp">
                        <img className="img-fluid" src={gatito} alt="Imagen gatito" />
                    </aside>
                </article>
            </Container>
            <FormularioContacto></FormularioContacto>
            <section class="canales_contacto text-light text-center py-5 mt-4 row">
                <article class="container row">
                    <h3 class="fs-3">Estamos disponibles las 24 horas, todos los días.</h3>
                    <div class="col-md-4">
                        <a href="../pages/error404.html" class="btn text-primary"><i class="bi bi-wechat fs-1"></i></a>
                        <p>rolling_vet@rolling.com</p>
                    </div>
                    <div class="col-md-4">
                        <a href="../pages/error404.html" class="btn text-primary"><i class="bi bi-phone fs-1"></i></a>
                        <p>@rolling_vet</p>
                    </div>
                    <div class="col-md-4">
                        <a href="../pages/error404.html" class="btn text-primary"><i class="bi bi-card-text fs-1"></i></a>
                        <p>381-6543210</p>
                    </div>
                </article>
            </section>
        </>
    );
};

export default PaginaContacto;