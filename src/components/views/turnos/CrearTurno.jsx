import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {
  crearTurno,
  obtenerMascotas,
  obtenerTurnos,
  obtenerVeterinarios,
} from "../../helpers/queries";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const CrearTurno = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
    reset,
    setError,
    clearErrors,
  } = useForm();

  const [mascotas, setMascotas] = useState([]);
  const [veterinarios, setVeterinarios] = useState([]);
  const [servicioElegido, setServicioElegido] = useState("");
  const [veterinarioElegido, setVeterinarioElegido] = useState([]);
  const [horarioVeterinario, setHorarioVeterinario] = useState([]);

  useEffect(() => {
    fetchMascotas();
    fetchVeterinarios();
  }, []);

  const fetchMascotas = () => {
    obtenerMascotas().then((respuesta) => {
      if (respuesta) {
        let arrayMascotas = respuesta.flatMap((paciente) =>
          paciente.mascotas.map((mascota) => mascota.nombre)
        );
        setMascotas(arrayMascotas);
      } else {
        Swal.fire({
          title: "Oops! Lo siento!",
          text: "No se pudo obtener las mascotas registradas. Intente nuevamente más tarde",
          icon: "error",
          iconColor: "#a75ef0a4",
          background: "#062e32",
          color: "#41e9a6",
          confirmButtonColor: "#a75ef0a4",
        });
      }
    });
  };

  const fetchVeterinarios = () => {
    obtenerVeterinarios().then((respuesta) => {
      if (respuesta) {
        setVeterinarios(respuesta);
      } else {
        Swal.fire({
          title: "Oops! Lo siento!",
          text: "No se pudo obtener información de veterinarios. Intente nuevamente más tarde",
          icon: "error",
          iconColor: "#a75ef0a4",
          background: "#062e32",
          color: "#41e9a6",
          confirmButtonColor: "#a75ef0a4",
        });
      }
    });
  };

  const manejarSelectDetalle = (e) => {
    let servicio = e.target.value;
    setServicioElegido(servicio);
    let veterinarioFiltrado = veterinarios.filter((veterinario) =>
      veterinario.servicios.includes(servicio)
    );
    setVeterinarioElegido(veterinarioFiltrado);
    setHorarioVeterinario([]);
    if (isSubmitted) {
      if (servicio !== "") {
        clearErrors("detalle_cita");
      } else {
        setError("detalle_cita", {
          type: "required",
          message:
            "Debes seleccionar el detalle de la cita. Este campo es obligatorio.",
        });
      }
    }
  };

  const manejarSelectVeterinario = (e) => {
    let veterinario = e.target.value;
    let veterinarioEncontrado = veterinarioElegido.find(
      (veterinario) => veterinario.nombre === e.target.value
    );
    if (veterinarioEncontrado) {
      setHorarioVeterinario(veterinarioEncontrado.horarios);
    }
    if (veterinario !== "") {
      clearErrors("veterinario");
    } else {
      setError("veterinario", {
        type: "required",
        message: "Debes elegir el veterinario. Este campo es obligatorio.",
      });
    }
  };

  const onSubmit = (turno) => {
    crearTurno(turno).then((respuesta) => {
      if (!respuesta) {
        Swal.fire({
          title: "Oops! Lo siento!",
          text: "El turno no pudo ser creado. Intente nuevamente más tarde",
          icon: "error",
          iconColor: "#a75ef0a4",
          background: "#062e32",
          color: "#41e9a6",
          confirmButtonColor: "#a75ef0a4",
        });
      }

      if (respuesta.status === 201) {
        Swal.fire({
          title: "¡Turno creado!",
          text: "El turno se creo con exito.",
          icon: "success",
          iconColor: "#a75ef0a4",
          background: "#062e32",
          color: "#41e9a6",
          confirmButtonColor: "#a75ef0a4",
        });
        reset();
      }
    });
  };

  const mostrarMascotas = () => {
    if (mascotas.length === 0) {
      return (
        <Form.Select
          aria-label="Select mascotas"
          {...register("mascota", {
            required: "Debes elegir una mascota. Este campo es obligatorio.",
          })}
        >
          <option value={""}>No hay mascotas registradas</option>
        </Form.Select>
      );
    }
    return (
      <Form.Select
        aria-label="Select mascotas"
        {...register("mascota", {
          required: "Debes elegir la mascota. Este campo es obligatorio.",
        })}
      >
        <option value={""}>Elegir mascota registrada</option>
        {mascotas.map((mascota, index) => (
          <option key={mascota + index} value={mascota}>
            {mascota}
          </option>
        ))}
      </Form.Select>
    );
  };
  return (
    <section className="container my-3 py-3 card shadow">
      <h1 className="mb-0 text-center">Crear Turno</h1>
      <hr />
      <Container className="row justify-content-center align-items-center px-0 mx-0 fs-5">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="inputVeterinario">
            <Form.Label>Mascota*</Form.Label>
            {mostrarMascotas()}
            <Form.Text className="text-danger">
              {errors.mascota?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputDetalle">
            <Form.Label>Detalle de Cita*</Form.Label>
            <Form.Select
              aria-label="Select detalle de cita"
              {...register("detalle_cita", {
                required:
                  "Debes seleccionar el detalle de la cita. Este campo es obligatorio.",
              })}
              onChange={manejarSelectDetalle}
            >
              <option value={""}>Elegir servicio</option>
              {veterinarios.map((veterinario) =>
                veterinario.servicios.map((servicio) => (
                  <option key={servicio} value={servicio}>
                    {servicio}
                  </option>
                ))
              )}
            </Form.Select>
            <Form.Text className="text-danger">
              {errors.detalle_cita?.message || ""}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputVeterinario">
            <Form.Label>Veterinario*</Form.Label>
            <Form.Select
              aria-label="Select veterinario"
              {...register("veterinario", {
                required:
                  "Debes elegir el veterinario. Este campo es obligatorio.",
              })}
              onChange={manejarSelectVeterinario}
            >
              <option value="">Elegir veterinario</option>
              {veterinarioElegido.map((veterinario) => (
                <option key={veterinario.id} value={veterinario.nombre}>
                  {veterinario.nombre}
                </option>
              ))}
            </Form.Select>
            <Form.Text className="text-danger">
              {errors.veterinario?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputFecha">
            <Form.Label>Fecha*</Form.Label>
            <Form.Control
              type="date"
              min="2023-08-03"
              max="2023-12-31"
              placeholder="Ej: Calle Principal 123"
              {...register("fecha", {
                required:
                  "Debes ingresar una fecha. Este campo es obligatorio.",
                min: {
                  value: "2023-08-03",
                  message:
                    "No puedes ingresar una fecha anterior al día 03/08/2023",
                },
                max: {
                  value: "2023-12-31",
                  message:
                    "No puedes ingresar una fecha posterior al día 31/12/2023",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.fecha?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputHora">
            <Form.Label>Hora*</Form.Label>
            <Form.Select
              aria-label="Select horario"
              {...register("horario", {
                required: "Debes elegir un horario. Este campo es obligatorio.",
              })}
            >
              <option value="">Elegir horario</option>
              {horarioVeterinario.map((horario) => (
                <option key={horario} value={horario}>
                  {horario}
                </option>
              ))}
            </Form.Select>
            <Form.Text className="text-danger">
              {errors.horario?.message}
            </Form.Text>
          </Form.Group>
          <div className="text-center">
            <Button
              variant="success"
              size="lg"
              type="submit"
              className="fw-bold"
            >
              Crear turno
            </Button>
          </div>
        </Form>
      </Container>
    </section>
  );
};

export default CrearTurno;
