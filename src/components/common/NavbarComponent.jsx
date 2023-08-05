import { Navbar, Nav, Container, Dropdown, Button } from "react-bootstrap";
import Logo from "../../assets/rollingVetLogo.svg";
import LogoMobile from "../../assets/rollingVetLogoMobile.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../../css/navbar.css";
import Swal from "sweetalert2";
const NavbarPage = ({ usuarioLogueado, setUsuarioLogueado }) => {
    // determinaremos si el objeto esta vacio
    const longitudObjeto = Object.entries(usuarioLogueado).length;
    const navegacion = useNavigate();
    const cerrarSesion = () => {
        localStorage.removeItem("usuario");
        setUsuarioLogueado({});
        Swal.fire({
            title: "Sesión cerrada",
            text: "Inicia sesión nuevamente para poder ingresar al admin",
            icon: "success",
            iconColor: "#a75ef0a4",
            background: "#062e32",
            color: "#41e9a6",
            confirmButtonColor: "#a75ef0a4",
          });
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
                                Iniciar sesión
                            </NavLink>
                        ) : (
                            <>
                                <Dropdown className="mb-2">
                                    <Dropdown.Toggle
                                        variant="success"
                                        id="dropdown-basic"
                                    >
                                        Administrar
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu variant="dark">
                                        <Link className="dropdown-item" to={"/administrador"}>
                                            Administrar principal
                                        </Link>
                                        <Link className="dropdown-item" to={"/administrador/pacientes"}>
                                            Administrar pacientes
                                        </Link>
                                        <Link className="dropdown-item" to={"/administrador/turnos"}>
                                            Administrar turnos
                                        </Link>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <div>
                                    <Button variant="secondary" onClick={cerrarSesion}>
                                        Cerrar sesión
                                    </Button>
                                </div>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarPage;
