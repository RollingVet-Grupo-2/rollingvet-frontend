import "../../css/pagContacto.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import perroFormulario from "../../assets/img/paginaContacto/perroForm.png";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const FormularioContacto = () => {
    const form = useRef();

    const enviarEmail = () => {
        const serviceId = "service_7tk1r0f",
            templateId = "template_yxbj6um",
            apikey = "VRpn3E_3VKSTYBneL";
        emailjs
            .sendForm(serviceId, templateId, form.current, apikey)
            .then((result) => {
                Swal.fire({
                    title: "¡Consulta enviada!",
                    text: " Su consulta fue enviada con exito. Pronto nos contactaremos.",
                    icon: "success",
                    iconColor: "#f4b693",
                    background: "#062e32",
                    color: "#41e9a6",
                    confirmButtonColor: "#f4b693",
                })
                reset();
            })
            .catch((error) => {
                Swal.fire({
                    title: "Oops! Lo siento!",
                    text: "No se pudo enviar su consulta. Intente nuevamente más tarde",
                    icon: "error",
                    iconColor: "#f4b693",
                    background: "#062e32",
                    color: "#41e9a6",
                    confirmButtonColor: "#f4b693",
                }),
                console.log(error)
            }
            );
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();


    const onSubmit = () => {
        enviarEmail();
    }


    return (
        <section className="pt-5 d-flex flex-column flex-md-row contenedor_formulario justify-content-around">
            <aside className="col-md-5 col-lg-6 text-center mb-5 mb-md-0">
                <img
                    className="perro_formulario col-6 pt-4"
                    src={perroFormulario}
                    alt="Imagen perro"
                />
                <div className="p-4 pb-0 py-xxl-5 bordeSuperior">
                    <h2>Nos contactamos con vos!</h2>
                    <p className="fs-3">
                        Completa el formulario y un agente de atencion al cliente se pondra
                        en contacto con vos para poder atender tu consulta.
                    </p>
                </div>
            </aside>
            <aside className="text-center col-12 col-md-5 col-lg-4 mb-5 rounded fondo_huellas">
                <h4 className="pt-2">Formulario de contacto</h4>
                <hr />
                <Row className='"mx-0 justify-content-md-center'>
                    <Col md={8}>
                        <Form
                            ref={form}
                            onSubmit={handleSubmit(onSubmit)}
                            className="text-center"
                        >
                            <Form.Group>
                                <Form.Label>
                                    <b>Nombre y apellido</b>
                                </Form.Label>
                                <Form.Control
                                    className="bg-secondary border-dark bg-opacity-25 border-bottom border-end mb-1 border-0"
                                    maxLength={31}
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
                                    maxLength={36}
                                    type="text"
                                    {...register("emailContacto", {
                                        maxLength: {
                                            value: 35,
                                            message: "El correo electronico debe tener como maximo 35 caracteres",
                                        },
                                        required:
                                            "Debes ingresar el correo electronico. Este campo es obligatorio.",
                                        pattern: {
                                            value:
                                                /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/,
                                            message:
                                                "El formato del correo electronico debe ser válido. Ej: mail@dominio.com",
                                        },
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
                                    maxLength={21}
                                    {...register("telefonoContacto", {
                                        maxLength: {
                                            value: 20,
                                            message: "El numero de telefono debe tener como maximo 20 dígitos",
                                        },
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
                                    maxLength={301}
                                    {...register("consultaContacto", {
                                        minLength: {
                                            value: 10,
                                            message:
                                                "La consulta debe contener como minimo 10 caracteres.",
                                        },
                                        maxLength: {
                                            value: 300,
                                            message:
                                                "La consulta debe contener como maximo 300 caracteres.",
                                        },
                                        required: "Este campo es obligatorio",
                                        validate: (value) =>
                                            value.trim() !== "" ||
                                            "No puedes ingresar solo espacios en blanco.",
                                    })}
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
