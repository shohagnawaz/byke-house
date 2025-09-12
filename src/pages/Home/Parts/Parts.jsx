import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Parts = () => {
  return (
    <div className="py-8">
      <h2 className="text-5xl text-center">All Parts Are Available</h2>

      <Carousel className="w-4xl mx-auto p-4">
            <div><img src="https://dev.bikebd.com//storage/app/files/1/Honda/New%20Honda%20CBR%20150R/Close%20Up%20Photos/New%20Honda%20CBR%20150R%20Close%20Up%20Image1.webp" /></div>
            <div><img src="https://dev.bikebd.com//storage/app/files/1/Honda/New%20Honda%20CBR%20150R/Close%20Up%20Photos/New%20Honda%20CBR%20150R%20Close%20Up%20Image2.webp" /></div>
            <div><img src="https://dev.bikebd.com//storage/app/files/1/Honda/New%20Honda%20CBR%20150R/Close%20Up%20Photos/New%20Honda%20CBR%20150R%20Close%20Up%20Image%203.webp" /></div>
            <div><img src="https://dev.bikebd.com//storage/app/files/1/Honda/New%20Honda%20CBR%20150R/Close%20Up%20Photos/New%20Honda%20CBR%20150R%20Close%20Up%20Image%204.webp" /></div>
            <div><img src="https://dev.bikebd.com//storage/app/files/1/Honda/New%20Honda%20CBR%20150R/Close%20Up%20Photos/New%20Honda%20CBR%20150R%20Close%20Up%20Image%205.webp" /></div>
            <div><img src="https://dev.bikebd.com//storage/app/files/1/Honda/New%20Honda%20CBR%20150R/Close%20Up%20Photos/New%20Honda%20CBR%20150R%20Close%20Up%20Image%206.webp" /></div>
          </Carousel>
    </div>
  );
};

export default Parts;
