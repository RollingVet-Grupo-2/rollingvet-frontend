import { Form, Button, Container } from "react-bootstrap";

const EditarPaciente = () => {
  return (
    <section className="container my-3 py-3 card shadow">
      <h1 className="mb-0 text-center">Editar Paciente</h1>
      <hr />
      <Container className="row justify-content-center align-items-center px-0 mx-0 fs-5">
        <Form className="">
          <Form.Group className="mb-3" controlId="inputDueño">
            <Form.Label>Dueño*</Form.Label>
            <Form.Control type="text" />
            <Form.Text className="text-danger">
              Este campo es obligatorio.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputEmail">
            <Form.Label>Email*</Form.Label>
            <Form.Control type="text" />
            <Form.Text className="text-danger">
              Este campo es obligatorio.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputTelefono">
            <Form.Label>Telefono*</Form.Label>
            <Form.Control type="text" />
            <Form.Text className="text-danger">
              Este campo es obligatorio.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputDireccion">
            <Form.Label>Dirección*</Form.Label>
            <Form.Control type="text" />
            <Form.Text className="text-danger">
              Este campo es obligatorio.
            </Form.Text>
          </Form.Group>
          <hr />
          <Form.Group className="mb-3" controlId="inputMascota">
            <Form.Label>Mascota*</Form.Label>
            <Form.Control type="text" />
            <Form.Text className="text-danger">
              Este campo es obligatorio.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputEdad">
            <Form.Label>Edad*</Form.Label>
            <Form.Control type="text" />
            <Form.Text className="text-danger">
              Este campo es obligatorio.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputEspecie">
            <Form.Label>Especie*</Form.Label>
            <Form.Control type="text" />
            <Form.Text className="text-danger">
              Este campo es obligatorio.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputRaza">
            <Form.Label>Raza*</Form.Label>
            <Form.Control type="text" />
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
              Editar paciente
            </Button>
          </div>
        </Form>
      </Container>
    </section>
  );
};

export default EditarPaciente;
