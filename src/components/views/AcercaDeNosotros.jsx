import "../../css/AcercaDeNosotros.css";
import { Card, Button, Container, Col, Row } from "react-bootstrap";
const AcercaDeNosotros = () => {
    const textTitleSectionAboutUs = "{Acerca de nosotros}";

    return (
        <>
            <section className="heroSection_container d-flex justify-content-center align-items-center">
                <h1 className="titleAboutUs text-light text-center d-inline-block">
                    {textTitleSectionAboutUs}
                </h1>
            </section>
            <article className="mt-4">
                <h2 className="fs-1 text-center">Developers</h2>
                <Container>
                    <Row>
                        <Col md={6} xl={4} className="mb-4">
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src="holder.js/100px180"
                                />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the
                                        card title and make up the bulk of the
                                        card's content.
                                    </Card.Text>
                                    <Button variant="primary">
                                        Go somewhere
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} xl={4} className="mb-4">
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src="holder.js/100px180"
                                />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the
                                        card title and make up the bulk of the
                                        card's content.
                                    </Card.Text>
                                    <Button variant="primary">
                                        Go somewhere
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} xl={4} className="mb-4">
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src="holder.js/100px180"
                                />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the
                                        card title and make up the bulk of the
                                        card's content.
                                    </Card.Text>
                                    <Button variant="primary">
                                        Go somewhere
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} xl={4} className="mb-4">
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src="holder.js/100px180"
                                />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the
                                        card title and make up the bulk of the
                                        card's content.
                                    </Card.Text>
                                    <Button variant="primary">
                                        Go somewhere
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} xl={4} className="mb-4">
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src="holder.js/100px180"
                                />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the
                                        card title and make up the bulk of the
                                        card's content.
                                    </Card.Text>
                                    <Button variant="primary">
                                        Go somewhere
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </article>
        </>
    );
};

export default AcercaDeNosotros;
