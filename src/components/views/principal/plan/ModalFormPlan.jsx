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
                <p>Si quieres solicitar mas información sobre los planes que ofrecemos, puedes completar el siguiente formulario:</p>
                <FormPlan></FormPlan>
            </Modal.Body>
        </Modal>
    );
};

export default ModalFormPlan;