import { Container } from "react-bootstrap";
import "../../css/principal/SeccionPrincipal.css";
import "../../css/principal/Filtros.css";
const SeparadorCustom = ({ imgSeparador, forma }) => {
    return (
        <Container className="py-3">
            <div className="w-100 h-100 px-4 position-relative">
                <img src={forma} alt="Forma de separador" className="w-25 w-25 position-absolute z-n1 formaSeparador" />
            </div>
            <div className="w-100 px-5 position-relative">
                <img src={imgSeparador} alt="Imágen de separador" className="w-25 h-25 filtroGris" />
            </div>
            <hr className="dashed" />
        </Container>
    );
};

export default SeparadorCustom;