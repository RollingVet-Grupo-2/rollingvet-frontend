import { useEffect, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {
  editarTurno,
  obtenerMascotas,
  obtenerTurnoPorId,
  obtenerTurnos,
  obtenerVeterinarios,
} from "../../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router";

const EditarTurno = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
    setValue,
    clearErrors,
    setError,
    getValues,
  } = useForm();

  const [mascota, setMascota] = useState({});
  const [veterinarios, setVeterinarios] = useState([]);
  const [servicioElegido, setServicioElegido] = useState("");
  const [veterinarioElegido, setVeterinarioElegido] = useState([]);
  const [horarioVeterinario, setHorarioVeterinario] = useState([]);

  useEffect(() => {
    fetchVeterinarios();
    setearValores();
  }, []);

  const { id } = useParams();
  const navegacion = useNavigate();

  const setearValores = () => {
    obtenerTurnoPorId(id).then((respuesta) => {
      if (respuesta) {
        setValue("paciente", respuesta.paciente._id);
        setValue("detalle_cita", respuesta.detalle_cita);
        setValue("veterinario", respuesta.veterinario);
        setValue("fecha", respuesta.fecha);
        setValue("horario", respuesta.horario);
        setMascota({
          _id: respuesta.paciente._id,
          nombreMascota: respuesta.paciente.nombreMascota,
          nombrePaciente: respuesta.paciente.nombre,
        });
        setServicioElegido([respuesta.detalle_cita]);
        setVeterinarioElegido([respuesta.veterinario]);
        setHorarioVeterinario([respuesta.horario]);
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
    if (isSubmitted) {
      if (veterinario !== "") {
        clearErrors("veterinario");
      } else {
        setError("veterinario", {
          type: "required",
          message: "Debes elegir el veterinario. Este campo es obligatorio.",
        });
      }
    }
  };

  const onSubmit = (turnoEditado) => {
    editarTurno(turnoEditado, id).then((respuesta) => {
      if (!respuesta || respuesta.status === 404) {
        Swal.fire({
          title: "Oops! Lo siento!",
          text: "No se pudo modificar el turno. Intente nuevamente más tarde",
          icon: "error",
          iconColor: "#a75ef0a4",
          background: "#062e32",
          color: "#41e9a6",
          confirmButtonColor: "#a75ef0a4",
        });
      }

      if (respuesta.status === 401) {
        Swal.fire({
          title: "Oops! Lo siento!",
          text: "No tienes autorizacion para modificar el turno. Intente iniciando sesión nuevamente.",
          icon: "error",
          iconColor: "#a75ef0a4",
          background: "#062e32",
          color: "#41e9a6",
          confirmButtonColor: "#a75ef0a4",
        });
      }

      if (respuesta.status === 200) {
        Swal.fire({
          title: "¡Turno editado!",
          text: "El turno se modificó con exito.",
          icon: "success",
          iconColor: "#a75ef0a4",
          background: "#062e32",
          color: "#41e9a6",
          confirmButtonColor: "#a75ef0a4",
        });
        navegacion("/administrador/turnos");
      }
    });
  };

  return (
    <section className="container my-3 py-3 seccionPrincipal d-flex justify-content-center align-items-center">
      <Container className="card justify-content-center align-items-center py-3 shadow">
        <h1 className="mb-0 text-center">Editar Turno</h1>
        <hr />
        <Container className="row justify-content-center align-items-center px-0 mx-0 fs-5">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="inputVeterinario">
              <Form.Label>Mascota*</Form.Label>
              <Form.Select
                aria-label="Select mascota"
                {...register("paciente", {
                  required:
                    "Debes elegir la mascota. Este campo es obligatorio.",
                })}
                value={mascota._id}
                disabled
              >
                <option value={mascota._id}>{mascota.nombreMascota}</option>
              </Form.Select>
              <Form.Text className="text-danger">
                {errors.paciente?.message}
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
                  <option
                    key={veterinario.id || veterinario}
                    value={veterinario.nombre || veterinario}
                  >
                    {veterinario.nombre || [veterinario]}
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
                  required:
                    "Debes elegir un horario. Este campo es obligatorio.",
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
                variant="primary"
                size="lg"
                type="submit"
                className="fw-bold"
              >
                Editar turno
              </Button>
            </div>
          </Form>
        </Container>
      </Container>
    </section>
  );
};

export default EditarTurno;
