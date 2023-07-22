import { Button } from "react-bootstrap";
import { ArrowRight, ArrowLeft } from "react-bootstrap-icons";
import { useSwiper } from "swiper/react";

const NavegacionSlider = () => {
    const swiper = useSwiper();
    return (
        <div className="d-flex gap-2 justify-content-end p-3">
            <Button variant="outline-dark" type="button" onClick={()=> swiper.slidePrev()} className="rounded-circle p-2 lh-1">
                <ArrowLeft size={24}></ArrowLeft>
            </Button>
            <Button variant="outline-dark" type="button" onClick={()=> swiper.slideNext()} className="rounded-circle p-2 lh-1">
                <ArrowRight size={24}></ArrowRight>
            </Button>
        </div>
    );
};

export default NavegacionSlider;