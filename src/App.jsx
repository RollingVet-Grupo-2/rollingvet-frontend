import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import AdminTurnos from "./components/views/AdminTurnos";
import CrearTurno from "./components/views/turnos/CrearTurno";

function App() {
  return (
    <>
      {/* <AdminTurnos /> */}
      <CrearTurno />
    </>
  );
}

export default App;
