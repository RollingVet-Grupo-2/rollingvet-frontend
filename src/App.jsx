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

function App() {
  return (
    <>
      {/* <AdminPacientes /> */}
      {/* <CrearPaciente /> */}
      {/* <EditarPaciente /> */}
      {/* <AdminTurnos /> */}
      {/* <CrearTurno /> */}
      {/* <EditarTurno /> */}
      <AdminPrincipal />
    </>
  );
}

export default App;
