import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import "../../css/login.css";
import { iniciarSesion } from "../helpers/queries";
import Swal from "sweetalert2";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Login = ({ setUsuarioLogueado }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navegacion = useNavigate();

  const onSubmit = (usuario) => {
    iniciarSesion(usuario).then((respuesta) => {
      if (respuesta && respuesta.status === 200) {
        localStorage.setItem("usuario", JSON.stringify(respuesta));
        setUsuarioLogueado(respuesta);
        reset();
        navegacion("/administrador");
        Swal.fire({
          title: "¡Bienvenido!",
          text: "Has iniciado sesión correctamente.",
          icon: "success",
          iconColor: "#a75ef0a4",
          background: "#062e32",
          color: "#41e9a6",
          confirmButtonColor: "#41e9a6",
        });
        reset();
      } else {
        Swal.fire({
          title: "¡Error!",
          text: "El email o password son incorrectos",
          icon: "error",
          iconColor: "#a75ef0a4",
          background: "#062e32",
          color: "#41e9a6",
          confirmButtonColor: "#41e9a6",
        });
      }
    });
  };

  return (
    <section className="container-fluid contenedor_login py-5 d-flex">
      <Container className="d-flex justify-content-center align-items-center">
        <aside className="col-12 col-md-6 rounded fondo_huellas mx-auto pt-3">
          <h1 className="text-center">Iniciar sesion</h1>
          <hr />
          <Form onSubmit={handleSubmit(onSubmit)} className="p-3">
            <Form.Group className="mb-3">
              <Form.Label className="h5">Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa un email"
                {...register("email", {
                  required: "El email es un dato obligatorio",
                  pattern: {
                    value:
                      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=? ^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a -z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message:
                      "El email debe tener el siguiente formato mail@dominio.com",
                  },
                })}
              ></Form.Control>
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formPlaintextPassword" className="mb-3">
              <Form.Label className="h5">Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "El password es obligatorio",
                  pattern: {
                    value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                    message:
                      "El password debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. No puede tener otros símbolos.",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <div className="text-center">
              <Button className="boton_login" type="submit">
                Ingresar
              </Button>
            </div>
          </Form>
        </aside>
      </Container>
    </section>
  );
};

export default Login;
