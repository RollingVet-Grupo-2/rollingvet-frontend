import { useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {
  editarPaciente,
  obtenerPacientePorId,
  validarEmailExistente,
} from "../../helpers/queries";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router";

const EditarPaciente = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const { id } = useParams();
  const navegacion = useNavigate();

  const onSubmit = (paciente) => {
    editarPaciente(paciente, id).then((respuesta) => {
      if (respuesta.status === 404) {
        Swal.fire({
          title: "Oops! Lo siento!",
          text: "No se pudo editar el paciente. Intente nuevamente más tarde.",
          icon: "error",
          iconColor: "#a75ef0a4",
          background: "#062e32",
          color: "#41e9a6",
          confirmButtonColor: "#41e9a6",
        });
      }
      if (respuesta.status === 401) {
        Swal.fire({
          title: "Oops! Lo siento!",
          text: "No tienes autorizacion para editar paciente. Intente iniciando sesión nuevamente.",
          icon: "error",
          iconColor: "#a75ef0a4",
          background: "#062e32",
          color: "#41e9a6",
          confirmButtonColor: "#41e9a6",
        });
      }
      if (respuesta.status === 200) {
        Swal.fire({
          title: "¡Paciente modificado!",
          text: "¡El paciente fue modificado con exito!",
          icon: "success",
          iconColor: "#a75ef0a4",
          background: "#062e32",
          color: "#41e9a6",
          confirmButtonColor: "#41e9a6",
        });
        navegacion("/administrador/pacientes");
      }
    });
  };

  const setearValoresEnFormulario = (respuesta) => {
    setValue("nombre", respuesta.nombre);
    setValue("email", respuesta.email);
    setValue("telefono", respuesta.telefono);
    setValue("direccion", respuesta.direccion);
    setValue("nombreMascota", respuesta.nombreMascota);
    setValue("edadMascota", respuesta.edadMascota);
    setValue("especie", respuesta.especie);
    setValue("raza", respuesta.raza);
  };

  useEffect(() => {
    obtenerPacientePorId(id).then((respuesta) => {
      if (respuesta) {
        setearValoresEnFormulario(respuesta);
      } else {
        Swal.fire({
          title: "Oops! Lo siento!",
          text: "No se pudo obtener los datos del paciente. Intente nuevamente más tarde.",
          icon: "error",
          iconColor: "#a75ef0a4",
          background: "#062e32",
          color: "#41e9a6",
          confirmButtonColor: "#41e9a6",
        });
      }
    });
  }, []);
  return (
    <section className="container my-3 py-3 seccionPrincipal d-flex justify-content-center align-items-center">
      <Container className="card justify-content-center align-items-center py-3 shadow">
        <h1 className="mb-0 text-center">Editar Paciente</h1>
        <hr />
        <Container className="row justify-content-center align-items-center px-0 mx-0 fs-5">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="inputDueño">
              <Form.Label>Dueño*</Form.Label>
              <Form.Control
                type="text"
                maxLength={30}
                {...register("nombre", {
                  required:
                    "Debes ingresar el nombre y apellido del dueño. Este campo es obligatorio.",
                  minLength: {
                    value: 3,
                    message:
                      "El nombre debe contener 3 caracteres como mínimo.",
                  },
                  maxLength: {
                    value: 30,
                    message:
                      "El nombre debe contener 30 caracteres como máximo.",
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
                {errors.nombre?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputEmail">
              <Form.Label>Email*</Form.Label>
              <Form.Control
                type="text"
                maxLength={50}
                {...register("email", {
                  required:
                    "Debes ingresar el correo electronico. Este campo es obligatorio",
                  pattern: {
                    value:
                      /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/,
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
                maxLength={10}
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
                maxLength={50}
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
                maxLength={30}
                {...register("nombreMascota", {
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
                {errors.nombreMascota?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputEdad">
              <Form.Label>Edad*</Form.Label>
              <Form.Select
                aria-label="Select edad"
                {...register("edadMascota", {
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
                {errors.edadMascota?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputEspecie">
              <Form.Label>Especie*</Form.Label>
              <Form.Control
                type="text"
                maxLength={30}
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
                maxLength={30}
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
                variant="primary"
                size="lg"
                type="submit"
                className="fw-bold"
              >
                Editar paciente
              </Button>
            </div>
          </Form>
        </Container>
      </Container>
    </section>
  );
};

export default EditarPaciente;
