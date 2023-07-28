const API_PACIENTES = import.meta.env.VITE_API_PACIENTES;

export const crearPaciente = async (paciente) => {
  const respuesta = await fetch(API_PACIENTES, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(paciente),
  });
  return respuesta;
};
