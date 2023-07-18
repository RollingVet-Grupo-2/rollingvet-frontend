import { Form, Button, Container } from "react-bootstrap";

const CrearTurno = () => {
  return (
    <section className="container my-3 py-3 card shadow">
      <h1 className="mb-0 text-center">Crear Turno</h1>
      <hr />
      <Container className="row justify-content-center align-items-center px-0 mx-0 fs-5">
        <Form className="">
          <Form.Group className="mb-3" controlId="inputVeterinario">
            <Form.Label>Veterinario*</Form.Label>
            <Form.Select aria-label="Select veterinario">
              <option value="">Elegir veterinario</option>
              <option value="Dr. Juan Pérez">Dr. Juan Pérez</option>
              <option value="Dra. Ana González">Dra. Ana González</option>
            </Form.Select>
            <Form.Text className="text-danger">
              Este campo es obligatorio.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputMascota">
            <Form.Label>Mascota*</Form.Label>
            <Form.Control type="text" placeholder="Ej: Luna" />
            <Form.Text className="text-danger">
              Este campo es obligatorio.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputDetalle">
            <Form.Label>Detalle de Cita*</Form.Label>
            <Form.Control type="text" placeholder="Ej: Vacunación" />
            <Form.Text className="text-danger">
              Este campo es obligatorio.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="inputFecha">
            <Form.Label>Fecha*</Form.Label>
            <Form.Control
              type="date"
              min="2023-08-03"
              max="2023-12-31"
              placeholder="Ej: Calle Principal 123"
            />
            <Form.Text className="text-danger">
              Este campo es obligatorio.
            </Form.Text>
          </Form.Group>
          <hr />
          <Form.Group className="mb-3" controlId="inputHora">
            <Form.Label>Hora*</Form.Label>
            <Form.Select aria-label="Select horario">
              <option value="">Elegir horario</option>
              <option value="09:00 AM">09:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 AM">12:00 AM</option>
              <option value="17:00 PM">17:00 PM</option>
              <option value="18:00 PM">18:00 PM</option>
              <option value="19:00 PM">19:00 PM</option>
              <option value="20:00 PM">20:00 PM</option>
            </Form.Select>
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
              Crear turno
            </Button>
          </div>
        </Form>
      </Container>
    </section>
  );
};

export default CrearTurno;
