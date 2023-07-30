const API_USUARIO = import.meta.env.VITE_API_USUARIO;
const API_TURNOS = import.meta.env.VITE_API_TURNOS;
const API_VETERINARIOS = import.meta.env.VITE_API_VETERINARIOS;
const API_PACIENTES = import.meta.env.VITE_API_PACIENTES;

export const obtenerTurnos = async () => {
  try {
    const respuesta = await fetch(API_TURNOS);
    const listaTurnos = await respuesta.json();
    return listaTurnos;
  } catch (error) {
    console.log(error);
  }
};

export const iniciarSesion = async (usuario) => {
  try {
    const respuesta = await fetch(API_USUARIO);
    const listausuario = await respuesta.json();
    const usuarioBuscado = listausuario.find(
      (itemUsuario) => itemUsuario.email === usuario.email
    );

    if (usuarioBuscado) {
      if (usuarioBuscado.password === usuario.password) {
        return usuarioBuscado;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}

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

export const obtenerVeterinarios = async () => {
  try {
    const respuesta = await fetch(API_VETERINARIOS);
    const listaVeterinarios = await respuesta.json();
    return listaVeterinarios;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerMascotas = async () => {
  try {
    const respuesta = await fetch(API_PACIENTES)
    const listaDeMascotas = await respuesta.json()
    return listaDeMascotas
  } catch (error) {
    console.log(error);
  }
};
