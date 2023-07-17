import { Button, Col, Row, Table } from "react-bootstrap";
import paciente from "../../assets/img/administrador/good-doggy.svg";
import "../../css/AdminPacientes.css";

const AdminPacientes = () => {
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
              <th>Mascota</th>
              <th>Edad</th>
              <th>Especie</th>
              <th>Raza</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Carlos Gómez</td>
              <td>carlos@email.com</td>
              <td>123-456-7890</td>
              <td>Calle Principal 123</td>
              <td>Luna</td>
              <td>3 años</td>
              <td>Perro</td>
              <td>Labrador Retriever</td>
              <td>
                <div className="d-flex gap-2 justify-content-center">
                  <a
                    role="button"
                    href=""
                    className="btn btn-warning btn btn-primary"
                  >
                    <i className="bi bi-pencil-square"></i>
                  </a>
                  <button type="button" className="btn btn-danger">
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>María Rodríguez</td>
              <td>maria@email.com</td>
              <td>987-654-3210</td>
              <td>Avenida Central 456</td>
              <td>Toby</td>
              <td>5 años</td>
              <td>Gato</td>
              <td>Siamés</td>
              <td>
                <div className="d-flex gap-2 justify-content-center">
                  <a
                    role="button"
                    href=""
                    className="btn btn-warning btn btn-primary"
                  >
                    <i className="bi bi-pencil-square"></i>
                  </a>
                  <button type="button" className="btn btn-danger">
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Pedro Sánchez</td>
              <td>pedro@email.com</td>
              <td>456-789-0123</td>
              <td>Plaza Mayor 789</td>
              <td>Milo</td>
              <td>2 años</td>
              <td>Perro</td>
              <td>Chihuahua</td>
              <td>
                <div className="d-flex gap-2 justify-content-center">
                  <a
                    role="button"
                    href=""
                    className="btn btn-warning btn btn-primary"
                  >
                    <i className="bi bi-pencil-square"></i>
                  </a>
                  <button type="button" className="btn btn-danger">
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Lucía López</td>
              <td>lucia@email.com</td>
              <td>890-123-4567</td>
              <td>Carrera Principal 987</td>
              <td>Bruno</td>
              <td>4 años</td>
              <td>Perro</td>
              <td>Bulldog Francés</td>
              <td>
                <div className="d-flex gap-2 justify-content-center">
                  <a
                    role="button"
                    href=""
                    className="btn btn-warning btn btn-primary"
                  >
                    <i className="bi bi-pencil-square"></i>
                  </a>
                  <button type="button" className="btn btn-danger">
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Andrés Torres</td>
              <td>andres@email.com</td>
              <td>321-654-0987</td>
              <td>Camino Real 345</td>
              <td>Mia</td>
              <td>1 año</td>
              <td>Gato</td>
              <td>Persa</td>
              <td>
                <div className="d-flex gap-2 justify-content-center">
                  <a
                    role="button"
                    href=""
                    className="btn btn-warning btn btn-primary"
                  >
                    <i className="bi bi-pencil-square"></i>
                  </a>
                  <button type="button" className="btn btn-danger">
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>Isabel García</td>
              <td>isabel@email.com</td>
              <td>567-890-1234</td>
              <td>Carretera Central 567</td>
              <td>Sasha</td>
              <td>3 años</td>
              <td>Perro</td>
              <td>Golden Retriever</td>
              <td>
                <div className="d-flex gap-2 justify-content-center">
                  <a
                    role="button"
                    href=""
                    className="btn btn-warning btn btn-primary"
                  >
                    <i className="bi bi-pencil-square"></i>
                  </a>
                  <button type="button" className="btn btn-danger">
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </section>
    </section>
  );
};

export default AdminPacientes;
