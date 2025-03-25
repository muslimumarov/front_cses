import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const MyLogoCarousel = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className={"mx-auto max-w-[90%]"}>
      <div>
        <img
          src={"/images/uzcert.png"}
          width={500}
          height={500}
          alt={"Uzcert"}
          className={"mx-auto max-w-[90%]"}
        />
      </div>
      <div>
        <img
          src={"/images/cyber-club.png"}
          width={500}
          height={500}
          alt={"Cyber Club"}
          className={"mx-auto max-w-[90%]"}
        />
      </div>
      <div>
        <img
          src={"/images/cyber-community.png"}
          width={500}
          height={500}
          alt={"Cyber Community"}
          className={"mx-auto max-w-[90%]"}
        />
      </div>
      <div>
        <img
          src={"/images/cyber-park.png"}
          width={500}
          height={500}
          alt={"Cyber Park"}
          className={"mx-auto max-w-[90%]"}
        />
      </div>
    </Slider>
  );
};

export default MyLogoCarousel;
