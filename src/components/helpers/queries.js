const API_PACIENTES = import.meta.env.VITE_API_PACIENTES;
const API_USUARIO = import.meta.env.VITE_API_USUARIO;
const API_TURNOS = import.meta.env.VITE_API_TURNOS;
const API_VETERINARIOS = import.meta.env.VITE_API_VETERINARIOS;
const API_SERVICIOS = import.meta.env.VITE_API_SERVICIOS;

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

export const obtenerPacientePorId = async (id) => {
  try {
    const respuesta = await fetch(API_PACIENTES + "/" + id);
    const paciente = await respuesta.json();
    return paciente;
  } catch (error) {
    console.log(error);
  }
};

export const editarPaciente = async (paciente, id) => {
  try {
    const respuesta = await fetch(API_PACIENTES + "/" + id, {
      method: "PUT",
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

export const eliminarPaciente = async (id) => {
  try {
    const respuesta = await fetch(API_PACIENTES + "/" + id, {
      method: "DELETE",
    });
    return respuesta;
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

export const obtenerTurnos = async () => {
  try {
    const respuesta = await fetch(API_TURNOS);
    const listaTurnos = await respuesta.json();
    return listaTurnos;
  } catch (error) {
    console.log(error);
  }
};
export const obtenerVeterinarios = async () => {
  try {
    const respuesta = await fetch(API_VETERINARIOS);
    const listaTurnos = await respuesta.json();
    return listaTurnos;
  } catch (error) {
    console.log(error);
  }
};

export const iniciarSesion = async (usuario) => {
  try {
    const respuesta = await fetch(API_USUARIO, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario),
    });
    const datos = await respuesta.json();
    return { status: respuesta.status, nombreUsuario: datos.nombreUsuario };
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const obtenerTurnoPorId = async (id) => {
  try {
    const respuesta = await fetch(API_TURNOS + "/" + id);
    const turno = await respuesta.json();
    return turno;
  } catch (error) {
    console.log(error);
  }
};

export const crearTurno = async (turno) => {
  try {
    const respuesta = await fetch(API_TURNOS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(turno),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const borrarTurno = async (id) => {
  try {
    const respuesta = await fetch(API_TURNOS + "/" + id, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const editarTurno = async (turno, id) => {
  try {
    const respuesta = await fetch(API_TURNOS + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(turno),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerMascotas = async () => {
  try {
    const respuesta = await fetch(API_PACIENTES);
    const listaDeMascotas = await respuesta.json();
    return listaDeMascotas;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerServicios = async () => {
  try {
    const respuesta = await fetch(API_SERVICIOS);
    const listaDeServicios = await respuesta.json();
    return listaDeServicios;
  } catch (error) {
    console.log(error);
  }
};