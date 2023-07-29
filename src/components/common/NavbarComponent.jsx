import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import Logo from "../../assets/rollingVetLogo.svg";
import LogoMobile from "../../assets/rollingVetLogoMobile.svg";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import "../../css/navbar.css";

const NavbarPage = () => {
    
    return (
        <Navbar expand="lg" className="nav">
            <Container>
                <Navbar.Brand href="#home">
                    <picture>
                        <source className="logo"  media="(min-width:768px)" srcSet={Logo}/>
                        <img className="logoMobile" src={LogoMobile} alt="Logo Veterinaria RollingVet" />
                    </picture>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto gap-md-4">
                        <NavLink end className={({ isActive }) => isActive ? "navLinks nav-item nav-link" : "nav-item nav-link"} to={"/"}>Inicio</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "navLinks nav-item nav-link" : "nav-item nav-link"} to={"/contacto"}>Contacto</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "navLinks nav-item nav-link" : "nav-item nav-link"} to={"/login"}>Login</NavLink>
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
