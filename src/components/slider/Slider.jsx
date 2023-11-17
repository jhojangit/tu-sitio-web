import React, { useEffect, useState } from 'react'
import "../slider/slider.css"


const Slider = ({ images }) => {


    const [sliderNumber, setSliderNumber] = useState(0);


    const handleRight = () => {
        if (sliderNumber >= 0 && sliderNumber < images.length) setSliderNumber(sliderNumber + 1)
        if (sliderNumber == images.length - 1) setSliderNumber(0)
    }

    const handleLeft = () => {
        if (sliderNumber <= images.length - 1 && sliderNumber > 0) setSliderNumber(sliderNumber - 1)
        if (sliderNumber == 0) setSliderNumber(images.length - 1)
    }


    useEffect(() => {
        const timeout = setTimeout(() => {
            
            setSliderNumber((prevSliderNumber) =>
                prevSliderNumber === images.length - 1 ? 0 : prevSliderNumber + 1
            );
        }, 4000);

        return () => {
            clearTimeout(timeout);
        };

    }, [sliderNumber]);


    return (
        <div className='slider__container'>
            <div className="slider__outer">

                <i onClick={handleRight} className='slider__arrow bx bx-lg bxs-right-arrow-square'></i>

                <div className={`slider__inner`} style={{ transform: `translateX(calc(-${sliderNumber}/${images.length}*100%`, width: `${images.length}00%` }}>

                    {
                        images?.map(image => (

                            <div className="slider__img-container" key={image.id}>

                                <a href={image.url} target="_blank" rel="noopener noreferrer">

                                <img
                                    className='slider__img'
                                    src={image.img}
                                    alt={image.name} 
                                    title={image.name}
                                    />
                                </a>
                            </div>
                        ))
                    }

                </div>

                <i onClick={handleLeft} className='slider__arrow bx bx-lg bxs-left-arrow-square '></i>

            </div>
        </div>
    )
}

export default Slider