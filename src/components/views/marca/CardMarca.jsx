import { Col } from "react-bootstrap";
import "../../../css/CardMarca.css"

const CardMarca = ({ nombreMarca, imgMarca }) => {
  return (
    <Col>
      <div className="p-3 h-100 d-flex justify-content-center align-items-center position-relative">
        <img src={imgMarca} alt={nombreMarca} className="img-fluid filtroGris" />
        <div className="overlayColorPrincipal"></div>
      </div>
    </Col>
  );
};

export default CardMarca;
