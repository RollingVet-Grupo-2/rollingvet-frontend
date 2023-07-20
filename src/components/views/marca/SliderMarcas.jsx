import { Row } from "react-bootstrap";
import CardMarca from "./CardMarca";

import imgMarca1 from "../../../assets/CardMarca/marcas_Eukanuba_gris.png";
import imgMarca2 from "../../../assets/CardMarca/marcas_RoyalCanin_gris.png";
import imgMarca3 from "../../../assets/CardMarca/marcas_Whiskas.png";
import imgMarca4 from "../../../assets/CardMarca/marcas_Scrumbles_gris.png";
import imgMarca5 from "../../../assets/CardMarca/marcas_Dreamies_gris.png";
import imgMarca6 from "../../../assets/CardMarca/marcas_Bravo.svg";

const SliderMarcas = () => {
    return (
      <Row xs={1} md={3} lg={4} className="g-3">
        <CardMarca nombreMarca={"Marca 1"} imgMarca={imgMarca1}></CardMarca>
        <CardMarca nombreMarca={"Marca 2"} imgMarca={imgMarca2}></CardMarca>
        <CardMarca nombreMarca={"Marca 3"} imgMarca={imgMarca3}></CardMarca>
        <CardMarca nombreMarca={"Marca 4"} imgMarca={imgMarca4}></CardMarca>
        <CardMarca nombreMarca={"Marca 5"} imgMarca={imgMarca5}></CardMarca>
        <CardMarca nombreMarca={"Marca 6"} imgMarca={imgMarca6}></CardMarca>
      </Row>
    );
};

export default SliderMarcas;