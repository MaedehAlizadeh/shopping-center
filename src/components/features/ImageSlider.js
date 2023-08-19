import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Styles
import styles from './ImageSlider.module.css';



const ImageSlider = ({image}) => {
    const img= image;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <Slider {...settings} className={styles.container}>
            <div>
                <img decoding="async" src={img} alt="product Image" data-lazy-src={img} className={styles.productImage}/>
            </div>
            <div>
                <img decoding="async" src={img} alt="product Image" data-lazy-src={img} className={styles.productImage}/>
            </div>
        </Slider>
    );
};

export default ImageSlider;