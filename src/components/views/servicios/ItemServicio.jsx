import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemServicio = ({ servicio }) => {
  return (
    <tr>
      <td>{servicio.nombre}</td>
      <td>{servicio.veterinario}</td>
      <td><img src={servicio.img} alt={servicio.nombre} className="img-thumbnail rounded-4" style={{ maxWidth: "5rem" }}/></td>
      <td>$ {servicio.precio}</td>
      <td className="text-truncate" style={{ maxWidth: "16rem" }}>{servicio.descripcion}</td>
      <td>
        <div className="d-flex gap-2 justify-content-center">
          <Link
            role="button"
            to={`/administrador/editar-servicio/${servicio._id}`}
            className="btn btn-warning btn btn-primary">
            <i className="bi bi-pencil-square"></i>
          </Link>
          <Button type="button" className="btn btn-danger">
            <i className="bi bi-trash"></i>
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default ItemServicio;
