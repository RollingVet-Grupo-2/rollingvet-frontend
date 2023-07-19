import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import Logo from "../../assets/rollingVetLogo.svg";
import "../../css/navbar.css";

const NavbarPage = () => {
    return (
        <Navbar expand="lg" className="nav">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={Logo}
                        alt="Rolling Vet logo oficial"
                        className="logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto gap-md-4">
                        <Nav.Link href="#home" className="navLinks">Inicio</Nav.Link>
                        <Nav.Link href="#home" className="navLinks">Contacto</Nav.Link>
                        <Nav.Link href="#link" className="navLinks">Login</Nav.Link>
                        <Dropdown>
                            <Dropdown.Toggle
                                variant="success"
                                id="dropdown-basic"
                            >
                                Administrar
                            </Dropdown.Toggle>

                            <Dropdown.Menu variant="dark">
                                <Dropdown.Item href="#/action-1">
                                    Administrar pacientes
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                    Administrar turnos
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarPage;
