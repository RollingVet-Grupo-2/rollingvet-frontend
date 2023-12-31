import { Button, Card, Col, Row, Table } from "react-bootstrap";
import trabajadores from "../../assets/img/administrador/co-workers.svg";
import vets from "../../assets/img/administrador/vets.svg";
import "../../css/AdminPrincipal.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  obtenerPacientes,
  obtenerTurnos,
  obtenerVeterinarios,
} from "../helpers/queries";
import Swal from "sweetalert2";
import TurnosAsignados from "./turnos/TurnosAsignados";

const AdminPrincipal = () => {
  const [veterinarios, setVeterinarios] = useState([]);
  const [pacientes, setPacientes] = useState([]);
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    fetchVeterinarios();
    fetchPacientes();
    fetchTurnos();
  }, []);

  const fetchVeterinarios = () => {
    obtenerVeterinarios().then((respuesta) => {
      if (respuesta) {
        setVeterinarios(respuesta);
      } else {
        Swal.fire({
          title: "Oops! Lo siento!",
          text: "No se pudo obtener la lista de pacientes. Intente nuevamente más tarde.",
          icon: "error",
          iconColor: "#a75ef0a4",
          background: "#062e32",
          color: "#41e9a6",
          confirmButtonColor: "#41e9a6",
        });
      }
    });
  };

  const fetchPacientes = () => {
    obtenerPacientes().then((respuesta) => {
      if (respuesta) {
        setPacientes(respuesta);
      } else {
        Swal.fire({
          title: "Oops! Lo siento!",
          text: "No se pudo obtener la lista de pacientes. Intente nuevamente más tarde.",
          icon: "error",
          iconColor: "#a75ef0a4",
          background: "#062e32",
          color: "#41e9a6",
          confirmButtonColor: "#41e9a6",
        });
      }
    });
  };

  const fetchTurnos = () => {
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
  };

  return (
    <section className="container text-center py-3">
      <section className="border border-3 border-dark rounded rounded-3 shadow mb-3">
        <Row className="row-cols-1 row-cols-md-2 justify-content-center align-items-center py-3">
          <Col>
            <h1 className="mb-0">¡Hola, Admin!</h1>
            <p className="lead mb-0">
              Te damos la bienvenida a la página principal de administración.
            </p>
          </Col>
          <Col>
            <img src={trabajadores} alt="Trabajadores" className="img-fluid" />
          </Col>
        </Row>
      </section>
      <section className="py-3">
        <Row className="row-cols-1 row-cols-md-2 justify-content-center align-items-center">
          <Col>
            <img src={vets} alt="Veterinarios" className="img-fluid" />
          </Col>
          <Col>
            <h2>
              Administrá fichas de pacientes y turnos desde cualquier lugar.
            </h2>
            <Link to={"pacientes"}>
              <Button
                variant="primary"
                size="lg"
                className="mb-3 mb-md-3 mb-lg-0 me-lg-3 p-3 rounded-4"
              >
                Administrar Pacientes
              </Button>
            </Link>
            <Link to={"turnos"}>
              <Button variant="primary" size="lg" className="p-3 rounded-4">
                Administrar Turnos
              </Button>
            </Link>
          </Col>
        </Row>
      </section>
      <hr className="dashed" />
      <section className="row justify-content-center align-items-center pt-3">
        <h2 className="py-3">
          Visualizá rapidamente y de forma sencilla la cantidad de veterinarios
          disponibles, pacientes registrados y turnos asignados.
        </h2>
        <Card
          bg="info"
          text="light"
          style={{ width: "18rem" }}
          className="mb-3 me-md-3 shadow py-2"
        >
          <Card.Body as={Row} className="align-items-center">
            <Col xs={2}>
              <span>
                <i className="bi bi-pc-display-horizontal fs-1"></i>
              </span>
            </Col>
            <Col xs={10}>
              <Card.Title>Sistema</Card.Title>
              <Card.Text className="fw-bold">Version N° 0.0.1</Card.Text>
            </Col>
          </Card.Body>
        </Card>

        <Card
          bg="success"
          text="light"
          style={{ width: "18rem" }}
          className="mb-3 me-md-3 shadow py-2"
        >
          <Card.Body as={Row} className="align-items-center">
            <Col xs={2}>
              <span>
                <i className="bi bi-universal-access fs-1"></i>
              </span>
            </Col>
            <Col xs={10}>
              <Card.Title>Veterinarios</Card.Title>
              <Card.Text className="fw-bold">
                {veterinarios
                  ? veterinarios.length
                  : "No se pudo obtener datos"}
              </Card.Text>
            </Col>
          </Card.Body>
        </Card>

        <Card
          bg="danger"
          text="light"
          style={{ width: "18rem" }}
          className="mb-3 me-md-3 shadow py-2"
        >
          <Card.Body as={Row} className="align-items-center">
            <Col xs={2}>
              <span>
                <i className="bi bi-people-fill fs-1"></i>
              </span>
            </Col>
            <Col xs={10}>
              <Card.Title>Pacientes:</Card.Title>
              <Card.Text className="fw-bold">
                <span>{pacientes.length}</span>
              </Card.Text>
            </Col>
          </Card.Body>
        </Card>

        <Card
          bg="warning"
          text="light"
          style={{ width: "18rem" }}
          className="mb-3 me-md-3 shadow py-2"
        >
          <Card.Body as={Row} className="align-items-center">
            <Col xs={2}>
              <span>
                <i className="bi bi-file-text fs-1"></i>
              </span>
            </Col>
            <Col xs={10}>
              <Card.Title>Turnos</Card.Title>
              <Card.Text className="fw-bold">{turnos.length}</Card.Text>
            </Col>
          </Card.Body>
        </Card>
      </section>
      <section className="py-3">
        <h3>Lista de Turnos</h3>
        <Table
          striped
          responsive
          bordered
          hover
          variant="dark"
          className="table table-center"
        >
          <thead>
            <tr>
              <th>Veterinario</th>
              <th>Mascota</th>
              <th>Detalle</th>
              <th>Fecha y Hora</th>
            </tr>
          </thead>
          <tbody>
            {turnos.length === 0 ? (
              <tr>
                <td colSpan={4} className="lead">
                  No hay turnos asignados
                </td>
              </tr>
            ) : (
              turnos.map((turno) => (
                <TurnosAsignados key={turno._id} turno={turno} />
              ))
            )}
          </tbody>
        </Table>
        <hr />
      </section>
    </section>
  );
};

export default AdminPrincipal;
