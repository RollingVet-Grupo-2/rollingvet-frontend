import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ItemMascotaModal = ({ mascota }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" onClick={handleShow} className="mx-md-2">
        {mascota.nombreMascota}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Información de Mascota</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="row-cols-1 row-cols-md-2">
            <Col className="text-center">
              <h5 className="text-primary-emphasis fw-bold text-decoration-underline">
                Nombre
              </h5>
              <p className="lead">{mascota.nombreMascota}</p>
            </Col>
            <Col className="text-center">
              <h5 className="text-primary-emphasis fw-bold text-decoration-underline">
                Edad
              </h5>
              <p className="lead">{mascota.edadMascota}</p>
            </Col>
            <Col className="text-center">
              <h5 className="text-primary-emphasis fw-bold text-decoration-underline">
                Especie
              </h5>
              <p className="lead">{mascota.especie}</p>
            </Col>
            <Col className="text-center">
              <h5 className="text-primary-emphasis fw-bold text-decoration-underline">
                Raza
              </h5>
              <p className="lead">{mascota.raza}</p>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="border border-dark border-2 "
            onClick={handleClose}
          >
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ItemMascotaModal;
