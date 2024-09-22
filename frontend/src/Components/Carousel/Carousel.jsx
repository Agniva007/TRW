import React from "react";
import "./Carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../ProductCard/ProductCard";
const Carousel = ({ AllProductData }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 868,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };
  
  return (
    <div className="mt-5 mb-10">
      <div className="slider-container">
        <Slider {...settings}>
          {AllProductData?.map((product, i) => {
            return (
              <div key={i}>
                <ProductCard
                  productName={product.name}
                  imageSrc={product.image ? product.image : "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"}
                  description={product.description}
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
