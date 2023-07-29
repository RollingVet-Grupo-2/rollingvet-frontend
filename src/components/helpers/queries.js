const API_PACIENTES = import.meta.env.VITE_API_PACIENTES;

export const crearPaciente = async (paciente) => {
  try {
    const respuesta = await fetch(API_PACIENTES, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paciente),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerPacientes = async () => {
  try {
    const respuesta = await fetch(API_PACIENTES);
    const listaPacientes = await respuesta.json();
    return listaPacientes;
  } catch (error) {
    console.log(error);
  }
};

export const validarEmailExistente = async (email) => {
  try {
    const respuesta = await fetch(API_PACIENTES);
    const listaPacientes = await respuesta.json();
    const emailExistente = listaPacientes.some(
      (paciente) => paciente.email === email
    );
    return emailExistente;
  } catch (error) {
    console.log(error);
  }
};
