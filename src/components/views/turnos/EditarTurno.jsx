import { useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {
  editarTurno,
  obtenerTurnoPorId,
  obtenerTurnos,
} from "../../helpers/queries";
import Swal from "sweetalert2";

const EditarTurno = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  useEffect(() => {
    obtenerTurnoPorId(7).then((respuesta) => {
      if (respuesta) {
        setValue("veterinario", respuesta.veterinario);
        setValue("mascota", respuesta.mascota);
        setValue("detalle_cita", respuesta.detalle_cita);
        setValue("fecha", respuesta.fecha);
        setValue("horario", respuesta.horario);
      } else {
        Swal.fire({
          title: "Oops! Lo siento!",
          text: "No se pudo obtener los datos del turno seleccionado. Intente nuevamente más tarde.",
          icon: "error",
          iconColor: "#a75ef0a4",
          background: "#062e32",
          color: "#41e9a6",
          confirmButtonColor: "#41e9a6",
        });
      }
    });
  }, []);

  const onSubmit = (turnoEditado) => {
    editarTurno(turnoEditado, 7).then((respuesta) => {
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
      }
    });
  };

  return (
    <section className="container my-3 py-3 card shadow">
      <h1 className="mb-0 text-center">Editar Turno</h1>
      <hr />
      <Container className="row justify-content-center align-items-center px-0 mx-0 fs-5">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="inputVeterinario">
            <Form.Label>Veterinario*</Form.Label>
            <Form.Select
              aria-label="Select veterinario"
              {...register("veterinario", {
                required:
                  "Debes elegir el veterinario. Este campo es obligatorio.",
              })}
            >
              <option value="">Elegir veterinario</option>
              <option value="Dr. Juan Pérez">Dr. Juan Pérez</option>
              <option value="Dra. Ana González">Dra. Ana González</option>
            </Form.Select>
            <Form.Text className="text-danger">
              {errors.veterinario?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputMascota">
            <Form.Label>Mascota*</Form.Label>
            <Form.Control
              type="text"
              disabled
              {...register("mascota", {
                required:
                  "Debes ingresar el nombre de la mascota. Este campo es obligatorio.",
                minLength: {
                  value: 3,
                  message: "Debes ingresar 3 caracteres como mínimo",
                },
                maxLength: {
                  value: 20,
                  message: "Debes ingresar 20 caracteres como máximo",
                },
                pattern: {
                  value: /^(?!\\s*$)[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/,
                  message:
                    "El nombre de la mascota no debe contener números, y/o simbolos.",
                },
                validate: (value) =>
                  value.trim() !== "" ||
                  "No puedes ingresar solo espacios en blanco.",
              })}
            />
            <Form.Text className="text-danger">
              {errors.mascota?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputDetalle">
            <Form.Label>Detalle de Cita*</Form.Label>
            <Form.Control
              type="text"
              {...register("detalle_cita", {
                required:
                  "Debes ingresar el detalle de la cita. Este campo es obligatorio.",
                minLength: {
                  value: 3,
                  message: "Debes ingresar 3 caracteres como mínimo",
                },
                maxLength: {
                  value: 20,
                  message: "Debes ingresar 20 caracteres como máximo",
                },
                pattern: {
                  value: /^(?!\\s*$)[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/,
                  message:
                    "El detalle de la cita no debe contener números, y/o simbolos.",
                },
                validate: (value) =>
                  value.trim() !== "" ||
                  "No puedes ingresar solo espacios en blanco.",
              })}
            />
            <Form.Text className="text-danger">
              {errors.detalle_cita?.message}
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
              <option value="09:00 AM">09:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 AM">12:00 AM</option>
              <option value="17:00 PM">17:00 PM</option>
              <option value="18:00 PM">18:00 PM</option>
              <option value="19:00 PM">19:00 PM</option>
              <option value="20:00 PM">20:00 PM</option>
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
              Editar turno
            </Button>
          </div>
        </Form>
      </Container>
    </section>
  );
};

export default EditarTurno;
