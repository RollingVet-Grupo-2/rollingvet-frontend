import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const FormPlan = () => {
    return (
            <Form>
                <Row className='g-0 g-md-3' xs={1} md={2}>
                    <Col>
                        <Form.Group className="mb-3" controlId="formNombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Ingresa tu Nombre" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formApellido">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control type="text" placeholder="Ingresa tu Apellido" />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3" controlId="Email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ej: usuario@dominio.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Email">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control type="number" placeholder="Ej: 3817557733" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formInfo">
                    <Form.Label>Información a solicitar</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Puedes escribir tu solicitud aquí..." />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 rounded-4">
                    Enviar
                </Button>
            </Form>
    );
};

export default FormPlan;