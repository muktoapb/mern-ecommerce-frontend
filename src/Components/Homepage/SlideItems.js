import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './SlideItems.css'
import sliderData from './sliderData'

const SlideItems = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        autoplay: true,
        arrows: false,
    };
    return (
        <div>
            <Slider {...settings}>
                {sliderData.map((value, index) => {
                    return (
                        <>
                            <div className='c-flex' key={index}>
                                <div className='row'>
                                    <h1 className='slider-tittle'>{value.title}</h1>
                                    <p>{value.desc}</p>
                                </div>
                                <div className='row'>
                                    <img className='slider-img' src={value.cover} alt='' />
                                </div>
                            </div>
                        </>
                    )
                })}
            </Slider>
        </div>
    );
};

export default SlideItems;