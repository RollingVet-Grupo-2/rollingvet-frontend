import { Button, Card, Col, Row, Table } from "react-bootstrap";
import trabajadores from "../../assets/img/administrador/co-workers.svg";
import vets from "../../assets/img/administrador/vets.svg";
import "../../css/AdminPrincipal.css";
import { useEffect, useState } from "react";
import { obtenerTurnos } from "../helpers/queries";
import Swal from "sweetalert2";

const AdminPrincipal = () => {
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    obtenerTurnos().then((respuesta) => {
      if (respuesta) {
        console.log(respuesta);
        setTurnos(respuesta);
      } else {
        Swal.fire("No se obtuvieron los turnos");
      }
    });
  }, []);
  return (
    <section className="container text-center py-3">
      <section className="border border-3 rounded rounded-3 shadow mb-3">
        <Row className="row-cols-1 row-cols-md-2 justify-content-center align-items-center">
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
            <Button
              variant="success"
              size="lg"
              className="mb-3 mb-md-3 mb-lg-0 me-lg-3 p-3"
            >
              Administrar Pacientes
            </Button>
            <Button variant="success" size="lg" className="p-3">
              Administrar Turnos
            </Button>
          </Col>
        </Row>
      </section>
      <hr />
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
              <Card.Text className="fw-bold">2</Card.Text>
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
              <Card.Title>Pacientes</Card.Title>
              <Card.Text className="fw-bold">6</Card.Text>
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
              <Card.Text className="fw-bold">6</Card.Text>
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
            <tr>
              <td>Dr. Juan Pérez</td>
              <td>Luna</td>
              <td>Vacunación</td>
              <td>
                5 Agosto 2023 <span>10:00 AM</span>
              </td>
            </tr>
            <tr>
              <td>Dra. Ana González</td>
              <td>Toby</td>
              <td>Revisión anual</td>
              <td>
                5 Agosto 2023 <span>11:00 AM</span>
              </td>
            </tr>
            <tr>
              <td>Dr. Juan Pérez</td>
              <td>Milo</td>
              <td>Desparasitación</td>
              <td>
                5 Agosto 2023 <span>12:00 PM</span>
              </td>
            </tr>
            <tr>
              <td>Dra. Ana González</td>
              <td>Bruno</td>
              <td>Corte de uñas</td>
              <td>
                5 Agosto 2023 <span>01:00 PM</span>
              </td>
            </tr>
            <tr>
              <td>Dr. Juan Pérez</td>
              <td>Mia</td>
              <td>Consulta por alergias</td>
              <td>
                6 Agosto 2023 <span>10:00 AM</span>
              </td>
            </tr>
            <tr>
              <td>Dra. Ana González</td>
              <td>Sasha</td>
              <td>Control de peso</td>
              <td>
                6 Agosto 2023 <span>11:00 AM</span>
              </td>
            </tr>
          </tbody>
        </Table>
        <hr />
      </section>
    </section>
  );
};

export default AdminPrincipal;
