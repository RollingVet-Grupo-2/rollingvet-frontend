import "../../css/AcercaDeNosotros.css";
import { Card, Button, Container, Col, Row } from "react-bootstrap";
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
                        <Col md={6} xl={4} className="mb-4">
                            <Atropos
                                activeOffset={40}
                                shadow={0.5}
                                shadowScale={0.9}
                            >
                                <Card>
                                    <Card.Img
                                        variant="top"
                                        src="https://pps.whatsapp.net/v/t61.24694-24/362265638_656146479483639_2883894369324992175_n.jpg?ccb=11-4&oh=01_AdRwNpXMVP9OJ_tFLZDQX95sHcQ31pCGYK5MloZwh3cbdw&oe=64CD878D"
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
                        <Col md={6} xl={4} className="mb-4">
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
                        <Col md={6} xl={4} className="mb-4">
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
                        <Col md={6} xl={4} className="mb-4">
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
                        <Col md={6} xl={4} className="mb-4">
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
                        <Col md={6} xl={4} className="mb-4">
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
