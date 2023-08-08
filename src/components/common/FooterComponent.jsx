import "../../css/footer.css";
import Logo from "../../assets/rollingVetLogo.svg";
import { Link, NavLink } from "react-router-dom";
const FooterComponent = () => {
    return (
        <footer className="footer">
            <section className="container py-4 px-0">
                <div className="row mx-0 gap-4 gap-md-0">
                    <article className="col-md-4">
                        <img
                            src={Logo}
                            alt="Logo RollingVet"
                            
                        />
                        <div className="d-flex gap-2">
                            <Link to={"*"}>
                                <div>
                                    <i className="bi bi-facebook icons fs-4"></i>
                                </div>
                            </Link>
                            <Link to={"*"}>
                                <div>
                                    <i className="bi bi-instagram icons fs-4"></i>
                                </div>
                            </Link>
                            <Link to={"*"}>
                                <div>
                                    <i className="bi bi-whatsapp icons fs-4"></i>
                                </div>
                            </Link>
                        </div>
                    </article>
                    <article className="col-md-4 ps-md-4 pt-md-2">
                        <h3 className="footerSectionTitle fs-4">NOSOTROS</h3>
                        <nav className="">
                            <ul className="ps-0">
                                <li className="d-flex flex-column">
                                    <NavLink className="links_footer nav-link" to={"/acercaDeNosotros"}>Quiénes somos</NavLink>
                                    <NavLink className="links_footer nav-link" to={"*"}>Servicios</NavLink>
                                    <NavLink className="links_footer nav-link" to={"*"}>Medios de pago</NavLink>
                                    <NavLink className="links_footer nav-link" to={"/contacto"}>Contacto</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </article>
                    <article className="col-md-4 pt-md-2">
                        <h3 className="footerSectionTitle fs-4">CONTACTANOS</h3>
                        <div className="d-flex flex-column">
                            <span className="fs-6 pb-0">
                                Gral. Paz 576 4000 San Miguel de Tucumán
                            </span>
                            <span className="fs-6">
                                Lunes a Viernes 8:30 a 13h | 16 a 21h
                            </span>
                            <span className="fs-6">381 000 0000</span>
                        </div>
                    </article>
                </div>
            </section>
            <section className="d-flex justify-content-center align-items-center py-4 copy_footer_section">
                <h3 className="fs-6 text-center">
                    &copy;Todos los derechos reservados - RollingVet
                </h3>
            </section>
            <section className="d-flex justify-content-center align-items-center py-3">
                <h3 className="fs-6">
                    <Link className="nav-link" to={"/acercaDeNosotros"}>Equipo que desarrolló RollingVet</Link>
                </h3>
            </section>
        </footer>
    );
};

export default FooterComponent;
