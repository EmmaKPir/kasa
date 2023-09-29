import React, {useState} from "react";
import ChevronRight from '../assets/chevronRight.png'
import ChevronLeft from '../assets/chevronLeft.png'

function Slideshow ({id, pictures}) {
    const [current, setCurrent] = useState(0);
    const length = pictures.length;

    const nextPicture = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevPicture = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    
    return (
        <div key={id} className="kasa-container-slider">
            <img src={pictures} className='slider-image' alt="location"/>
            <img src={ChevronLeft} className='left-arrow' alt='left-arrow' onClick={prevPicture} />
            <img src={ChevronRight} className='right-arrow' alt='right-arrow' onClick={nextPicture}/>
            <p>{current + 1}/length</p>
        </div>
    )
}

export default Slideshow