import "../../../css/Filtros.css";

const CardMarca = ({ nombreMarca, imgMarca }) => {
  return (
    <>
      <div className="p-3 d-flex justify-content-center align-items-center">
        <img src={imgMarca} alt={nombreMarca} className="img-fluid dropShadow" />
      </div>
    </>
  );
};

export default CardMarca;
