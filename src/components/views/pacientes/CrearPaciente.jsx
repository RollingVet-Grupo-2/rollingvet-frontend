import { Form, Button, Container } from "react-bootstrap";

const CrearPaciente = () => {
  return (
    <section className="container my-3 py-3 card shadow">
      <h1 className="mb-0 text-center">Crear Paciente</h1>
      <hr />
      <Container className="row justify-content-center align-items-center px-0 mx-0 fs-5">
        <Form className="">
          <Form.Group className="mb-3" controlId="inputDueño">
            <Form.Label>Dueño*</Form.Label>
            <Form.Control type="text" placeholder="Ej: Carlos Gómez" />
            <Form.Text className="text-danger">
              Este campo es obligatorio.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputEmail">
            <Form.Label>Email*</Form.Label>
            <Form.Control type="text" placeholder="Ej: carlos@email.com" />
            <Form.Text className="text-danger">
              Este campo es obligatorio.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputTelefono">
            <Form.Label>Telefono*</Form.Label>
            <Form.Control type="text" placeholder="Ej: 1234567890" />
            <Form.Text className="text-danger">
              Este campo es obligatorio.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputDireccion">
            <Form.Label>Dirección*</Form.Label>
            <Form.Control type="text" placeholder="Ej: Calle Principal 123" />
            <Form.Text className="text-danger">
              Este campo es obligatorio.
            </Form.Text>
          </Form.Group>
          <hr />
          <Form.Group className="mb-3" controlId="inputMascota">
            <Form.Label>Mascota*</Form.Label>
            <Form.Control type="text" placeholder="Ej: Luna" />
            <Form.Text className="text-danger">
              Este campo es obligatorio.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputEdad">
            <Form.Label>Edad*</Form.Label>
            <Form.Control type="text" placeholder="Ej: 3 años" />
            <Form.Text className="text-danger">
              Este campo es obligatorio.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputEspecie">
            <Form.Label>Especie*</Form.Label>
            <Form.Control type="text" placeholder="Ej: Perro" />
            <Form.Text className="text-danger">
              Este campo es obligatorio.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputRaza">
            <Form.Label>Raza*</Form.Label>
            <Form.Control type="text" placeholder="Ej: Labrador Retriever" />
            <Form.Text className="text-danger">
              Este campo es obligatorio.
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
