import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { borrarServicio, obtenerServicios } from "../../helpers/queries";

const ItemServicio = ({ servicio, setServicios }) => {

    const handleDelete = () => {
      Swal.fire({
        title: "¿Estas seguro de borrar el servicio?",
        text: "El siguiente cambio no podra ser revertido",
        icon: "warning",
        iconColor: "#fed14e",
        showCancelButton: true,
        confirmButtonColor: "#6cd3a2",
        cancelButtonColor: "#fb3154",
        confirmButtonText: "¡Si, estoy seguro!",
        cancelButtonText: "Cancelar",
        background: "#062e32",
        color: "#41e9a6",
      }).then((result) => {
        if (result.isConfirmed) {
          borrarServicio(servicio.id).then((respuesta) => {
            if (respuesta.status === 200) {
              obtenerServicios().then((respuesta) => {
                if (respuesta) {
                  setServicios(respuesta);
                } else {
                  Swal.fire({
                    title: "Oops! Lo siento!",
                    text: "El servicio no pudo ser eliminado. Intente nuevamente más tarde.",
                    icon: "error",
                    iconColor: "#fb3154",
                    background: "#062e32",
                    color: "#41e9a6",
                    confirmButtonColor: "#6cd3a2",
                  });
                }
              });
              Swal.fire({
                title: "¡Servicio eliminado!",
                text: "El servicio fue eliminado con exito.",
                icon: "success",
                iconColor: "#35d14c",
                background: "#062e32",
                color: "#41e9a6",
                confirmButtonColor: "#6cd3a2",
              });
            } else {
              Swal.fire({
                title: "Oops! Lo siento!",
                text: "El servicio no pudo ser eliminado. Intente nuevamente más tarde.",
                icon: "error",
                iconColor: "#fb3154",
                background: "#062e32",
                color: "#41e9a6",
                confirmButtonColor: "#6cd3a2",
              });
            }
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire({
            title: "¡Operación cancelada!",
            text: "El servicio no fue eliminado.",
            icon: "error",
            iconColor: "#fb3154",
            background: "#062e32",
            color: "#41e9a6",
            confirmButtonColor: "#6cd3a2",
          });
        }
      });
    };
  return (
    <tr>
      <td>{servicio.nombre_servicio}</td>
      <td>{servicio.veterinario_servicio}</td>
      <td><img src={servicio.img_servicio} alt={servicio.nombre_servicio} className="img-thumbnail rounded-4" style={{ maxWidth: "5rem" }}/></td>
      <td>$ {servicio.precio_servicio}</td>
      <td className="text-truncate" style={{ maxWidth: "16rem" }}>{servicio.descripcion_servicio}</td>
      <td>
        <div className="d-flex gap-2 justify-content-center">
          <Link
            role="button"
            to={`/administrador/editar-servicio/${servicio.id}`}
            className="btn btn-warning btn btn-primary">
            <i className="bi bi-pencil-square"></i>
          </Link>
          <Button type="button" className="btn btn-danger" onClick={handleDelete}>
            <i className="bi bi-trash"></i>
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default ItemServicio;
