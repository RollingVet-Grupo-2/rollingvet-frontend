import "../../css/AcercaDeNosotros.css";
import {
    Card,
    Button,
    Container,
    Col,
    Row,
    Badge,
    ListGroup,
    ListGroupItem,
} from "react-bootstrap";
import gitHubIcon from "../../../node_modules/bootstrap-icons/icons/github.svg";
import correoIcon from "../../../node_modules/bootstrap-icons/icons/envelope.svg";
import linkedinIcon from "../../../node_modules/bootstrap-icons/icons/linkedin.svg";
import youtubeIcon from "../../../node_modules/bootstrap-icons/icons/youtube.svg";
import tiktokIcon from "../../../node_modules/bootstrap-icons/icons/tiktok.svg";
import codeSlash from "../../../node_modules/bootstrap-icons/icons/code-slash.svg"
import Sol from "../../assets/acercaDeNosotros/Sol.jpeg";
import Rodri from "../../assets/acercaDeNosotros/Rodri.jpg";
import Luciano from "../../assets/acercaDeNosotros/Luciano.jpg";
import "../../../node_modules/bootstrap-icons/font/bootstrap-icons.min.css";
import Atropos from "atropos/react";
import "atropos/css";

const AcercaDeNosotros = () => {
    const textTitleSectionAboutUs = "{Acerca de nosotros}";

    return (
        <>
            <div id="app">
                <section className="heroSection_container d-flex justify-content-center align-items-center">
                    <h1 className="titleAboutUs text-light text-center d-inline-block">
                        {textTitleSectionAboutUs}
                    </h1>
                </section>
            </div>

            <article className="py-5 bg-light">
                <h2 className="pb-5 fs-1 fw-bold text-center">Developers</h2>
                <Container>
                    <Row>
                        {/* SOL */}
                        <Col md={4} xl={3} className="mb-4">
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
                                        src={Sol}
                                        style={{
                                            height: "350px",
                                            objectFit: "cover",
                                        }}
                                    />
                                    <Card.Body>
                                        <Card.Title>Sol Perato</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on
                                            the card title and make up the bulk
                                            of the card's content.
                                        </Card.Text>
                                        <ListGroup className="d-flex flex-column gap-2">
                                            <ListGroupItem className="border-0 shadow">
                                                <a
                                                    href="https://github.com/SolPerato"
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
                                                                        gitHubIcon
                                                                    }
                                                                    alt="Sol Perato Github"
                                                                />
                                                            </Badge>
                                                        </h4>
                                                    </div>
                                                </a>
                                            </ListGroupItem>

                                            <ListGroupItem className="border-0 shadow">
                                                <a
                                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=Solperato27@gmail.com"
                                                    target="_blank"
                                                    className="link nav-link"
                                                >
                                                    <div>
                                                        <h4 className="d-flex align-items-center gap-2">
                                                            {"Correo"}
                                                            <Badge bg="">
                                                                <img
                                                                    className="logo linkedinLogo"
                                                                    src={
                                                                        correoIcon
                                                                    }
                                                                    alt="Sol Perato Correo"
                                                                />
                                                            </Badge>
                                                        </h4>
                                                    </div>
                                                </a>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </Atropos>
                        </Col>

                        {/* LUCIANO */}
                        <Col md={4} xl={3} className="mb-4">
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
                                        src={Luciano}
                                        style={{
                                            height: "350px",
                                            objectFit: "cover",
                                        }}
                                    />
                                    <Card.Body>
                                        <Card.Title>
                                            Luciano Angeleri
                                        </Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on
                                            the card title and make up the bulk
                                            of the card's content.
                                        </Card.Text>
                                        <ListGroup className="d-flex flex-column gap-2">
                                            <ListGroupItem className="border-0 shadow">
                                                <a
                                                    href="https://www.linkedin.com/in/cesar-luciano-angeleri/"
                                                    target="_blank"
                                                    className="link nav-link"
                                                >
                                                    <div>
                                                        <h4 className="d-flex align-items-center justify-content-between">
                                                            {"Linkedin"}
                                                            <Badge bg="">
                                                                <img
                                                                    className="logo"
                                                                    src={
                                                                        linkedinIcon
                                                                    }
                                                                    alt="Luciano Angeleri Linkedin"
                                                                />
                                                            </Badge>
                                                        </h4>
                                                    </div>
                                                </a>
                                            </ListGroupItem>

                                            <ListGroupItem className="border-0 shadow">
                                                <a
                                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=lcnang@gmail.com"
                                                    target="_blank"
                                                    className="link nav-link"
                                                >
                                                    <div>
                                                        <h4 className="d-flex align-items-center justify-content-between gap-2 fs-5">
                                                            {"Correo"}
                                                            <Badge bg="">
                                                                <img
                                                                    className="logo"
                                                                    src={
                                                                        correoIcon
                                                                    }
                                                                    alt="Luciano Angeleri Correo"
                                                                />
                                                            </Badge>
                                                        </h4>
                                                    </div>
                                                </a>
                                            </ListGroupItem>

                                            <ListGroupItem className="border-0 shadow">
                                                <a
                                                    href="https://github.com/LucianoAngeleri"
                                                    target="_blank"
                                                    className="link nav-link"
                                                >
                                                    <div>
                                                        <h4 className="d-flex align-items-center justify-content-between gap-2 fs-5">
                                                            {"GitHub"}
                                                            <Badge bg="">
                                                                <img
                                                                    className="logo"
                                                                    src={
                                                                        gitHubIcon
                                                                    }
                                                                    alt="Luciano Angeleri GitHub"
                                                                />
                                                            </Badge>
                                                        </h4>
                                                    </div>
                                                </a>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </Atropos>
                        </Col>

                        {/* NICOLAS */}
                        <Col md={4} xl={3} className="mb-4">
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
                                        src={Luciano}
                                        style={{
                                            height: "350px",
                                            objectFit: "cover",
                                        }}
                                    />
                                    <Card.Body>
                                        <Card.Title>
                                            Nicolás Herrera
                                        </Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on
                                            the card title and make up the bulk
                                            of the card's content.
                                        </Card.Text>
                                        <ListGroup className="d-flex flex-column gap-2">
                                            <ListGroupItem className="border-0 shadow">
                                                <a
                                                    href="https://www.linkedin.com/in/nicolasherrera95/"
                                                    target="_blank"
                                                    className="link nav-link"
                                                >
                                                    <div>
                                                        <h4 className="d-flex align-items-center justify-content-between">
                                                            {"Linkedin"}
                                                            <Badge bg="">
                                                                <img
                                                                    className="logo"
                                                                    src={
                                                                        linkedinIcon
                                                                    }
                                                                    alt="Nicolás Herrera Linkedin"
                                                                />
                                                            </Badge>
                                                        </h4>
                                                    </div>
                                                </a>
                                            </ListGroupItem>

                                            <ListGroupItem className="border-0 shadow">
                                                <a
                                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=herreranicoo17@gmail.com"
                                                    target="_blank"
                                                    className="link nav-link"
                                                >
                                                    <div>
                                                        <h4 className="d-flex align-items-center justify-content-between gap-2 fs-5">
                                                            {"Correo"}
                                                            <Badge bg="">
                                                                <img
                                                                    className="logo"
                                                                    src={
                                                                        correoIcon
                                                                    }
                                                                    alt="Nicolás Herrera Correo"
                                                                />
                                                            </Badge>
                                                        </h4>
                                                    </div>
                                                </a>
                                            </ListGroupItem>

                                            <ListGroupItem className="border-0 shadow">
                                                <a
                                                    href="https://github.com/herreranicolas"
                                                    target="_blank"
                                                    className="link nav-link"
                                                >
                                                    <div>
                                                        <h4 className="d-flex align-items-center justify-content-between gap-2 fs-5">
                                                            {"GitHub"}
                                                            <Badge bg="">
                                                                <img
                                                                    className="logo"
                                                                    src={
                                                                        gitHubIcon
                                                                    }
                                                                    alt="Nicolás Herrera GitHub"
                                                                />
                                                            </Badge>
                                                        </h4>
                                                    </div>
                                                </a>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </Atropos>
                        </Col>

                         {/* ESTEBAN */}
                         <Col md={4} xl={3} className="mb-4">
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
                                        src={Luciano}
                                        style={{
                                            height: "350px",
                                            objectFit: "cover",
                                        }}
                                    />
                                    <Card.Body>
                                        <Card.Title>
                                            Esteban Molina
                                        </Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on
                                            the card title and make up the bulk
                                            of the card's content.
                                        </Card.Text>
                                        <ListGroup className="d-flex flex-column gap-2">
                                            <ListGroupItem className="border-0 shadow">
                                                <a
                                                    href="https://www.linkedin.com/in/esteban-molina-b318a517a/"
                                                    target="_blank"
                                                    className="link nav-link"
                                                >
                                                    <div>
                                                        <h4 className="d-flex align-items-center justify-content-between">
                                                            {"Linkedin"}
                                                            <Badge bg="">
                                                                <img
                                                                    className="logo"
                                                                    src={
                                                                        linkedinIcon
                                                                    }
                                                                    alt="Esteban Molina Linkedin"
                                                                />
                                                            </Badge>
                                                        </h4>
                                                    </div>
                                                </a>
                                            </ListGroupItem>

                                            <ListGroupItem className="border-0 shadow">
                                                <a
                                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=solsel90@gmail.com"
                                                    target="_blank"
                                                    className="link nav-link"
                                                >
                                                    <div>
                                                        <h4 className="d-flex align-items-center justify-content-between gap-2 fs-5">
                                                            {"Correo"}
                                                            <Badge bg="">
                                                                <img
                                                                    className="logo"
                                                                    src={
                                                                        correoIcon
                                                                    }
                                                                    alt="Esteban Molina Correo"
                                                                />
                                                            </Badge>
                                                        </h4>
                                                    </div>
                                                </a>
                                            </ListGroupItem>

                                            <ListGroupItem className="border-0 shadow">
                                                <a
                                                    href="https://github.com/estebanrm1"
                                                    target="_blank"
                                                    className="link nav-link"
                                                >
                                                    <div>
                                                        <h4 className="d-flex align-items-center justify-content-between gap-2 fs-5">
                                                            {"GitHub"}
                                                            <Badge bg="">
                                                                <img
                                                                    className="logo"
                                                                    src={
                                                                        gitHubIcon
                                                                    }
                                                                    alt="Esteban Molina GitHub"
                                                                />
                                                            </Badge>
                                                        </h4>
                                                    </div>
                                                </a>
                                            </ListGroupItem>

                                            <ListGroupItem className="border-0 shadow">
                                                <a
                                                    href="https://estebanrm1.github.io/sitio-personal/Pagina_personal/"
                                                    target="_blank"
                                                    className="link nav-link"
                                                >
                                                    <div>
                                                        <h4 className="d-flex align-items-center justify-content-between gap-2 fs-5">
                                                            {"Portfolio"}
                                                            <Badge bg="">
                                                                <img
                                                                    className="logo"
                                                                    src={
                                                                        codeSlash
                                                                    }
                                                                    alt="Esteban Molina Portfolio"
                                                                />
                                                            </Badge>
                                                        </h4>
                                                    </div>
                                                </a>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </Atropos>
                        </Col>

                        {/* RODRI */}
                        <Col md={4} xl={3} className="mb-4">
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
                                        src={Rodri}
                                        style={{
                                            height: "350px",
                                            objectFit: "cover",
                                        }}
                                    />
                                    <Card.Body>
                                        <Card.Title>
                                            Rodrigo Vizcarra
                                        </Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on
                                            the card title and make up the bulk
                                            of the card's content.
                                        </Card.Text>
                                        <ListGroup className="d-flex flex-column gap-2">
                                            <ListGroupItem className="border-0 shadow">
                                                <a
                                                    href="https://github.com/RodrigoVizcarraDev"
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
                                                                        gitHubIcon
                                                                    }
                                                                    alt="Rodrigo Vizcarra Github"
                                                                />
                                                            </Badge>
                                                        </h4>
                                                    </div>
                                                </a>
                                            </ListGroupItem>

                                            <ListGroupItem className="border-0 shadow">
                                                <a
                                                    href="https://www.linkedin.com/in/rodrigovizcarra96/"
                                                    target="_blank"
                                                    className="link nav-link"
                                                >
                                                    <div>
                                                        <h4 className="d-flex align-items-center justify-content-between">
                                                            {"Linkedin"}
                                                            <Badge bg="">
                                                                <img
                                                                    className="logo"
                                                                    src={
                                                                        linkedinIcon
                                                                    }
                                                                    alt="Rodrigo Vizcarra Linkedin"
                                                                />
                                                            </Badge>
                                                        </h4>
                                                    </div>
                                                </a>
                                            </ListGroupItem>

                                            <ListGroupItem className="border-0 shadow">
                                                <a
                                                    href="https://www.youtube.com/channel/UCXiPc95_Dq_EsiCmHy51hfQ"
                                                    target="_blank"
                                                    className="link nav-link"
                                                >
                                                    <div>
                                                        <h4 className="d-flex align-items-center justify-content-between">
                                                            {"Youtube"}
                                                            <Badge bg="">
                                                                <img
                                                                    className="logo"
                                                                    src={
                                                                        youtubeIcon
                                                                    }
                                                                    alt="Rodrigo Vizcarra canal de Youtube"
                                                                />
                                                            </Badge>
                                                        </h4>
                                                    </div>
                                                </a>
                                            </ListGroupItem>

                                            <ListGroupItem className="border-0 shadow">
                                                <a
                                                    href="https://www.tiktok.com/@rodriidev"
                                                    target="_blank"
                                                    className="link nav-link"
                                                >
                                                    <div>
                                                        <h4 className="d-flex align-items-center justify-content-between">
                                                            {"TikTok"}
                                                            <Badge bg="">
                                                                <img
                                                                    className="logo"
                                                                    src={
                                                                        tiktokIcon
                                                                    }
                                                                    alt="Rodrigo Vizcarra canal de TikTok"
                                                                />
                                                            </Badge>
                                                        </h4>
                                                    </div>
                                                </a>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </Atropos>
                        </Col>
                    </Row>
                </Container>
            </article>
        </>
    );
};

export default AcercaDeNosotros;
