import { Navbar, Nav, Container, Dropdown, Button } from "react-bootstrap";
import Logo from "../../assets/rollingVetLogo.svg";
import LogoMobile from "../../assets/rollingVetLogoMobile.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../../css/navbar.css";

const NavbarPage = ({ usuarioLogueado, setUsuarioLogueado }) => {
    // determinaremos si el objeto esta vacio
    const longitudObjeto = Object.entries(usuarioLogueado).length;
    console.log(Object.entries(usuarioLogueado).length);
    const navegacion = useNavigate();
    const cerrarSesion = () => {
        localStorage.removeItem("usuario");
        setUsuarioLogueado({});
        navegacion("/");
    };

    return (
        <Navbar expand="lg" className="nav">
            <Container>
                <Navbar.Brand>
                    <Link to={"/"}>
                        <picture>
                            <source
                                className="logo"
                                media="(min-width:768px)"
                                srcSet={Logo}
                            />
                            <img
                                className="logoMobile"
                                src={LogoMobile}
                                alt="Logo Veterinaria RollingVet"
                            />
                        </picture>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto gap-md-4">
                        <NavLink
                            end
                            className={({ isActive }) =>
                                isActive
                                    ? "navLinks nav-item nav-link"
                                    : "nav-item nav-link"
                            }
                            to={"/"}
                        >
                            Inicio
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? "navLinks nav-item nav-link"
                                    : "nav-item nav-link"
                            }
                            to={"/contacto"}
                        >
                            Contacto
                        </NavLink>

                        {longitudObjeto === 0 ? (
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? "navLinks nav-item nav-link"
                                        : "nav-item nav-link"
                                }
                                to={"/login"}
                            >
                                Login
                            </NavLink>
                        ) : (
                            <>
                                <Dropdown>
                                    <Dropdown.Toggle
                                        variant="success"
                                        id="dropdown-basic"
                                    >
                                        Administrar
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu variant="dark">
                                        <Dropdown.Item href="#/action-1">
                                            Administrar principal
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-1">
                                            Administrar pacientes
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">
                                            Administrar turnos
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Button variant="secondary" onClick={cerrarSesion}>
                                    Logout
                                </Button>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarPage;
