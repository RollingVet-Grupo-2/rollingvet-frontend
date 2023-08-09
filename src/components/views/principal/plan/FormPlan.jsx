import { Form, Button, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const FormPlan = ({onHide}) => {
  const formularioSolicitud = useRef();
  const enviarSolicitudEmail = () =>{
    emailjs.sendForm(
      'service_x2wivyc', 
      'template_ik5sbvg', 
      formularioSolicitud.current, 't5qJO3W7CH17k_5Rk')
          .then((result) => {
                console.log(result.text);
                Swal.fire({
                  title: "¡Solicitud enviada!",
                  text: " Gracias por enviar tu solicitud, nos contactaremos a la brevedad.",
                  icon: "success",
                  iconColor: "#35d14c",
                  background: "#062e32",
                  color: "#41e9a6",
                  confirmButtonColor: "#f4b693",
              }).then(() => {
                  onHide();
                });
              reset();
            }, (error) => {
              Swal.fire({
                title: "Oops! Lo siento!",
                text: "No se pudo enviar su solicitud. Intente nuevamente más tarde",
                icon: "error",
                iconColor: "#fb3154",
                background: "#062e32",
                color: "#41e9a6",
                confirmButtonColor: "#f4b693",
            }),
                console.log(error);
            });
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = () => {
    enviarSolicitudEmail();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} ref={formularioSolicitud}>
      <Row className="g-0 g-md-3" xs={1} md={2}>
        <Col>
          <Form.Group className="mb-3" controlId="formNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control className="bg-primary-subtle bg-opacity-25"
              type="text"
              name="nombre_usuario"
              placeholder="Ingresa tu nombre"
              {...register("nombre_usuario", {
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
            <Form.Control className="bg-primary-subtle bg-opacity-25"
              type="text"
              name="apellido_usuario"
              placeholder="Ingresa tu apellido"
              {...register("apellido_usuario", {
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
        <Form.Control className="bg-primary-subtle bg-opacity-25"
          type="email"
          name="email_usuario"
          placeholder="Ej: usuario@dominio.com."
          {...register("email_usuario", {
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
        <Form.Control className="bg-primary-subtle bg-opacity-25"
          type="tel"
          name="tel_usuario"
          placeholder="Ej: 3817557733"
          {...register("tel_usuario", {
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
        <Form.Control className="bg-primary-subtle bg-opacity-25"
          as="textarea"
          rows={3}
          name="solicitud_usuario"
          placeholder="Puedes escribir tu solicitud aquí..."
          {...register("solicitud_usuario", {
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
      <Button  type="submit" variant="primary" className="w-100">
        Enviar
      </Button>
    </Form>
  );
};

export default FormPlan;
