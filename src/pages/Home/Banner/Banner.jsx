import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import image
import bannerImg from "../../../assets/banner/banner.jpg";
import bannerImg2 from "../../../assets/banner/banner2.jpg";
import bannerImg3 from "../../../assets/banner/banner3.jpg";
import bannerImg4 from "../../../assets/banner/banner4.jpg";
import bannerImg5 from "../../../assets/banner/banner5.jpg";
import bannerImg6 from "../../../assets/banner/banner6.jpg";

const Banner = () => {
  return (
      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
        <div><img src={bannerImg} /></div>
        <div><img src={bannerImg2} /></div>
        <div><img src={bannerImg3} /></div>
        <div><img src={bannerImg4} /></div>
        <div><img src={bannerImg5} /></div>
        <div><img src={bannerImg6} /></div>
      </Carousel>
    
  );
};

export default Banner;
