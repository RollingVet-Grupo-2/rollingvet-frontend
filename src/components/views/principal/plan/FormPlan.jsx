import { Form, Button, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const FormPlan = ({onHide}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (solicitud) => {
    console.log(solicitud);
    Swal.fire({
        icon: 'success',
        title: 'Solicitud enviada',
        text: 'Gracias por enviar tu solicitud, nos contactaremos a la brevedad.',
      }).then(() => {
        onHide();
      });
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row className="g-0 g-md-3" xs={1} md={2}>
        <Col>
          <Form.Group className="mb-3" controlId="formNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu nombre"
              {...register("nombre", {
                required: "El nombre es obligatorio",
                maxLength: {
                  value: 30,
                  message: "El nombre debe tener 30 caractéres como máximo.",
                },
                minLength: {
                  value: 2,
                  message: "El nombre debe tener 2 caractéres como mínimo.",
                },
                pattern: {
                  value: /^[A-Za-záéíóúüÁÉÍÓÚÜñÑ]+$/,
                  message: "Ingresa un nombre válido.",
                },
                validate: (value) => value.trim() !== "" || "No puedes ingresar solo espacios en blanco.",
              })}
              isInvalid={errors.nombre}
            />
            <Form.Control.Feedback type="valid">Correcto!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">{errors.nombre?.message}</Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formApellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu apellido"
              {...register("apellido", {
                required: "El apellido es obligatorio.",
                maxLength: {
                  value: 30,
                  message: "El apellido debe tener 30 caractéres como máximo.",
                },
                minLength: {
                  value: 2,
                  message: "El apellido debe tener 2 caractéres como mínimo.",
                },
                pattern: {
                  value: /^[A-Za-záéíóúüÁÉÍÓÚÜñÑ]+$/,
                  message: "Ingresa un apellido válido.",
                },
                validate: (value) => value.trim() !== "" || "No puedes ingresar solo espacios en blanco.",
              })}
              isInvalid={errors.apellido}
            />
            <Form.Control.Feedback type="invalid">{errors.apellido?.message}</Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ej: usuario@dominio.com."
          {...register("email", {
            required: "El email es obligatorio.",
            pattern: {
              value:
                /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
              message: "El email debe tener el formato 'usuario@dominio.com'.",
            },
          })}
          isInvalid={errors.email}
        />
        <Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formTel">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Ej: 3817557733"
          {...register("tel", {
            required: "El teléfono es obligatorio.",
            pattern: {
              value: /^[0-9]+$/,
              message: "El teléfono solo puede contener números.",
            },
            minLength: {
              value: 10,
              message: "El teléfono debe tener al menos 10 dígitos.",
            },
            maxLength: {
              value: 10,
              message: "El teléfono debe tener como máximo 10 dígitos.",
            },
            validate: (value) => value.trim() !== "" || "No puedes ingresar solo espacios en blanco.",
          })}
          isInvalid={errors.tel}
        />
        <Form.Control.Feedback type="invalid">{errors.tel?.message}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formInfo">
        <Form.Label>Información a solicitar</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Puedes escribir tu solicitud aquí..."
          {...register("info", {
            required: "La solicitud es obligatoria.",
            maxLength: {
              value: 500,
              message: "La solicitud debe tener 500 caractéres como máximo.",
            },
            minLength: {
              value: 10,
              message: "La solicitud debe tener 10 caractéres como mínimo.",
            },
            validate: (value) => value.trim() !== "" || "No puedes ingresar solo espacios en blanco.",
          })}
          isInvalid={errors.info}
        />
        <Form.Control.Feedback type="invalid">{errors.info?.message}</Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit" className="w-100 rounded-4">
        Enviar
      </Button>
    </Form>
  );
};

export default FormPlan;
