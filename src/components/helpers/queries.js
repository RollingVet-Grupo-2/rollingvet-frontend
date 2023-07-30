const API_USUARIO = import.meta.env.VITE_API_USUARIO;
const API_TURNOS = import.meta.env.VITE_API_TURNOS;

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
};
