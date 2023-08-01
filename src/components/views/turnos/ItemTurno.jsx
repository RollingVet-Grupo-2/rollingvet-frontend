import { Button } from "react-bootstrap";
import {
  borrarTurno,
  obtenerTurnoPorId,
  obtenerTurnos,
} from "../../helpers/queries";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ItemTurno = ({ turno, setTurnos }) => {
  const handleDelete = () => {
    Swal.fire({
      title: "¿Estas seguro de borrar el turno?",
      text: "El siguiente cambio no podra ser revertido",
      icon: "warning",
      iconColor: "a75ef0a4",
      showCancelButton: true,
      confirmButtonColor: "#a75ef0a4",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Si, estoy seguro!",
      cancelButtonText: "Cancelar",
      background: "#062e32",
      color: "#41e9a6",
    }).then((result) => {
      if (result.isConfirmed) {
        borrarTurno(turno._id).then((respuesta) => {
          if (respuesta.status === 200) {
            obtenerTurnos().then((respuesta) => {
              if (respuesta) {
                setTurnos(respuesta);
              } else {
                Swal.fire({
                  title: "Oops! Lo siento!",
                  text: "El turno no pudo ser eliminado. Intente nuevamente más tarde.",
                  icon: "error",
                  iconColor: "#a75ef0a4",
                  background: "#062e32",
                  color: "#41e9a6",
                  confirmButtonColor: "#a75ef0a4",
                });
              }
            });
            Swal.fire({
              title: "¡Turno eliminado!",
              text: "El turno fue eliminado con exito.",
              icon: "success",
              iconColor: "#a75ef0a4",
              background: "#062e32",
              color: "#41e9a6",
              confirmButtonColor: "#a75ef0a4",
            });
          } else {
            Swal.fire({
              title: "Oops! Lo siento!",
              text: "El turno no pudo ser eliminado. Intente nuevamente más tarde.",
              icon: "error",
              iconColor: "#a75ef0a4",
              background: "#062e32",
              color: "#41e9a6",
              confirmButtonColor: "#a75ef0a4",
            });
          }
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: "¡Operación cancelada!",
          text: "El turno no fue eliminado.",
          icon: "error",
          iconColor: "#a75ef0a4",
          background: "#062e32",
          color: "#41e9a6",
          confirmButtonColor: "#a75ef0a4",
        });
      }
    });
  };

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
          <span> - {turno.horario}</span>
        </td>
        <td>
          <div className="d-flex gap-2 justify-content-center">
            <Link
              className="btn btn-warning btn btn-primary"
              to={`/administrador/editar-turno/${turno._id}`}
            >
              <i className="bi bi-pencil-square"></i>
            </Link>
            <Button className="btn btn-danger" onClick={handleDelete}>
              <i className="bi bi-trash"></i>
            </Button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ItemTurno;
