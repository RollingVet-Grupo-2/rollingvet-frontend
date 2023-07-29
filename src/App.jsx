import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import AdminPacientes from "./components/views/AdminPacientes";
import CrearPaciente from "./components/views/pacientes/CrearPaciente";
import EditarPaciente from "./components/views/pacientes/EditarPaciente";

function App() {
  return (
    <>
      <AdminPacientes />
      {/* <CrearPaciente /> */}
      {/* <EditarPaciente /> */}
    </>
  );
}

export default App;
