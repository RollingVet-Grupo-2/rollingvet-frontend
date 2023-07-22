import '../../css/pagContacto.css'
import { Col, Container, Form, Row } from 'react-bootstrap';
import perroFormulario from '../../assets/img/paginaContacto/perroForm.png'

const FormularioContacto = () => {
    return (
        <section className='my-5 pt-5 d-flex flex-column-reverse flex-md-row contenedor_formulario justify-content-around'>
            <aside className='col-12 col-md-6 col-lg-5 text-center'>
                <h3>Nos contactamos con vos!</h3>
                <p>Complete el formulario con sus datos, deje su mensaje y un agente de atencion al cliente se pondra en contacto con usted. </p>
                <img className='perro_formulario' src={perroFormulario} alt="" />
            </aside>
            <aside className='text-center col-12 col-md-5 col-lg-4 rounded fondo_huellas mb-5'>
                <h4 className='pt-2'>Formulario de contacto</h4>
                <hr />
                <Row className='"mx-0 justify-content-md-center'>
                    <Col md="auto">
                        <Form className='text-center'>
                            <Form.Group>
                                <Form.Label>
                                    Nombre y apellido
                                </Form.Label>
                                <Form.Control className='bg-secondary border-dark-subtle bg-opacity-50 border-bottom border-0' type='text' required></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Email
                                </Form.Label>
                                <Form.Control className='bg-secondary border-dark-subtle bg-opacity-50 border-bottom border-0' type='email' required></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Telefono
                                </Form.Label>
                                <Form.Control className='bg-secondary border-dark-subtle bg-opacity-50 border-bottom border-0' type='number' required></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Consulta/Mensaje
                                </Form.Label>
                                <Form.Control className='bg-secondary border-dark-subtle bg-opacity-50 border-bottom border-0' as='textarea' type='email' required></Form.Control>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </aside>
        </section>
    );
};

export default FormularioContacto;