import { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const CrearServicio = () => {
  const [veterinarios, setVeterinarios] = useState([
    {
      id: 1,
      nombre: "Dr. Juan Pérez",
    },
    {
      id: 2,
      nombre: "Dr. Ana Martinez",
    },
  ]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (servicio) => {
    console.log(servicio);
    Swal.fire({
      icon: "success",
      title: "Servicio creado",
      text: "El servicio se creó con éxtito.",
    });
    reset();
  };
  return (
    <Container className="my-5">
      <h1 className="display-3">Creador de Servicios</h1>
      <p className="lead">Desde aqui puede crear un nuevo servicio.</p>
      <Container className="my-3 py-3 border border-3 rounded-4 border-dark shadow">
        <Form onSubmit={handleSubmit(onSubmit)} className="p-2 p-md-4">
        <h2 className="h2 pb-3">Nuevo Servicio</h2>
        <hr className="text-dark"/>
          <Form.Group className="mb-3" controlId="formNombreServicio">
            <Form.Label className="fw-bold fs-5">Nombre del Servicio*</Form.Label>
            <Form.Control
              className="bg-primary-subtle bg-opacity-25"
              type="text"
              placeholder="Ingresa el nombre del servicio"
              {...register("nombre_servicio", {
                required: "El nombre del servicio es obligatorio",
                maxLength: {
                  value: 30,
                  message: "El nombre del servicio debe tener 30 caractéres como máximo.",
                },
                minLength: {
                  value: 3,
                  message: "El nombre del servicio debe tener 3 caractéres como mínimo.",
                },
                validate: (value) => value.trim() !== "" || "No puedes ingresar solo espacios en blanco.",
              })}
              isInvalid={errors.nombre_servicio}
            />
            <Form.Control.Feedback type="invalid">{errors.nombre_servicio?.message}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formVeterinarioServicio">
            <Form.Label className="fw-bold fs-5">Veterinario*</Form.Label>
            <Form.Select
              className="bg-primary-subtle bg-opacity-25"
              aria-label="Select veterinario"
              {...register("veterinario_servicio", {
                required: "Debes elegir el veterinario. Este campo es obligatorio.",
              })}
              isInvalid={errors.veterinario_servicio}>
              <option value="">Elegir veterinario</option>
              {veterinarios.map((veterinario) => (
                <option key={veterinario._id} value={veterinario.nombre}>
                  {veterinario.nombre}
                </option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.veterinario_servicio?.message}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPrecioServicio">
            <Form.Label className="fw-bold fs-5">Precio del Servicio*</Form.Label>
            <Form.Control
              className="bg-primary-subtle bg-opacity-25"
              type="number"
              placeholder="Ingresa el precio del servicio"
              {...register("precio_servicio", {
                required: "El precio del servicio es obligatorio",
                max: {
                  value: 9999999,
                  message: "El precio del servicio máximo es de $9.999.999.",
                },
                min: {
                  value: 0,
                  message: "El precio del servicio mínimo es de $0.",
                },
                validate: (value) => value.trim() !== "" || "No puedes ingresar solo espacios en blanco.",
              })}
              isInvalid={errors.precio_servicio}
            />
            <Form.Control.Feedback type="invalid">{errors.precio_servicio?.message}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formImgServicio">
          <Form.Label className="fw-bold fs-5">Imagen URL*</Form.Label>
          <Form.Control
          className="bg-primary-subtle bg-opacity-25"
            type="text"
            placeholder="Ej: https://images.pexels.com/photos/485294/pexels-photo-485294.jpeg"
            {...register("img_servicio", {
              required: "La URL de la imagen del servicio es obligatoria",
              pattern: {
                value: /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|png|gif)$/,
                message: "Ingrese un URL válido con imágen (extension .jpg, .png o .gif)",
              },
              validate: (value) => value.trim() !== "" || "No puedes ingresar solo espacios en blanco.",
            })}
            isInvalid={errors.img_servicio}
          />
          <Form.Control.Feedback type="invalid">{errors.img_servicio?.message}</Form.Control.Feedback>
        </Form.Group>
          <Form.Group className="mb-3" controlId="formDescripcionServicio">
            <Form.Label className="fw-bold fs-5">Descripción*</Form.Label>
            <Form.Control
              className="bg-primary-subtle bg-opacity-25"
              as="textarea"
              rows={3}
              placeholder="Ingresa una descripción para tu servicio"
              {...register("descripcion_servicio", {
                required: "La descripción del servicio es obligatoria.",
                maxLength: {
                  value: 500,
                  message: "La descripción del servicio debe tener 500 caractéres como máximo.",
                },
                minLength: {
                  value: 10,
                  message: "La descripción del servicio debe tener 10 caractéres como mínimo.",
                },
                validate: (value) => value.trim() !== "" || "No puedes ingresar solo espacios en blanco.",
              })}
              isInvalid={errors.descripcion_servicio}
            />
            <Form.Control.Feedback type="invalid">{errors.descripcion_servicio?.message}</Form.Control.Feedback>
          </Form.Group>
          <Button type="submit" variant="primary" className="w-100">
            Crear Servicio
          </Button>
        </Form>
      </Container>
    </Container>
  );
};

export default CrearServicio;
