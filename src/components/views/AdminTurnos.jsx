import { Button, Table } from "react-bootstrap";
import "../../css/AdminTurnos.css";
const AdminTurnos = () => {
  return (
    <section className="container py-3 text-center">
      <h1>Lista de Turnos</h1>
      <Button variant="dark" size="lg">
        Agregar turno
      </Button>
      <section className="py-3">
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
            <tr>
              <td>Dr. Juan Pérez</td>
              <td>Luna</td>
              <td>Vacunación</td>
              <td>
                5 Agosto 2023 <span>10:00 AM</span>
              </td>
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
              <td>Dra. Ana González</td>
              <td>Toby</td>
              <td>Revisión anual</td>
              <td>
                5 Agosto 2023 <span>11:00 AM</span>
              </td>
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
              <td>Dr. Juan Pérez</td>
              <td>Milo</td>
              <td>Desparasitación</td>
              <td>
                5 Agosto 2023 <span>12:00 PM</span>
              </td>
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
              <td>Dra. Ana González</td>
              <td>Bruno</td>
              <td>Corte de uñas</td>
              <td>
                5 Agosto 2023 <span>01:00 PM</span>
              </td>
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
              <td>Dr. Juan Pérez</td>
              <td>Mia</td>
              <td>Consulta por alergias</td>
              <td>
                6 Agosto 2023 <span>10:00 AM</span>
              </td>
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
              <td>Dra. Ana González</td>
              <td>Sasha</td>
              <td>Control de peso</td>
              <td>
                6 Agosto 2023 <span>11:00 AM</span>
              </td>
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

export default AdminTurnos;
