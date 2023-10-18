import React, { useState } from 'react';
import previous from '../assets/previous.png'
import next from '../assets/next.png'


function Slideshow({pixPath}) {

    const imagePath = pixPath.toString().split(',')
    const imagesNumber = imagePath.length;

    const [index, setIndex] = useState(0);
    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? imagesNumber - 1  : newIndex);
    }
    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= imagesNumber ? 0 : newIndex);
    }
  
    if ( imagesNumber === 1 ) {
    return (
        <div className='slideshow'>
            <img src={imagePath[index]} alt='' className="slideshow__image"/>
        </div>
    ) } else {
    return (
        <div className='slideshow'>
            <img src={imagePath[index]} alt='' className="slideshow__image"/>
            <div className="slideshow__nav">
                <img src={previous} alt='' onClick={handlePrevious} className="slideshow__arrow"/>
                <p className='slideshow__num'>{index+1}/{imagesNumber}</p>
                <img src={next} alt='' onClick={handleNext} className="slideshow__arrow"/>
            </div>
        </div>
    )}
}

export default Slideshow