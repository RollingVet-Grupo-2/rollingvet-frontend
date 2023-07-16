import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../../assets/rollingVetLogo.svg";

const NavbarPage = () => {
    return (
        <Navbar expand="lg" style={{ backgroundColor: "#ddd" }}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={Logo} alt="Rolling Vet logo oficial" style={{width:"150px"}} />
                </Navbar.Brand>
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
