import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import AdminPacientes from "./components/views/AdminPacientes";
import CrearPaciente from "./components/views/pacientes/CrearPaciente";

function App() {
  return (
    <>
      {/* <AdminPacientes /> */}
      <CrearPaciente />
    </>
  );
}

export default App;
