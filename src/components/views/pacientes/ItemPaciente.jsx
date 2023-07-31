import Swal from "sweetalert2";
import { eliminarPaciente, obtenerPacientes } from "../../helpers/queries";
import ItemMascotaModal from "./ItemMascotaModal";
import ItemDuenioModal from "./ItemDuenioModal";

const ItemPaciente = ({ paciente, setPacientes }) => {
  const handleDelete = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success ms-lg-2",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "¿Estas seguro?",
        text: "¡No podrás revertir este cambio!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "¡Si, borrar paciente!",
        cancelButtonText: "No, cancelar!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          eliminarPaciente(paciente.id).then((respuesta) => {
            if (respuesta.status === 200) {
              obtenerPacientes().then((respuesta) => {
                if (respuesta) {
                  setPacientes(respuesta);
                } else {
                  Swal.fire({
                    title: "Oops! Lo siento!",
                    text: "Intente realizar esta operación en otro momento.",
                    icon: "error",
                  });
                }
              });
              Swal.fire({
                title: "¡Paciente eliminado!",
                text: "¡El paciente fue eliminado!",
                icon: "success",
              });
            } else {
              Swal.fire({
                title: "Oops! Lo siento!",
                text: "El paciente no pudo ser eliminado.",
                icon: "error",
              });
            }
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            "¡Operación cancelada!",
            "El paciente no fue eliminado",
            "error"
          );
        }
      });
  };
  return (
    <tr>
      {/* <td>{paciente.nombre}</td>
      <td>{paciente.email}</td>
      <td>{paciente.telefono}</td>
      <td>{paciente.direccion}</td> */}

      <td>{<ItemDuenioModal key={paciente.id} paciente={paciente} />}</td>
      <td>
        {paciente.mascotas.map((mascota, index) => (
          <ItemMascotaModal key={index} mascota={mascota} />
        ))}
      </td>
      <td>
        <div className="d-flex gap-2 justify-content-center">
          <a role="button" href="" className="btn btn-warning btn btn-primary">
            <i className="bi bi-pencil-square"></i>
          </a>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleDelete}
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ItemPaciente;
