const TurnosAsignados = ({ turno }) => {
  return (
    <>
      <tr>
        <td>{turno.veterinario}</td>
        <td>{turno.paciente.nombreMascota}</td>
        <td>{turno.detalle_cita}</td>
        <td className="text-capitalize">
          {new Date(`${turno.fecha}T00:00:00`).toLocaleDateString("es-AR", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          <span> - {turno.horario}</span>
        </td>
      </tr>
    </>
  );
};

export default TurnosAsignados;
