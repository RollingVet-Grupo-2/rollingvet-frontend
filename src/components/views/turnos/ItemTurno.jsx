import { Button } from "react-bootstrap";

const ItemTurno = ({ turno, setTurno }) => {
  return (
    <>
      <tr>
        <td>{turno.veterinario}</td>
        <td>{turno.mascota}</td>
        <td>{turno.detalle_cita}</td>
        <td className="text-capitalize">
          {new Date(turno.fecha).toLocaleDateString("es-ES", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          <span> - {turno.hora}</span>
        </td>
        <td>
          <div className="d-flex gap-2 justify-content-center">
            <a className="btn btn-warning btn btn-primary">
              <i className="bi bi-pencil-square"></i>
            </a>
            <Button className="btn btn-danger">
              <i className="bi bi-trash"></i>
            </Button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ItemTurno;
