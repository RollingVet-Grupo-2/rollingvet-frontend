import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

const CrearPaciente = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (paciente) => {
    console.log(paciente);
  };

  return (
    <section className="container my-3 py-3 card shadow">
      <h1 className="mb-0 text-center">Crear Paciente</h1>
      <hr />
      <Container className="row justify-content-center align-items-center px-0 mx-0 fs-5">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="inputDueño">
            <Form.Label>Dueño*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Carlos Gómez"
              {...register("dueño", {
                required:
                  "Debes ingresar el nombre y apellido del dueño. Este campo es obligatorio.",
                minLength: {
                  value: 3,
                  message: "El nombre debe contener 3 caracteres como mínimo.",
                },
                maxLength: {
                  value: 30,
                  message: "El nombre debe contener 30 caracteres como máximo.",
                },
                pattern: {
                  value: /^(?!\\s*$)[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/,
                  message:
                    "El nombre del dueño no debe contener números, y/o simbolos.",
                },
                validate: (value) =>
                  value.trim() !== "" ||
                  "No puedes ingresar solo espacios en blanco.",
              })}
            />
            <Form.Text className="text-danger">
              {errors.dueño?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputEmail">
            <Form.Label>Email*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: carlos@email.com"
              {...register("email", {
                required:
                  "Debes ingresar el correo electronico. Este campo es obligatorio",
                pattern: {
                  value:
                    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=? ^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a -z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                  message:
                    "El formato del correo electronico debe ser válido. Ej: mail@dominio.com",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.email?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputTelefono">
            <Form.Label>Telefono*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: 3812334455"
              {...register("telefono", {
                required:
                  "Debes ingresar un número de telefono. Este campo es obligatorio.",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message:
                    "El formato del número de telefono debe ser válido. Ej: 3812334455",
                },
                minLength: {
                  value: 10,
                  message:
                    "El número de telefono debe contener unicamente 10 dígitos.",
                },
                maxLength: {
                  value: 10,
                  message:
                    "El número de telefono debe contener unicamente 10 dígitos.",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.telefono?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputDireccion">
            <Form.Label>Dirección*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Calle Principal 123"
              {...register("direccion", {
                required:
                  "Debes ingresar la dirección del domicilio. Este campo es obligatorio.",
                minLength: {
                  value: 3,
                  message:
                    "La dirección debe contener 3 caracteres como mínimo.",
                },
                maxLength: {
                  value: 30,
                  message:
                    "La dirección debe contener 30 caracteres como máximo.",
                },
                pattern: {
                  value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9\s]+$/,
                  message: "La dirección no debe contener simbolos",
                },
                validate: (value) =>
                  value.trim() !== "" ||
                  "No puedes ingresar solo espacios en blanco.",
              })}
            />
            <Form.Text className="text-danger">
              {errors.direccion?.message}
            </Form.Text>
          </Form.Group>
          <hr />
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
                  message:
                    "El nombre de la mascota debe contener 3 caracteres como mínimo.",
                },
                maxLength: {
                  value: 30,
                  message:
                    "El nombre de la mascota debe contener 30 caracteres como máximo.",
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
          <Form.Group className="mb-3" controlId="inputEdad">
            <Form.Label>Edad*</Form.Label>
            <Form.Select
              aria-label="Select edad"
              {...register("edad", {
                required:
                  "Debes indicar la edad de la mascota. Este campo es obligatorio.",
              })}
            >
              <option value="">Indicar edad de la mascota</option>
              <option value="Menor a 1 año">Menor a 1 año</option>
              <option value="1 año">1 año</option>
              <option value="2 años">2 años</option>
              <option value="3 años">3 años</option>
              <option value="4 años">4 años</option>
              <option value="5 años">5 años</option>
              <option value="6 años">6 años</option>
              <option value="7 años">7 años</option>
              <option value="8 años">8 años</option>
              <option value="9 años">9 años</option>
              <option value="10 años">10 años</option>
              <option value="Mayor a 10 años">Mayor a 10 años</option>
            </Form.Select>
            <Form.Text className="text-danger">
              {errors.edad?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputEspecie">
            <Form.Label>Especie*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Perro"
              {...register("especie", {
                required:
                  "Debes ingresar la especie de la mascota. Este campo es obligatorio.",
                minLength: {
                  value: 3,
                  message:
                    "La especie de la mascota debe contener 3 caracteres como mínimo.",
                },
                maxLength: {
                  value: 30,
                  message:
                    "La especie de la mascota debe contener 30 caracteres como máximo.",
                },
                pattern: {
                  value: /^(?!\\s*$)[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/,
                  message:
                    "La especie de la mascota no debe contener números, y/o simbolos.",
                },
                validate: (value) =>
                  value.trim() !== "" ||
                  "No puedes ingresar solo espacios en blanco.",
              })}
            />
            <Form.Text className="text-danger">
              {errors.especie?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputRaza">
            <Form.Label>Raza*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Labrador Retriever"
              {...register("raza", {
                required:
                  "Debes ingresar la raza de la mascota. Este campo es obligatorio.",
                minLength: {
                  value: 3,
                  message:
                    "La raza de la mascota debe contener 3 caracteres como mínimo.",
                },
                maxLength: {
                  value: 30,
                  message:
                    "La raza de la mascota debe contener 30 caracteres como máximo.",
                },
                pattern: {
                  value: /^(?!\\s*$)[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/,
                  message:
                    "La raza de la mascota no debe contener números, y/o simbolos.",
                },
                validate: (value) =>
                  value.trim() !== "" ||
                  "No puedes ingresar solo espacios en blanco.",
              })}
            />
            <Form.Text className="text-danger">
              {errors.raza?.message}
            </Form.Text>
          </Form.Group>
          <div className="text-center">
            <Button
              variant="success"
              size="lg"
              type="submit"
              className="fw-bold"
            >
              Crear paciente
            </Button>
          </div>
        </Form>
      </Container>
    </section>
  );
};

export default CrearPaciente;
