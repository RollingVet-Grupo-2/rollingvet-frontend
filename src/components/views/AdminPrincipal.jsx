import { Button, Card, Table } from "react-bootstrap";
import "../../css/AdminPrincipal.css";

const AdminPrincipal = () => {
  return (
    <section className="container text-center py-3">
      <h1>Bienvenido Administrador</h1>
      <section className="py-3">
        <Button variant="dark" size="lg" className="me-md-3 p-3">
          Administrar Pacientes
        </Button>
        <Button variant="dark" size="lg" className="p-3">
          Administrar Turnos
        </Button>
      </section>
      <section className="row justify-content-center align-items-center py-3">
        <Card border="dark" style={{ width: "18rem" }} className="mb-3 me-md-3">
          <Card.Body>
            <Card.Title>Version del Sistema</Card.Title>
            <Card.Text>N° 0.0.1</Card.Text>
          </Card.Body>
        </Card>

        <Card border="dark" style={{ width: "18rem" }} className="mb-3 me-md-3">
          <Card.Body>
            <Card.Title>Veterinarios</Card.Title>
            <Card.Text>2</Card.Text>
          </Card.Body>
        </Card>

        <Card border="dark" style={{ width: "18rem" }} className="mb-3">
          <Card.Body>
            <Card.Title>Turnos</Card.Title>
            <Card.Text>6</Card.Text>
          </Card.Body>
        </Card>
      </section>
      <section>
        <h2>Turnos Asignados</h2>
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
      </section>
    </section>
  );
};

export default AdminPrincipal;
