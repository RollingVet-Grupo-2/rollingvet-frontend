import { Button, Col, Row, Table } from "react-bootstrap";
import paciente from "../../assets/img/administrador/good-doggy.svg";
import "../../css/AdminPacientes.css";
import { useState, useEffect } from "react";
import { obtenerPacientes } from "../helpers/queries";
import ItemPaciente from "./pacientes/ItemPaciente";

const AdminPacientes = () => {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    obtenerPacientes().then((respuesta) => {
      if (respuesta) {
        console.log(respuesta);
        setPacientes(respuesta);
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
        <h2>Lista de Pacientes</h2>
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
              <th>Email</th>
              <th>Teléfono</th>
              <th>Dirección</th>
              <th>Mascotas</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {pacientes.map((paciente) => (
              <ItemPaciente
                key={paciente.id}
                paciente={paciente}
                setPacientes={setPacientes}
              />
            ))}
          </tbody>
        </Table>
      </section>
    </section>
  );
};

export default AdminPacientes;
