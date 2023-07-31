import Atropos from "atropos/react";
import "atropos/css";
import { Card, Col, Badge, ListGroup, ListGroupItem } from "react-bootstrap";
import { useState, useEffect } from "react";
import gitHubIcon from "../../../../node_modules/bootstrap-icons/icons/github.svg";
import correoIcon from "../../../../node_modules/bootstrap-icons/icons/envelope.svg";
import linkedinIcon from "../../../../node_modules/bootstrap-icons/icons/linkedin.svg";
import youtubeIcon from "../../../../node_modules/bootstrap-icons/icons/youtube.svg";
import tiktokIcon from "../../../../node_modules/bootstrap-icons/icons/tiktok.svg";
import codeSlash from "../../../../node_modules/bootstrap-icons/icons/code-slash.svg";
import Sol from "../../../assets/acercaDeNosotros/Sol.jpeg";
import Rodri from "../../../assets/acercaDeNosotros/Rodri.jpg";
import Luciano from "../../../assets/acercaDeNosotros/Luciano.jpg";
import Esteban from "../../../assets/acercaDeNosotros/Esteban.jpeg";
import Nicolas from "../../../assets/acercaDeNosotros/Nicolas.jpg";
const CardColAcercaDeNosotros = ({}) => {
    let developersData = [
        {
            imagen: { Sol },
            nombre: "Sol Perato",
        },
        {
            imagen: { Luciano },
            nombre: "Luciano Angeleri",
        },
        {
            imagen: { Esteban },
            nombre: "Esteban Molina",
        },
        {
            imagen: { Nicolas },
            nombre: "Nicolás",
        },
        {
            imagen: { Rodri },
            nombre: "Rodrigo Vizcarra",
        },
    ];
    let developersSocialMediaArray = [
        {
            github: "https://github.com/SolPerato",
            email: "Solperato27@gmail.com",
            linkedin: null,
            porfolio: null,
            youtube: null,
            tiktok: null,
        },
        {
            github: "https://github.com/RodrigoVizcarraDev",
            email: "rodrigovizcarra9623@gmail.com",
            linkedin: "https://www.linkedin.com/in/rodrigovizcarra96/",
            youtube: "https://www.youtube.com/channel/UCXiPc95_Dq_EsiCmHy51hfQ",
            tiktok: "https://www.tiktok.com/@rodriidev",
        },
        {
            github: "https://github.com/estebanrm1",
            email: "solsel90@gmail.com",
            linkedin: "https://www.linkedin.com/in/esteban-molina-b318a517a/",
            porfolio:
                "https://estebanrm1.github.io/sitio-personal/Pagina_personal/",
            youtube: null,
            tiktok: null,
        },
        {
            github: "https://github.com/herreranicolas",
            email: "herreranicoo17@gmail.com",
            linkedin: "https://www.linkedin.com/in/nicolasherrera95/",
            porfolio: null,
            youtube: null,
            tiktok: null,
        },
        {
            github: "https://github.com/LucianoAngeleri",
            email: "lcnang@gmail.com",
            linkedin: "https://www.linkedin.com/in/cesar-luciano-angeleri/",
            porfolio: null,
            youtube: null,
            tiktok: null,
        },
    ];
    const [tamanoPantalla, setTamanoPantalla] = useState(900);
    useEffect(() => {
        const tamaño = window.innerWidth;
        setTamanoPantalla(tamaño);
    }, []);
    return (
        <>
            {developersData.map((developer) => {
                return (
                    <Col md={6} xl={4} className="mb-4">
                        {tamanoPantalla > 991 ? (
                            <Atropos
                                activeOffset={40}
                                shadow={0.5}
                                shadowScale={0.9}
                                rotateXMax={5}
                                rotateYMax={5}
                            >
                                <Card className="border-0">
                                    <Card.Img
                                        variant="top"
                                        src={imagen}
                                        style={{
                                            height: "350px",
                                            objectFit: "cover",
                                        }}
                                    />
                                    <Card.Body>
                                        <Card.Title className="mb-3 fs-3">
                                            {nombre}
                                        </Card.Title>
                                        {developersSocialMediaArray.map(
                                            (socialMedia, index) => {
                                                socialMedia.map(
                                                    (redSocialUrl) => {
                                                        <ListGroupItem className="border-0 shadow">
                                                            <a
                                                                href={
                                                                    developer.imagen
                                                                }
                                                                target="_blank"
                                                                className="link nav-link"
                                                            >
                                                                <div>
                                                                    <h4 className="d-flex align-items-center justify-content-between">
                                                                        {
                                                                            "Github"
                                                                        }
                                                                        <Badge bg="">
                                                                            <img
                                                                                className="logo"
                                                                                src={
                                                                                    socialMedia
                                                                                }
                                                                                alt={`${developer.nombre} Github`}
                                                                            />
                                                                        </Badge>
                                                                    </h4>
                                                                </div>
                                                            </a>
                                                        </ListGroupItem>;
                                                    }
                                                );
                                            }
                                        )}
                                    </Card.Body>
                                </Card>
                            </Atropos>
                        ) : (
                            <Card className="border-0">
                                <Card.Img
                                    variant="top"
                                    src={developer.nombre}
                                    style={{
                                        height: "350px",
                                        objectFit: "cover",
                                    }}
                                />
                                <Card.Body>
                                    <Card.Title className="mb-3 fs-3">
                                        Sol Perato
                                    </Card.Title>

                                    {developersSocialMediaArray.map(
                                        (socialMedia, index) => {
                                            socialMedia.map((redSocialUrl) => {
                                                <ListGroupItem className="border-0 shadow">
                                                    <a
                                                        href={developer.imagen}
                                                        target="_blank"
                                                        className="link nav-link"
                                                    >
                                                        <div>
                                                            <h4 className="d-flex align-items-center justify-content-between">
                                                                {"Github"}
                                                                <Badge bg="">
                                                                    <img
                                                                        className="logo"
                                                                        src={
                                                                            socialMedia
                                                                        }
                                                                        alt={`${developer.nombre} Github`}
                                                                    />
                                                                </Badge>
                                                            </h4>
                                                        </div>
                                                    </a>
                                                </ListGroupItem>;
                                            });
                                        }
                                    )}

                                    
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        )}
                    </Col>
                );
            })}
        </>
    );
};

export default CardColAcercaDeNosotros;
