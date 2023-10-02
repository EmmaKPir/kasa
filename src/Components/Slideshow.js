import React, {useState} from "react";
import ChevronRight from '../assets/chevronRight.png'
import ChevronLeft from '../assets/chevronLeft.png'

function Slideshow ({pictures}) {
    const [current, setCurrent] = useState(0);
    const length = pictures.length;

    const nextPicture = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevPicture = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    
    return (
        <div className="kasa-container-slider">
            <img src={pictures[current]} className='slider-image' alt={`appartement${current +1}`}/>
            <img src={ChevronLeft} className='left-arrow' alt='left-arrow' onClick={prevPicture} />
            <img src={ChevronRight} className='right-arrow' alt='right-arrow' onClick={nextPicture}/>
            <p>{current + 1}/{length}</p>
        </div>
    )
}

export default Slideshow