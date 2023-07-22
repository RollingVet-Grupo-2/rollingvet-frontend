import "../../../css/Filtros.css";

const CardMarca = ({ nombreMarca, imgMarca }) => {
  return (
    <>
      <div className="p-3 d-flex justify-content-center align-items-center position-relative">
        <img src={imgMarca} alt={nombreMarca} className="img-fluid filtroGris" />
      </div>
    </>
  );
};

export default CardMarca;
