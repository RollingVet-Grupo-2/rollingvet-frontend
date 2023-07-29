const TurnosAsignados = ({ turno }) => {
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
      </tr>
    </>
  );
};

export default TurnosAsignados;
