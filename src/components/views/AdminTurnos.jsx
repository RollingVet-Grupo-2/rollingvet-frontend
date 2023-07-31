import { Button, Col, Form, Row, Table } from "react-bootstrap";
import calendario from "../../assets/img/administrador/calendar.svg";
import "../../css/AdminTurnos.css";
import { useEffect, useState } from "react";
import { obtenerTurnos } from "../helpers/queries";
import ItemTurno from "./turnos/ItemTurno";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const AdminTurnos = () => {
  const [turnos, setTurnos] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const buscarTurnos = (e) => {
    setBusqueda(e.target.value);
  };

  const resultados = !busqueda
    ? turnos
    : turnos.filter((turno) =>
        turno.mascota.toLowerCase().includes(busqueda.toLowerCase())
      ) || (
        <tr>
          <td className="lead" colSpan={5}>
            No existen mascotas con el nombre ingresado.
          </td>
        </tr>
      );

  const mostrarTurnos = () => {
    if (turnos.length === 0) {
      return (
        <tr>
          <td className="lead" colSpan={5}>
            No hay turnos asignados
          </td>
        </tr>
      );
    }

    if (resultados.length === 0) {
      return (
        <tr>
          <td className="lead" colSpan={5}>
            No se encontraron coincidencias
          </td>
        </tr>
      );
    }

    return resultados.map((turno) => (
      <ItemTurno key={turno.id} turno={turno} setTurnos={setTurnos} />
    ));
  };

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
            <Link className="btn btn-success" size="lg" to={"/administrador/crear-turno"}>
              Agregar turno
            </Link>
          </Col>
          <Col style={{ height: "10rem" }}>
            <img src={calendario} alt="Turno" className="img-fluid h-100" />
          </Col>
        </Row>
      </section>
      <section className="py-3">
        <Form as={Row} className="justify-content-center align-items-center">
          <Form.Group
            as={Col}
            md={8}
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label className="h3">Buscar Turnos</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa el nombre de la mascota"
              value={busqueda}
              onChange={buscarTurnos}
            />
          </Form.Group>
        </Form>
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
          <tbody>{mostrarTurnos()}</tbody>
        </Table>
      </section>
    </section>
  );
};

export default AdminTurnos;
