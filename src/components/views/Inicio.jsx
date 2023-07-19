import { Container, Row, Col, Button } from "react-bootstrap";

const Inicio = () => {
    return (
        <>
            <Container fluid className="text-bg-secondary py-5">
                <h1 className="display-1 p-3 text-center">Cuida a tus mascotas con RollingVet</h1>
                <h2 className="h2 px-3  px-md-5 py-2">
                    La forma más sencilla de cuidar a tus mascotas. Dales a tus compañeros el cuidado que merecen!
                </h2>
                <div className="d-flex justify-content-center gap-2 gap-md-5 p-3">
                    <Button variant="primary">Reservar Turno</Button>
                    <Button variant="outline-primary">Contactanos</Button>
                </div>
            </Container>
        </>
    );
};

export default Inicio;
