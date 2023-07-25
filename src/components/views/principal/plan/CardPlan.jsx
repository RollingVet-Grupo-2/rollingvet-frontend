import { Button, Card } from 'react-bootstrap';
import "../../../../css/principal/CardPlan.css"
import { useState } from 'react';
import ModalFormPlan from './ModalFormPlan';

const CardPlan = ({ tituloPlan, descripcionPlan, imgPlan }) => {
    const [modalMostrar, setModalMostrar] = useState(false);
    const handleModalCerrar = () => setModalMostrar(false);
    const handleModalMostrar = () => setModalMostrar(true);

    return (
        <>
            <Card className="bg-dark text-white rounded-4 overflow-hidden cardPlan">
                <Card.Img src={imgPlan} alt={tituloPlan} className="rounded-4 w-100 h-100 object-fit-cover" />
                <Card.ImgOverlay className="d-flex flex-column justify-content-end p-2 gap-3">
                    <div className="w-100 mt-auto">
                        <Card.Header className="rounded-4 bg-primary mb-3 border border-2 border-dark">
                            <Card.Title className="p-2 text-dark text-center">{tituloPlan}</Card.Title>
                        </Card.Header>
                        <Card.Body className="d-flex flex-column text-bg-dark rounded-4">
                            <Card.Text>{descripcionPlan}
                            </Card.Text>
                            <Card.Footer>
                                <Button variant="outline-light" className="w-100 rounded-4 border border-2" onClick={handleModalMostrar}>+ Info</Button>
                            </Card.Footer>
                        </Card.Body>
                    </div>
                </Card.ImgOverlay>
            </Card>
            <ModalFormPlan
                show={modalMostrar}
                onHide={handleModalCerrar}
            />
        </>
    );
};

export default CardPlan;