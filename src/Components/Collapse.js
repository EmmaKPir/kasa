import React, { useState } from 'react';
import chevron from '../assets/chevron.png';

function Collapse({ collapse, title, text }) {
  const [openCollapse, setOpenCollapse] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const handleToggle = () => {
    setOpenCollapse(!openCollapse);
    setIsRotated(!isRotated);
  };

  return (
    <div className="kasa-collapse">
      <p className='kasa-quality'>{title}</p>
      {openCollapse ? (
        <>
          <div key={collapse}>
            <button onClick={handleToggle} className={isRotated ? 'rotate180' : ''}>
              <img src={chevron} alt='chevron' className='toogle' />
            </button>
            <p className='kasa-description'>{text}</p>
          </div>
        </>
      ) : (
        <button onClick={handleToggle}>
          <img src={chevron} alt='chevron' className={`toogle ${isRotated ? 'rotate180' : ''}`} />
        </button>
      )}
    </div>
  );
}

export default Collapse;
