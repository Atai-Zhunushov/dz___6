import React, {useRef} from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import myImg1 from '../img/pexels-kai-c-17328460.jpg'
import myImg2 from '../img/pexels-kai-c-17328461.jpg'
import myImg3 from '../img/pexels-kai-c-17386500.jpg'
import myImg4 from '../img/pexels-kai-c-17397337.jpg'
import myImg5 from '../img/pexels-kai-c-17397168.jpg'
import './slider.css'




const MySlider = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const nextSlide = () => {
        sliderRef.current.slickNext();
    };

    const prevSlide = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <div>
            <Slider ref={sliderRef} {...settings}>
                   <img src={myImg1} alt="Изображение 1" className="img" />
                   <img src={myImg2} alt="Изображение 2" className="img" />
                   <img src={myImg3} alt="Изображение 3" className="img" />
                   <img src={myImg4} alt="Изображение 4" className="img" />
                   <img src={myImg5} alt="Изображение 5" className="img" />
            </Slider>

            <div className='flex'>
                <button onClick={prevSlide} className='btn'>Назад</button>
                <button onClick={nextSlide} className='btn'>Далее</button>
            </div>
        </div>
    );
};

export default MySlider


