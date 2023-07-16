import { Navbar, Nav, Container } from "react-bootstrap";
const NavbarPage = () => {
    return (
        <Navbar expand="lg" style={{ backgroundColor: "#98EDC4" }}>
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#home">Administrar Turnos</Nav.Link>
                        <Nav.Link href="#home">Administrar Pacientes</Nav.Link>
                        <Nav.Link href="#link">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarPage;
