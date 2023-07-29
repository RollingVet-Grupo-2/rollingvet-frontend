import { Button, Col, Form, Row, Table } from "react-bootstrap";
import paciente from "../../assets/img/administrador/good-doggy.svg";
import "../../css/AdminPacientes.css";
import { useState, useEffect } from "react";
import { obtenerPacientes } from "../helpers/queries";
import ItemPaciente from "./pacientes/ItemPaciente";
import Swal from "sweetalert2";

const AdminPacientes = () => {
  const [pacientes, setPacientes] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const buscarPacientes = (e) => {
    setBusqueda(e.target.value);
  };

  const resultados = !busqueda
    ? pacientes
    : pacientes.filter((paciente) =>
        paciente.mascotas.some((mascota) =>
          mascota.nombre.toLowerCase().includes(busqueda.toLowerCase())
        )
      ) || (
        <tr>
          <td className="lead" colSpan={6}>
            No existen mascotas con el nombre ingresado.
          </td>
        </tr>
      );

  const mostrarPacientes = () => {
    if (pacientes.length === 0) {
      return (
        <tr>
          <td className="lead" colSpan={6}>
            No hay pacientes registrados.
          </td>
        </tr>
      );
    }

    if (resultados.length === 0) {
      return (
        <tr>
          <td className="lead" colSpan={6}>
            No se encontraron coincidencias.
          </td>
        </tr>
      );
    }

    return resultados.map((paciente) => (
      <ItemPaciente
        key={paciente.id}
        paciente={paciente}
        setPacientes={setPacientes}
      />
    ));
  };

  useEffect(() => {
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
  }, []);

  return (
    <section className="container py-3 text-center">
      <section className="mb-3 mb-md-0">
        <Row className="row-cols-1 row-cols-md-2 justify-content-center align-items-center">
          <Col className="mb-3 mb-md-0">
            <h1>Administrar Pacientes</h1>
            <Button variant="success" size="lg">
              Agregar paciente
            </Button>
          </Col>
          <Col style={{ height: "10rem" }}>
            <img src={paciente} alt="Paciente" className="img-fluid h-100" />
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
            <Form.Label className="h3">Buscar Pacientes</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa el nombre de la mascota"
              value={busqueda}
              onChange={buscarPacientes}
            />
          </Form.Group>
        </Form>
        <h2>Lista de Pacientes</h2>
        <Row className="justify-content-center align-items-center">
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
                <th>Dueño</th>
                <th>Mascotas</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>{mostrarPacientes()}</tbody>
          </Table>
        </Row>
      </section>
    </section>
  );
};

export default AdminPacientes;
