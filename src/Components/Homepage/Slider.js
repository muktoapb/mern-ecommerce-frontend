import React from 'react';
import SlideItems from './SlideItems';
import './Slider.css'

const Slider = () => {
    return (
        <>
            <div className="slider">
                <div className="container">
                    <SlideItems></SlideItems>
                </div>
            </div>
        </>
    );
};

export default Slider;