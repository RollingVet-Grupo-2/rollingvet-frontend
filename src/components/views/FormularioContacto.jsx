import "../../css/pagContacto.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import perroFormulario from "../../assets/img/paginaContacto/perroForm.png";
import { useForm } from "react-hook-form";

const FormularioContacto = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (consultaContacto) => {
        console.log(consultaContacto);
    };

    return (
        <section className="my-5 pt-5 d-flex flex-column-reverse flex-md-row contenedor_formulario justify-content-around">
            <aside className="col-md-5 col-lg-6 text-center">
                    <img
                    className="perro_formulario col-6 pt-4"
                    src={perroFormulario}
                    alt="Imagen perro"
                />
                <div className="pt-4 py-xxl-5 bordeSuperior">
                <h3>Nos contactamos con vos!</h3>
                <p>Completa el formulario y un agente de atencion al cliente se pondra en contacto con vos para poder atender tu consulta.</p>
                </div>
            </aside>
            <aside className="text-center col-12 col-md-5 col-lg-4 mb-5 rounded fondo_huellas">
                <h4 className="pt-2">Formulario de contacto</h4>
                <hr />
                <Row className='"mx-0 justify-content-md-center'>
                    <Col md={8}>
                        <Form onSubmit={handleSubmit(onSubmit)} className="text-center">
                            <Form.Group>
                                <Form.Label>
                                    <b>Nombre y apellido</b>
                                </Form.Label>
                                <Form.Control
                                    className="bg-secondary border-dark bg-opacity-25 border-bottom border-end mb-1 border-0"
                                    type="text"
                                    {...register("nombreContacto", {
                                        minLength: {
                                            value: 3,
                                            message: "El nombre debe tener como minimo 3 caracteres",
                                        },
                                        maxLength: {
                                            value: 30,
                                            message: "El nombre debe tener como maximo 30 caracteres",
                                        },
                                        required: "Este campo es obligatorio",
                                        pattern: {
                                            value: /^(?!\\s*$)[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/,
                                            message:
                                                "El nombre no debe contener números, y/o simbolos.",
                                        },
                                        validate: (value) =>
                                            value.trim() !== "" ||
                                            "No puedes ingresar solo espacios en blanco.",
                                    })}
                                ></Form.Control>
                                <Form.Text className="text-danger">
                                    {errors.nombreContacto?.message}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    <b>Email</b>
                                </Form.Label>
                                <Form.Control
                                    className="bg-secondary border-dark bg-opacity-25 border-bottom border-end border-0"
                                    type="text"
                                    {...register("emailContacto", {
                                        required:
                                            "Debes ingresar el correo electronico. Este campo es obligatorio.",
                                        pattern: {
                                            value:
                                            /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/,
                                            message:
                                                "El formato del correo electronico debe ser válido. Ej: mail@dominio.com",
                                        }
                                    })}
                                ></Form.Control>
                                <Form.Text className="text-danger">
                                    {errors.emailContacto?.message}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    <b>Telefono celular</b>
                                </Form.Label>
                                <Form.Control
                                    className="bg-secondary border-dark bg-opacity-25 border-bottom border-end border-0"
                                    type="text"
                                    {...register("telefonoContacto", {
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
                                    })}
                                ></Form.Control>
                                <Form.Text className="text-danger">
                                    {errors.telefonoContacto?.message}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    <b>Consulta/Mensaje</b>
                                </Form.Label>
                                <Form.Control
                                    className="bg-secondary border-dark bg-opacity-25 border-bottom border-end"
                                    as="textarea"
                                    type="text"
                                    {...register('consultaContacto',
                                        {
                                            minLength: {
                                                value: 10,
                                                message: 'La consulta debe contener como minimo 10 caracteres.'
                                            },
                                            maxLength: {
                                                value: 300,
                                                message: 'La consulta debe contener como maximo 300 caracteres.'
                                            },
                                            required: 'Este campo es obligatorio',
                                            validate: (value) =>
                                                value.trim() !== "" ||
                                                "No puedes ingresar solo espacios en blanco.",
                                        }
                                    )}
                                ></Form.Control>
                                <Form.Text className="text-danger">
                                    {errors.consultaContacto?.message}
                                </Form.Text>
                            </Form.Group>
                            <Button className="boton_formContacto" type="submit">
                                Enviar
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </aside>
        </section>
    );
};

export default FormularioContacto;
