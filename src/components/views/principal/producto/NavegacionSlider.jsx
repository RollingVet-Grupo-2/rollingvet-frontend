import { Button } from "react-bootstrap";
import { ArrowRight, ArrowLeft } from "react-bootstrap-icons";

const NavegacionSlider = () => {
  return (
    <div className="d-flex gap-2 justify-content-end p-3">
      <Button variant="outline-dark" type="button" className="rounded-circle p-2 lh-1 plan-swiper-button-prev">
        <ArrowLeft size={24}></ArrowLeft>
      </Button>
      <Button variant="outline-dark" type="button" className="rounded-circle p-2 lh-1 plan-swiper-button-next">
        <ArrowRight size={24}></ArrowRight>
      </Button>
    </div>
  );
};

export default NavegacionSlider;
