import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import AdminTurnos from "./components/views/AdminTurnos";
import CrearTurno from "./components/views/turnos/CrearTurno";
import EditarTurno from "./components/views/turnos/EditarTurno";

function App() {
  return (
    <>
      <AdminTurnos />
      {/* <CrearTurno /> */}
      {/* <EditarTurno /> */}
    </>
  );
}

export default App;
