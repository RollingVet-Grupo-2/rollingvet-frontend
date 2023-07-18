import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import AdminTurnos from "./components/views/AdminTurnos";
import EditarTurno from "./components/views/turnos/EditarTurno";

function App() {
  return (
    <>
      {/* <AdminTurnos /> */}

      <EditarTurno />
    </>
  );
}

export default App;
