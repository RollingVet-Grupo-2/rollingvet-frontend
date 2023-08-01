import { Card, Badge } from "react-bootstrap";
import "../../../../css/principal/CardCliente.css";

const CardCliente = ({
    nombreCliente,
    nombreMascota,
    imgCliente,
    especieMascota,
    imgMascotaCliente,
    comentarioCliente,
}) => {
    return (
        <Card className="rounded-4 bg-primary d-flex flex-column flex-md-row overflow-hidden">
            <div className="d-flex position-relative avatarMascota">
                <Card.Img className="object-fit-cover rounded-0" alt={nombreMascota} src={imgMascotaCliente} />
                <div className="d-flex flex-column position-absolute top-0 p-3 gap-1">
                    <Badge bg="secondary" className="px-3 py-2 rounded-4 border border-2 border-dark text-dark">
                        {nombreMascota}
                    </Badge>
                    <Badge bg="secondary" className="px-3 py-2 rounded-4 border border-2 border-dark text-dark">
                        {especieMascota}
                    </Badge>
                </div>
            </div>
            <div>
                <Card.Header className="pt-5 pt-md-3 position-relative">
                    <div className="position-absolute start-0 w-100 text-center avatarCliente" >
                        <img alt={nombreCliente} src={imgCliente} className="border border-3 border-dark text-dark rounded-circle" style={{ height: "6rem" }} />
                    </div>
                    <Card.Title className="py-2 ps-md-5">{nombreCliente}</Card.Title>
                </Card.Header>
                <Card.Body className="p-4 ps-md-5">
                    <Card.Text><strong className="fs-1 fw-bolder lh-1 pe-3">"</strong>{comentarioCliente}</Card.Text>
                </Card.Body>
            </div>
        </Card>
    );
};

export default CardCliente;
