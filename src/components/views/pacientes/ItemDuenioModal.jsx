import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ItemDuenioModal = ({ paciente }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="mx-lg-2">
        {paciente.nombre}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Información de Dueño</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="row-cols-1 row-cols-md-2">
            <Col className="text-center">
              <h5 className="text-primary-emphasis fw-bold text-decoration-underline">
                Nombre
              </h5>
              <p className="lead">{paciente.nombre}</p>
            </Col>
            <Col className="text-center">
              <h5 className="text-primary-emphasis fw-bold text-decoration-underline">
                Email
              </h5>
              <p className="lead">{paciente.email}</p>
            </Col>
            <Col className="text-center">
              <h5 className="text-primary-emphasis fw-bold text-decoration-underline">
                Telefono
              </h5>
              <p className="lead">{paciente.telefono}</p>
            </Col>
            <Col className="text-center">
              <h5 className="text-primary-emphasis fw-bold text-decoration-underline">
                Direccion
              </h5>
              <p className="lead">{paciente.direccion}</p>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ItemDuenioModal;
