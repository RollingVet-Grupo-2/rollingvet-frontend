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

export const obtenerPacientes = async () => {
  const respuesta = await fetch(API_PACIENTES);
  const listaPacientes = await respuesta.json();
  return listaPacientes;
};

export const validarEmailExistente = async (pacienteParaCrear) => {
  const respuesta = await fetch(API_PACIENTES);
  const listaPacientes = await respuesta.json();
  const emailExistente = listaPacientes.find(
    (paciente) => paciente.email === pacienteParaCrear.email
  );
  return emailExistente;
};
