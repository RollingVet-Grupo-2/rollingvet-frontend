import "../../css/AcercaDeNosotros.css";
import { Card, Button, Container, Col, Row } from "react-bootstrap";
import Sol from "../../assets/acercaDeNosotros/Sol.jpeg";
import Rodri from "../../assets/acercaDeNosotros/Rodri.jpg"
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

            <article className="mt-4">
                <h2 className="fs-1 text-center">Developers</h2>
                <Container>
                    <Row>
                        <Col md={4} xl={3} className="mb-4">
                            <Atropos
                                activeOffset={40}
                                shadow={0.5}
                                shadowScale={0.9}
                            >
                                <Card >
                                    <Card.Img
                                        variant="top"
                                        src={Sol}
                                        style={{height:"500px", objectFit:"cover"}}
                                    />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on
                                            the card title and make up the bulk
                                            of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">
                                            Go somewhere
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Atropos>
                        </Col>
                        <Col md={4} xl={3} className="mb-4">
                            <Atropos
                                activeOffset={40}
                                shadow={0.5}
                                shadowScale={0.9}
                            >
                                <Card>
                                    <Card.Img
                                        variant="top"
                                        src={Rodri}
                                        style={{height:"500px", objectFit:"cover"}}
                                    />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on
                                            the card title and make up the bulk
                                            of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">
                                            Go somewhere
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Atropos>
                        </Col>
                        <Col md={4} xl={3} className="mb-4">
                            <Atropos
                                activeOffset={40}
                                shadow={0.5}
                                shadowScale={0.9}
                            >
                                <Card>
                                    <Card.Img
                                        variant="top"
                                        src="holder.js/100px180"
                                    />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on
                                            the card title and make up the bulk
                                            of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">
                                            Go somewhere
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Atropos>
                        </Col>
                        <Col md={4} xl={3} className="mb-4">
                            <Atropos
                                activeOffset={40}
                                shadow={0.5}
                                shadowScale={0.9}
                            >
                                <Card>
                                    <Card.Img
                                        variant="top"
                                        src="holder.js/100px180"
                                    />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on
                                            the card title and make up the bulk
                                            of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">
                                            Go somewhere
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Atropos>
                        </Col>
                        <Col md={4} xl={3} className="mb-4">
                            <Atropos
                                activeOffset={40}
                                shadow={0.5}
                                shadowScale={0.9}
                            >
                                <Card>
                                    <Card.Img
                                        variant="top"
                                        src="holder.js/100px180"
                                    />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on
                                            the card title and make up the bulk
                                            of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">
                                            Go somewhere
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Atropos>
                        </Col>
                        <Col md={4} xl={3} className="mb-4">
                            <Atropos
                                activeOffset={40}
                                shadow={0.5}
                                shadowScale={0.9}
                            >
                                <Card>
                                    <Card.Img
                                        variant="top"
                                        src="holder.js/100px180"
                                    />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on
                                            the card title and make up the bulk
                                            of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">
                                            Go somewhere
                                        </Button>
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
