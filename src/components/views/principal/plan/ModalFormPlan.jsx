import { Modal } from "react-bootstrap";
import FormPlan from "./FormPlan";

const ModalFormPlan = ({show,onHide}) => {
    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton className="p-3">
                <Modal.Title id="modalFormPlan">
                    Más Info de Planes
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="px-4">
                <p>Si quieres <strong>solicitar mas información</strong> sobre los <strong>planes que ofrecemos</strong>, puedes completar el siguiente formulario:</p>
                <FormPlan onHide={onHide}></FormPlan>
            </Modal.Body>
        </Modal>
    );
};

export default ModalFormPlan;