import { Routes, Route } from "react-router";
import AdminPrincipal from "../views/AdminPrincipal";
import CrearTurno from "../views/turnos/CrearTurno";
import EditarTurno from "../views/turnos/EditarTurno";
import AdminPacientes from "../views/AdminPacientes";
import AdminTurnos from "../views/AdminTurnos";
import Error404 from "../views/Error404";
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
                    path="/administar-pacientes"
                    element={<AdminPacientes></AdminPacientes>}
                ></Route>
                <Route
                    exact
                    path="/administar-turnos"
                    element={<AdminTurnos></AdminTurnos>}
                ></Route>
                <Route
                    exact
                    path="/crear-turno"
                    element={<CrearTurno></CrearTurno>}
                ></Route>
                <Route
                    exact
                    path="/editar-turno/:id"
                    element={<EditarTurno></EditarTurno>}
                ></Route>
                <Route path="*" element={<Error404></Error404>}></Route>
            </Routes>
        </>
    );
};

export default RutasAdministrador;
