import { Button, Col, Row, Table } from "react-bootstrap";
import calendario from "../../assets/img/administrador/calendar.svg";
import "../../css/AdminTurnos.css";
import { useEffect, useState } from "react";
import { obtenerTurnos } from "../helpers/queries";
import ItemTurno from "./turnos/ItemTurno";
import Swal from "sweetalert2";

const AdminTurnos = () => {
  const [turnos, setTurnos] = useState([]);
  const [busqueda, setBusqueda] = useState();

  useEffect(() => {
    obtenerTurnos().then((respuesta) => {
      if (respuesta) {
        setTurnos(respuesta);
      } else {
        Swal.fire({
          title: "Oops! Lo siento!",
          text: "No se pudo obtener la lista de turnos asignados. Intente nuevamente más tarde.",
          icon: "error",
          iconColor: "#a75ef0a4",
          background: "#062e32",
          color: "#41e9a6",
          confirmButtonColor: "#41e9a6",
        });
      }
    });
  }, []);
  return (
    <section className="container py-3 text-center">
      <section className="mb-3 mb-md-0">
        <Row className="row-cols-1 row-cols-md-2 justify-content-center align-items-center">
          <Col className="mb-3 mb-md-0">
            <h1>Administrar Turnos</h1>
            <Button variant="success" size="lg">
              Agregar turno
            </Button>
          </Col>
          <Col style={{ height: "10rem" }}>
            <img src={calendario} alt="Turno" className="img-fluid h-100" />
          </Col>
        </Row>
      </section>
      <section className="py-3">
        <h2>Lista de Turnos</h2>
        <Table
          responsive
          striped
          bordered
          hover
          variant="dark"
          className="table-center text-center"
        >
          <thead>
            <tr>
              <th>Veterinario</th>
              <th>Mascota</th>
              <th>Detalle</th>
              <th>Fecha y Hora</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {turnos.length === 0 ? (
              <tr>
                <td className="lead" colSpan={5}>
                  No hay turnos asignados
                </td>
              </tr>
            ) : (
              turnos.map((turno) => (
                <ItemTurno key={turno.id} turno={turno} setTurnos={setTurnos} />
              ))
            )}
          </tbody>
        </Table>
      </section>
    </section>
  );
};

export default AdminTurnos;
