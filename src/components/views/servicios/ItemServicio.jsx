import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemServicio = ({ servicio }) => {
  return (
    <tr>
      <td>Consulta</td>
      <td>Dr. que ofrece el Servicio</td>
      <td>URL de la imágen del Servicio</td>
      <td>$ Precio</td>
      <td>Descripción del servicio</td>
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
