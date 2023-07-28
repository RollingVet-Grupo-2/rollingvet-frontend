import ItemMascotaModal from "./ItemMascotaModal";

const ItemPaciente = ({ paciente, setPacientes }) => {
  return (
    <tr>
      <td>{paciente.nombre}</td>
      <td>{paciente.email}</td>
      <td>{paciente.telefono}</td>
      <td>{paciente.direccion}</td>
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
          <button type="button" className="btn btn-danger">
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ItemPaciente;
