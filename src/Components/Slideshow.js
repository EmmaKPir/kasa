import React, {useState} from "react";
import ChevronRight from '../assets/chevronRight.png';
import ChevronLeft from '../assets/chevronLeft.png';

function Slideshow ({currentLogement}) {
    const [current, setCurrent] = useState(0)
    const pictures = currentLogement.pictures
    const currentPicture = pictures[current]

    const nextPicture = () => {
        setCurrent(current === pictures.length - 1 ? 0 : current + 1);
    }

    const prevPicture = () => {
        setCurrent(current === 0 ? pictures.length - 1 : current - 1);
    }
    
    return (
        <div className="kasa-container-slider">
            <img src={currentPicture} className='slider-image' alt={currentLogement.title}/>
            {pictures.length === 1 ? null : (
                <div className="kasa-slider-element">
                    <img src={ChevronLeft} className='left-arrow' alt='left-arrow' onClick={prevPicture} />
                    <img src={ChevronRight} className='right-arrow' alt='right-arrow' onClick={nextPicture}/>
                    <p className="kasa-slider-number">{current + 1}/{pictures.length}</p>
                </div>
            )}

        </div>
    )
}

export default Slideshow;
