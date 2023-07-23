import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

const CrearTurno = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (turno) => {
    console.log(turno);
  };

  return (
    <section className="container my-3 py-3 card shadow">
      <h1 className="mb-0 text-center">Crear Turno</h1>
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
              placeholder="Ej: Luna"
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
                  value: /^(?!\\s+$)[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]+$/,
                  message:
                    "El nombre de la mascota no debe contener números, simbolos y/o espacios en blanco.",
                },
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
              placeholder="Ej: Vacunación"
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
                  value: /^(?!\\s+$)[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]+$/,
                  message:
                    "El detalle de la cita no debe contener números, simbolos y/o espacios en blanco.",
                },
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
          <hr />
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
              Crear turno
            </Button>
          </div>
        </Form>
      </Container>
    </section>
  );
};

export default CrearTurno;
