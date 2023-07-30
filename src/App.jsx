import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import AdminTurnos from "./components/views/AdminTurnos";
import CrearTurno from "./components/views/turnos/CrearTurno";
import EditarTurno from "./components/views/turnos/EditarTurno";
import AdminPrincipal from "./components/views/AdminPrincipal";
import NavbarPageComponent from './components/common/NavbarComponent';
import Inicio from './components/views/Inicio';
import FooterComponent from "./components/common/FooterComponent";
import AcercaDeNosotros from "./components/views/AcercaDeNosotros";
import Error404 from "./components/views/Error404";
import "./App.css";
import PaginaContacto from "./components/views/PaginaContacto";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <NavbarPageComponent></NavbarPageComponent>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route exact path="/contacto" element={<PaginaContacto></PaginaContacto>}></Route>

        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
    <FooterComponent></FooterComponent>
    </BrowserRouter>
  );
}

export default App;
