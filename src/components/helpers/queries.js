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
export const obtenerVeterinarios = async () => {
  try {
    const respuesta = await fetch(API_VETERINARIOS);
    const listaTurnos = await respuesta.json();
    return listaTurnos;
  } catch (error) {
    console.log(error);
  }
};
export const obtenerPacientes = async () => {
  try {
    const respuesta = await fetch(API_PACIENTES);
    const listaTurnos = await respuesta.json();
    return listaTurnos;
  } catch (error) {
    console.log(error);
  }
};
