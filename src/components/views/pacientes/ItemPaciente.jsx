import Swal from "sweetalert2";
import { eliminarPaciente, obtenerPacientes } from "../../helpers/queries";
import ItemMascotaModal from "./ItemMascotaModal";
import ItemDuenioModal from "./ItemDuenioModal";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemPaciente = ({ paciente, setPacientes }) => {
  const handleDelete = () => {
    Swal.fire({
      title: "¿Estas seguro de borrar el paciente?",
      text: "¡No podrás revertir este cambio!",
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
        eliminarPaciente(paciente._id).then((respuesta) => {
          if (respuesta.status === 200) {
            obtenerPacientes().then((respuesta) => {
              if (respuesta) {
                setPacientes(respuesta);
              } else {
                Swal.fire({
                  title: "Oops! Lo siento!",
                  text: "El paciente no pudo ser eliminado. Intente nuevamente más tarde.",
                  icon: "error",
                  iconColor: "#a75ef0a4",
                  background: "#062e32",
                  color: "#41e9a6",
                  confirmButtonColor: "#a75ef0a4",
                });
              }
            });
            Swal.fire({
              title: "¡Paciente eliminado!",
              text: "¡El paciente fue eliminado!",
              icon: "success",
              iconColor: "#a75ef0a4",
              background: "#062e32",
              color: "#41e9a6",
              confirmButtonColor: "#a75ef0a4",
            });
          } else {
            Swal.fire({
              title: "Oops! Lo siento!",
              text: "El paciente no pudo ser eliminado. Intente nuevamente más tarde.",
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
    <tr>
      <td>{<ItemDuenioModal key={paciente._id} paciente={paciente} />}</td>
      <td>{<ItemMascotaModal key={paciente._id} mascota={paciente} />}</td>
      <td>
        <div className="d-flex gap-2 justify-content-center">
          <Link
            role="button"
            to={`/administrador/editar-paciente/${paciente._id}`}
            className="btn btn-warning btn btn-primary"
          >
            <i className="bi bi-pencil-square"></i>
          </Link>
          <Button
            type="button"
            className="btn btn-danger"
            onClick={handleDelete}
          >
            <i className="bi bi-trash"></i>
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default ItemPaciente;
