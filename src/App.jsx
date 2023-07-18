import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import AdminPacientes from "./components/views/AdminPacientes";
import EditarPaciente from "./components/views/pacientes/EditarPaciente";

function App() {
  return (
    <>
      {/* <AdminPacientes /> */}

      <EditarPaciente />
    </>
  );
}

export default App;
