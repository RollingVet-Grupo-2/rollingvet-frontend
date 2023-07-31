import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import AdminPacientes from "./components/views/AdminPacientes";
import CrearPaciente from "./components/views/pacientes/CrearPaciente";
import EditarPaciente from "./components/views/pacientes/EditarPaciente";
import AdminPrincipal from "./components/views/AdminPrincipal";
import AdminTurnos from "./components/views/AdminTurnos";
import CrearTurno from "./components/views/turnos/CrearTurno";
import EditarTurno from "./components/views/turnos/EditarTurno";
import AdminPrincipal from "./components/views/AdminPrincipal";
import NavbarPageComponent from "./components/common/NavbarComponent";
import Inicio from "./components/views/Inicio";
import FooterComponent from "./components/common/FooterComponent";
import AcercaDeNosotros from "./components/views/AcercaDeNosotros";
import Error404 from "./components/views/Error404";
import "./App.css";
import PaginaContacto from "./components/views/PaginaContacto";
import Login from "./components/views/Login";
function App() {
  return (
    <>
    {/*<NavbarPageComponent></NavbarPageComponent>*/}
    <Login></Login>
    {/*<AcercaDeNosotros></AcercaDeNosotros>*/}
    {/* <AdminTurnos /> */}
    {/* <CrearTurno /> */}
    {/* <EditarTurno /> */}
    {/* <Inicio></Inicio> */}
    {/* <Error404></Error404> */}
    {/* <PaginaContacto></PaginaContacto> */}
    {/*<FooterComponent></FooterComponent>*/}
    </>
  );
}

export default App;