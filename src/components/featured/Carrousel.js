import React from 'react';
import Slider from "react-slick";

import slide_one from '../../resources/images/slider1.jpg';
import slide_two from '../../resources/images/slider6.jpg';
import slide_three from '../../resources/images/slider7.jpg';
import slide_four from '../../resources/images/slider8.jpg';


const Carrousel = () => {

    const settings = {
        dots: false,
        infinite:true,
        autoplay: true,
        speed: 500
    }

    return (
        <div 
            className="carrousel_wrapper"
            style={{
                height:`${window.innerHeight}px`,
                overflow:'hidden',
                width:'99%',
                minWidth:'470px'
            }}
        >
            <Slider {...settings}>
                <div>
                   <div 
                        className="carrousel_image"
                        style={{
                            background:`url(${slide_one})`,
                            height:`${window.innerHeight}px`,
                            opacity:0.6
                        }}
                   ></div>
                </div>
                <div>
                    <div 
                        className="carrousel_image"
                        style={{
                            background:`url(${slide_two})`,
                            height:`${window.innerHeight}px`,
                            opacity:0.6
                        }}
                   ></div>
                </div>
                <div>
                    <div 
                        className="carrousel_image"
                        style={{
                            background:`url(${slide_three})`,
                            height:`${window.innerHeight}px`,
                            opacity:0.6
                        }}
                   ></div>
                </div>
                <div>
                   <div 
                        className="carrousel_image"
                        style={{
                            background:`url(${slide_four})`,
                            height:`${window.innerHeight}px`,
                            opacity:0.6
                        }}
                   ></div>
                </div>
            </Slider>
            
        </div>
    );
};

export default Carrousel;