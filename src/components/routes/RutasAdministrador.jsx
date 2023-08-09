import { Routes, Route } from "react-router";
import AdminPrincipal from "../views/AdminPrincipal";
import CrearTurno from "../views/turnos/CrearTurno";
import EditarTurno from "../views/turnos/EditarTurno";
import AdminPacientes from "../views/AdminPacientes";
import AdminTurnos from "../views/AdminTurnos";
import Error404 from "../views/Error404";
import CrearPaciente from "../views/pacientes/CrearPaciente";
import EditarPaciente from "../views/pacientes/EditarPaciente";
import AdminServicios from "../views/AdminServicios";
import CrearServicio from "../views/servicios/CrearServicio";
import EditarServicio from "../views/servicios/EditarServicio";
const RutasAdministrador = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<AdminPrincipal></AdminPrincipal>}
        ></Route>
        <Route
          exact
          path="pacientes"
          element={<AdminPacientes></AdminPacientes>}
        ></Route>
        <Route
          exact
          path="crear-paciente"
          element={<CrearPaciente></CrearPaciente>}
        ></Route>
        <Route
          exact
          path="turnos"
          element={<AdminTurnos></AdminTurnos>}
        ></Route>
        <Route
          exact
          path="crear-turno"
          element={<CrearTurno></CrearTurno>}
        ></Route>
        <Route
          exact
          path="editar-turno/:id"
          element={<EditarTurno></EditarTurno>}
        ></Route>
        <Route
          exact
          path="servicios"
          element={<AdminServicios></AdminServicios>}
        ></Route>
        <Route
          exact
          path="crear-servicio"
          element={<CrearServicio></CrearServicio>}
        ></Route>
        <Route
          exact
          path="editar-servicio/:id"
          element={<EditarServicio></EditarServicio>}
        ></Route>
        <Route
          exact
          path="editar-paciente/:id"
          element={<EditarPaciente></EditarPaciente>}
        ></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
    </>
  );
};

export default RutasAdministrador;
