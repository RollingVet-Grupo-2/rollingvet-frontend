import "../../css/acercaDeNosotros/acercaDeNosotros.css";
import { Container, Col, Row } from "react-bootstrap";
import sobreNosotrosImg from "../../assets/acercaDeNosotros/sobreNosotros.svg";
import gitHubIcon from "../../../node_modules/bootstrap-icons/icons/github.svg";
import correoIcon from "../../../node_modules/bootstrap-icons/icons/envelope.svg";
import linkedinIcon from "../../../node_modules/bootstrap-icons/icons/linkedin.svg";
import youtubeIcon from "../../../node_modules/bootstrap-icons/icons/youtube.svg";
import tiktokIcon from "../../../node_modules/bootstrap-icons/icons/tiktok.svg";
import codeSlash from "../../../node_modules/bootstrap-icons/icons/code-slash.svg";
import Sol from "../../assets/acercaDeNosotros/Sol.jpeg";
import Rodri from "../../assets/acercaDeNosotros/Rodri.jpg";
import Luciano from "../../assets/acercaDeNosotros/Luciano.jpg";
import Esteban from "../../assets/acercaDeNosotros/Esteban.jpeg";
import Nicolas from "../../assets/acercaDeNosotros/Nicolas.jpg";
import "../../../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import ColumnaDesarrollador from "./acercaDeNosotros/ColumnaDesarrollador";
const AcercaDeNosotros = () => {
    const textTitleSectionAboutUs = "{Acerca de nosotros}";
    const infoDesarrolladores = [
        {
            nombre: "Sol Perato",
            imagen: Sol,
            redesSociales: [
                {
                    nombre: "GitHub",
                    url: "https://github.com/SolPerato",
                    logo: gitHubIcon,
                },
                {
                    nombre: "Correo",
                    url: "https://mail.google.com/mail/?view=cm&fs=1&to=Solperato27@gmail.com",
                    logo: correoIcon,
                },
            ],
        },
        {
            nombre: "Luciano Angeleri",
            imagen: Luciano,
            redesSociales: [
                {
                    nombre: "GitHub",
                    url: "https://github.com/LucianoAngeleri",
                    logo: gitHubIcon,
                },
                {
                    nombre: "Correo",
                    url: "https://mail.google.com/mail/?view=cm&fs=1&to=lcnang@gmail.com",
                    logo: correoIcon,
                },
                {
                    nombre: "Linkedin",
                    url: "https://www.linkedin.com/in/cesar-luciano-angeleri/",
                    logo: linkedinIcon,
                },
            ],
        },
        {
            nombre: "Nicolás Herrera",
            imagen: Nicolas,
            redesSociales: [
                {
                    nombre: "GitHub",
                    url: "https://github.com/herreranicolas",
                    logo: gitHubIcon,
                },
                {
                    nombre: "Correo",
                    url: "https://mail.google.com/mail/?view=cm&fs=1&to=herreranicoo17@gmail.com",
                    logo: correoIcon,
                },
                {
                    nombre: "Linkedin",
                    url: "https://www.linkedin.com/in/nicolasherrera95/",
                    logo: linkedinIcon,
                },
            ],
        },
        {
            nombre: "Esteban Molina",
            imagen: Esteban,
            redesSociales: [
                {
                    nombre: "GitHub",
                    url: "https://github.com/estebanrm1",
                    logo: gitHubIcon,
                },
                {
                    nombre: "Correo",
                    url: "https://mail.google.com/mail/?view=cm&fs=1&to=solsel90@gmail.com",
                    logo: correoIcon,
                },
                {
                    nombre: "Linkedin",
                    url: "https://www.linkedin.com/in/esteban-molina-b318a517a/",
                    logo: linkedinIcon,
                },
                {
                    nombre: "Portfolio",
                    url: "https://estebanrm1.github.io/sitio-personal/Pagina_personal/",
                    logo: codeSlash,
                },
            ],
        },
        {
            nombre: "Rodrigo Vizcarra",
            imagen: Rodri,
            redesSociales: [
                {
                    nombre: "GitHub",
                    url: "https://github.com/RodrigoVizcarraDev",
                    logo: gitHubIcon,
                },
                {
                    nombre: "Correo",
                    url: "https://mail.google.com/mail/?view=cm&fs=1&to=rodrigovizcarra9623@gmail.com",
                    logo: correoIcon,
                },
                {
                    nombre: "Linkedin",
                    url: "https://www.linkedin.com/in/rodrigovizcarra96/",
                    logo: linkedinIcon,
                },
                {
                    nombre: "Youtube",
                    url: "https://www.youtube.com/channel/UCXiPc95_Dq_EsiCmHy51hfQ",
                    logo: youtubeIcon,
                },
                {
                    nombre: "TikTok",
                    url: "https://www.tiktok.com/@rodriidev",
                    logo: tiktokIcon,
                },
            ],
        },
    ];

    return (
        <section>
            <div id="app">
                <section className="heroSection_container d-flex justify-content-center align-items-center">
                    <h1 className="titleAboutUs text-light text-center d-inline-block">
                        {textTitleSectionAboutUs}
                    </h1>
                </section>
            </div>
            <Container className="py-5">
                <Row>
                    <Col md={6}>
                        <h2 className="fw-bold fs-1">Sobre nosotros</h2>
                        <p className="fs-4">
                            Somos un grupo interesado en aprender día a día e
                            investigar las últimas tecnologías, nos estamos
                            preparando para dar todo cuando sea necesario y
                            esperamos grandes cosas de cada uno de nosotros de
                            cara al futuro.
                        </p>
                    </Col>
                    <Col md={6}>
                        <img
                            src={sobreNosotrosImg}
                            alt=""
                            className="img-fluid"
                        />
                    </Col>
                </Row>
            </Container>
            <section className="py-5 bg-light">
                <h2 className="pb-5 fs-1 fw-bold text-center">Developers</h2>
                <Container className="p-md-5">
                    <Row className="justify-content-center">
                        {infoDesarrolladores.map((desarrollador, indice) => (
                            <ColumnaDesarrollador
                                key={indice}
                                nombreDesarrollador={desarrollador.nombre}
                                imagenDesarrollador={desarrollador.imagen}
                                redesSocialesDesarrollador={
                                    desarrollador.redesSociales
                                }
                            ></ColumnaDesarrollador>
                        ))}
                    </Row>
                </Container>
            </section>
        </section>
    );
};

export default AcercaDeNosotros;
