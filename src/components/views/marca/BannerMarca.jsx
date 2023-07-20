import { Carousel } from 'react-bootstrap';
import ImagenBanner from './ImagenBanner';
import BannerMarca1 from "../../../assets/BannerMarca/banner_Large_RoyalCanin.png"
import BannerMarca2 from "../../../assets/BannerMarca/banner_Large_Eukanuba.png"

const BannerMarca = () => {
    return (
        <Carousel slide={true} controls={false} indicators={false}>
            <Carousel.Item>
                <ImagenBanner src={BannerMarca1} />
            </Carousel.Item>
            <Carousel.Item>
                <ImagenBanner src={BannerMarca2} />
            </Carousel.Item>
        </Carousel>
    );
}

export default BannerMarca;