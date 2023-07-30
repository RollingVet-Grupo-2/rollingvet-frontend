import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import NavbarPageComponent from "./components/common/NavbarComponent";
import Inicio from "./components/views/Inicio";
import FooterComponent from "./components/common/FooterComponent";
import AcercaDeNosotros from "./components/views/AcercaDeNosotros";
import Login from "./components/views/Login";
import Error404 from "./components/views/Error404";
import "./App.css";
import PaginaContacto from "./components/views/PaginaContacto";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollTop from "./components/common/ScrollTop";
import { useState } from "react";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdministrador from "./components/routes/RutasAdministrador";
function App() {
    const usuarioLocalStorage =
        JSON.parse(localStorage.getItem("usuario")) || {};
    const [usuarioLogueado, setUsuarioLogueado] = useState(usuarioLocalStorage);
    
    return (
        <BrowserRouter>
            <NavbarPageComponent
                usuarioLogueado={usuarioLogueado}
                setUsuarioLogueado={setUsuarioLogueado}
            ></NavbarPageComponent>
            <ScrollTop>
                <Routes>
                    <Route exact path="/" element={<Inicio></Inicio>}></Route>
                    <Route
                        exact
                        path="/contacto"
                        element={<PaginaContacto></PaginaContacto>}
                    ></Route>
                    <Route
                        exact
                        path="/acercaDeNosotros"
                        element={<AcercaDeNosotros></AcercaDeNosotros>}
                    ></Route>
                    <Route
                        exact
                        path="/login"
                        element={
                            <Login
                                setUsuarioLogueado={setUsuarioLogueado}
                            ></Login>
                        }
                    ></Route>
                    <Route
                        path="/administrador/*"
                        element={
                            <RutasProtegidas>
                                <RutasAdministrador></RutasAdministrador>
                            </RutasProtegidas>
                        }
                    ></Route>
                    <Route path="*" element={<Error404></Error404>}></Route>
                </Routes>
            </ScrollTop>
            <FooterComponent></FooterComponent>
        </BrowserRouter>
    );
}

export default App;
