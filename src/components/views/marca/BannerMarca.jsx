import Carousel from 'react-bootstrap/Carousel';
import ImagenBanner from './ImagenBanner';
import BannerMarca1 from "../../../assets/BannerMarca/banner_DogChow.jpg"
import BannerMarca2 from "../../../assets/BannerMarca/banner_Eukanuba.png"
import BannerMarca3 from "../../../assets/BannerMarca/banner_PurinaProPlan.jpg"
import BannerMarca4 from "../../../assets/BannerMarca/banner_RoyalCanin.jpg"


const BannerMarca = () => {
    return (
<Carousel slide={true} controls={false} indicators={false}>
      <Carousel.Item>
        <ImagenBanner src={BannerMarca1}/>
    </Carousel.Item>
      <Carousel.Item>
        <ImagenBanner src={BannerMarca3}/>
    </Carousel.Item>
      <Carousel.Item>
        <ImagenBanner src={BannerMarca4}/>
    </Carousel.Item>
      <Carousel.Item>
        <ImagenBanner src={BannerMarca2}/>
    </Carousel.Item>
    </Carousel>
  );
}

export default BannerMarca;