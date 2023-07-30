import { Routes, Route } from "react-router";
import AdminPrincipal from "../views/AdminPrincipal";
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
                    path="/crear-turno"
                    element={<CrearTurno></CrearTurno>}
                ></Route>
                <Route
                    exact
                    path="/editar-turno/:id"
                    element={<EditarTurno></EditarTurno>}
                ></Route>
            </Routes>
        </>
    );
};

export default RutasAdministrador;
